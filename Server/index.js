const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'intellisync12',
    database: 'ims_db'
})

//middleware to parse data as json object
app.use(cors())
app.use(express.json())

//middleware
app.use(express.urlencoded({extended: true}))

//Initial route
app.get('/', (req, res)=> {
    res.send("Hello Zaryab!")
})

app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM inventory";
    db.query(sqlSelect, (err, result)=> {
        res.send(result)
    })
})

app.delete('/api/delete/:item_id', (req, res)=> {
    const itemID = req.params.item_id
    const sqlDelete = "DELETE FROM inventory WHERE item_id = ?"

    db.query(sqlDelete, itemID, (err, result) => {
       if(err){
           console.log(err)
       }
    })
})

app.post("/api/insert", (req, res) => {

    const ItemName = req.body.ItemName;
    const ItemQuantity = req.body.ItemQuantity;
    const ItemDescription = req.body.ItemDescription;
    
    const sqlInsert = "INSERT INTO inventory (item_name, item_quantity, item_description) VALUES (?,?,?)"

    db.query(sqlInsert, [ItemName, ItemQuantity, ItemDescription], (err, result) => {
        console.log(res)
    })
})

app.listen(3001, () => {
    console.log("Running server on port 3001!")
})