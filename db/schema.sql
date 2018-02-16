CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int not null auto_increment,
	burger_name varchar(30) not null,
	devoured boolean not null,
	datecreated timestamp not null,
	primary key (id) 
);

INSERT INTO burgers(burger_name, devoured)
VALUES ("Kale Burger", FALSE), ("Wagyu Beef w/ Pepper Jack", FALSE), ("Buffalo Chicken", FALSE);