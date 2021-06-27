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

UPDATE inventory SET item_name = "Mjollnir", item_quantity = 1, item_description = "Thor's Mighty Hammer" WHERE item_id = 1;

create table contracts(
contract_id int primary key auto_increment not null,
contracter varchar(70),
contract_date date,
contract_description varchar(250),
contract_status varchar(50)
);

INSERT INTO contracts (contracter, contract_date, contract_description, contract_status)
VALUES ("John Legend", "2021-04-20", "Set of Double Sided Wrench, Hammers and Drill Kit", "pending");