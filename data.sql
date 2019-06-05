DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  product_sales DECIMAL(10,2) DEFAULT 0,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Legend of Zelda: Breath of the wild", "Video Games", 59.99, 150),
  ("Red Dead Redemption", "Video Games", 59.99, 200),
  ("Crate of Spam", "Food and Drink", 22.50, 50),
  ("Polo T-Shirt", "Apparel", 49.99, 5),
  ("Khaki Pants", "Apparel", 54.25, 35),
  ("24 Bottle Case Water", "Necessities", 13.25, 42),
  ("John Wick: Chapter 3 - Parabellum", "Films", 40.25, 25),
  ("The Dark Knight", "Films", 22.30, 57),
  ("Operation", "Board Games", 30.50, 35),
  ("Mouse Trap!", "Board Games", 19.95, 23);

  CREATE TABLE departments(
  department_id INT AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  over_head_costs DECIMAL(10,2) NOT NULL,
  primary key(department_id)
);

SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Video Games", 200),
  ("Food and Drink", 100),
  ("Apparel", 50),
  ("Necessities", 300),
  ("Films", 35),
  ("Board Games", 0);