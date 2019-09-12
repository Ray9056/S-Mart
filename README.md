# S-Mart
 ## Overview
 Bamazon-CLI is a node command line interface that interacts with the Bamazon SQL Database. It allows the users to view and purchase items from the inventory. It allows Managers to edit and manage the products in the Bamazon database. Lastly it allows Supervisors to view departments and sales data for reports.
 
 ## Step One (Clone the Repository) ##
 
```
git clone https://github.com/Jernical/Bamazon-Supervisor.git
```
## Step Two (Install Packages!) ##

```
npm install
```

## Step Three (Change the mysql password!) ##
Open the `bamazonSupervisor.js` and insert your database password in the field provided.

## Step Four (Run the App!) ##

```
node bamazonSupervisor.js
```

# Views

Bamazon - CLI has a main menu that will take you to the three views based on the current user "Customer", "Manager", and "Supervisor". Each view is unique to each type of user and some are locked out from normal use view passwords.

{Image here}

* View Product Sales by Department - Generates all departments with price, sales, and total profit.

* Create New Department - Lets the user create a new department for products with your choice of overhead costs and name

* Quit - Allows you to exit the application.

