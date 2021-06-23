create schema ims_db;
use ims_db;
create table inventory(
item_id int primary key auto_increment not null default(0),
item_name varchar(50),
item_quantity int,
item_supplier varchar(70),
item_description varchar(250),
item_status varchar(50)
);


select * from inventory;

INSERT INTO inventory (item_name, item_quantity, item_description)  VALUES ("Hammer", 5, "Hammer by Thor");
INSERT INTO inventory (item_name, item_quantity, item_description)  VALUES ("Nails", 20, "4 inches iron nails");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'intellisync12';