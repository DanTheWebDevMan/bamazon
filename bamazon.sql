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

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("watch", "jewelery", 125.00, 10) , ("mouse", "electronics", 10.00, 50), ("shirt", "clothes", 15.99, 25), ("iphone", "electronics", 999.99, 50), ("macbook", "electronics", 999.00, 5), ("stuffed_monkey", "toys", 7.99, 30), ("cofee", "food", 7.99, 48), ("table", "furniture", 249.00, 3), ("chair", "furniture", 69.99, 12);
	