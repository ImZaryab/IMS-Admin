use ims_dev;
create table inventory(
item_id int primary key auto_increment not null,
item_name varchar(50),
item_quantity int,
item_supplier varchar(70),
item_description varchar(250),
item_status varchar(50)
);


select * from inventory;

INSERT INTO inventory (item_id, item_name, item_quantity, item_description)  VALUES (0, "Hammer", 5, "Hammer by Thor");
INSERT INTO inventory (item_id, item_name, item_quantity, item_description)  VALUES (1, "Nails", 20, "4 inches iron nails");