# S-Mart
 ## Overview
 Bamazon-CLI is a node command line interface that interacts with the Bamazon SQL Database. It allows the users to view and purchase items from the inventory. It allows Managers to edit and manage the products in the Bamazon database. Lastly it allows Supervisors to view departments and sales data for reports.
 
 ## Instructions ##
 
```
1. git clone https://github.com/Jernical/Bamazon-Supervisor.git
2. npm install
3. Open the `bamazonSupervisor.js` and insert your database password in the field provided.
4. node bamazonSupervisor.js
```

## S-Mart Commands ##

* View Product Sales by Department - Generates all departments with price, sales, and total profit.

* Create New Department - Lets the user create a new department for products with your choice of overhead costs and name

* Quit - Allows you to exit the application.

## Views ##

S-Mart - CLI has a main menu that will take you to the three views "Products" "Department" "New Department". Each view is unique to the manager of S-Mart. The manager can change,add, and remove products from any department at S-Mart.


## Products ##

View Product Sales

* Displays all products with product_name, product_sales, department_name, price, and stock_quantity

[![Image from Gyazo](https://i.gyazo.com/f32e228ecf1eab801962f69b7f0bc837.gif)](https://gyazo.com/f32e228ecf1eab801962f69b7f0bc837)


## Departments ##

View Department Sales

* Displays all departments with department_name, over_head_costs, product_sales and total_profit

[![Image from Gyazo](https://i.gyazo.com/25a2cc2539b97a06341421d25d392541.gif)](https://gyazo.com/25a2cc2539b97a06341421d25d392541)


## New Department ##

Create New Department

* Lets the user create a new department for products with your choice of overhead costs and name

[![Image from Gyazo](https://i.gyazo.com/62d6969190dc8b89aa972ffb6a3a0719.gif)](https://gyazo.com/62d6969190dc8b89aa972ffb6a3a0719)

## Quit ##

Exits the S-Mart CLI application

[![Image from Gyazo](https://i.gyazo.com/40bed67cbe60ff91229c16e132274f11.gif)](https://gyazo.com/40bed67cbe60ff91229c16e132274f11)

Copyright 2019 © [Suraj Patel](https://jernical.github.io/Suraj-Patel/)
