// Requiring our dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Connection to our database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
          // Insert database password below if you would like to run the CLI locally.
    password: "INSERT PASSWORD HERE",
    database: "bamazon"
});

// Connecting to our database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful!");
// Running makeTable which will start the app
    makeTable();
});

function makeTable() {
    // Displaying an initial list of products for the user, calling promptSupervisor
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        promptSupervisor();
    });
}

promptSupervisor = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["View Product Sales by Department", "Create New Department", "Quit"]
            }
        ])
        .then(function (val) {
            // Checking to see what option the user chose and running the appropriate function
            if (val.choice === "View Product Sales by Department") {
                viewSales();
            }
            else if (val.choice === "Create New Department") {
                addDepartment();
            }
            else {
                console.log("Goodbye!");
                process.exit(0);
            }
        });
}

function addDepartment() {
    // Adding department
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the department?"
            },
            {
                type: "input",
                name: "overhead",
                message: "What is the overhead cost of the department?",
                validate: function (val) {
                    return val > 0;
                }
            }
        ])
        .then(function (val) {
            // Using the information the user provided to create a new department
            connection.query(
                "INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?)",
                [val.name, val.overhead],
                function (err) {
                    if (err) throw err;
                    // If successful, alert the user, run makeTable again
                    console.log("ADDED DEPARTMENT!");
                    makeTable();
                }
            );
        });
}

viewSales = () => {
    // departments table, calculates a total_profit column
    connection.query(
        "SELECT departProd.department_id, departProd.department_name, departProd.over_head_costs, SUM(departProd.product_sales) as product_sales, (SUM(departProd.product_sales) - departProd.over_head_costs) as total_profit FROM (SELECT departments.department_id, departments.department_name, departments.over_head_costs, IFNULL(products.product_sales, 0) as product_sales FROM products RIGHT JOIN departments ON products.department_name = departments.department_name) as departProd GROUP BY department_id",
        (err, res) => {
            console.table(res);
            promptSupervisor();
        }
    );
}