const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'db4free.net',
    user: 'ims_root',
    password: 'intellisync12',
    database: 'ims_dev'
})

//middleware to parse data as json object
app.use(cors())
app.use(express.json())

//middleware
app.use(express.urlencoded({extended: true}))

/////Experimental Additions

app.get('/*', function (req, res, next) {
    if (!req.path.includes('api'))
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    else next();
});

app.use(express.static(path.join(__dirname, 'build')));

//READ ACCESS
app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM inventory";
    db.query(sqlSelect, (err, result)=> {
        res.send(result)
    })
})

//UPDATE ACCESS
app.put('/api/update', (req, res)=> {
    const ItemName = req.body.ItemName;
    const ItemQuantity = req.body.ItemQuantity;
    const ItemDescription = req.body.ItemDescription;
    const ItemID = req.body.ItemID
    const sqlUpdate = "UPDATE inventory SET item_name = ?, item_quantity = ?, item_description = ? WHERE item_id = ?"
    
    db.query(sqlUpdate, [ItemName, ItemQuantity, ItemDescription, ItemID], (err, result)=> {
        if(err) console.log(err);
    })
})

//DELETE ACCESS
app.delete('/api/delete/:item_id', (req, res)=> {
    const itemID = req.params.item_id
    const sqlDelete = "DELETE FROM inventory WHERE item_id = ?"

    db.query(sqlDelete, itemID, (err, result) => {
       if(err){
           console.log(err)
       }
    })
})

//CREATE ACCESS
app.post("/api/insert", (req, res) => {

    const ItemName = req.body.ItemName;
    const ItemQuantity = req.body.ItemQuantity;
    const ItemDescription = req.body.ItemDescription;
    
    const sqlInsert = "INSERT INTO inventory (item_name, item_quantity, item_description) VALUES (?,?,?)"

    db.query(sqlInsert, [ItemName, ItemQuantity, ItemDescription], (err, result) => {
        console.log(res)
    })
})

const host = '0.0.0.0';
const port = process.env.PORT || 3001;

app.listen(port, host, () => {
    console.log(`Running server on port ${port}!`)
})