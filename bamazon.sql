DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INTEGER auto_increment ,
	product_name VARCHAR(255) NOT NULL ,
	department_name VARCHAR(255) NOT NULL ,
    price FLOAT (5, 2) ,
	stock_qty INTEGER ,
	PRIMARY KEY (id)
);
	