var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

function start(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
  
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_qty);
        console.log('----------------------------------------------------------------------------------------------------')
      }
    
      console.log(' ');
      inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of the product you would like to purchase?",
          validate: function(value){
            if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
          }
        },
        {
          type: "input",
          name: "qty",
          message: "How many would you like to buy?",
          validate: function(value){
            if(isNaN(value)){
              return false;
            } else{
              return true;
            }
          }
        }
        ]).then(function(ans){
          var whatToBuy = (ans.id) - 1;
          var howMuchToBuy = parseInt(ans.qty);
          var grandTotal = parseFloat(((res[whatToBuy].price)* howMuchToBuy).toFixed(2));
    
          //check if enough in stock
          if(res[whatToBuy].stock_qty >= howMuchToBuy){
            //after purchase, updates quantity in Products
            connection.query("UPDATE products SET ? WHERE ?", [
            {stock_qty: (res[whatToBuy].stock_qty - howMuchToBuy)},
            {item_id: ans.id}
            ], function(err, result){
                if(err) throw err;
                console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 2 business days.");
            });
    
            connection.query("SELECT * FROM departments", function(err, deptRes){
              if(err) throw err;
              var index;
              for(var i = 0; i < deptRes.length; i++){
                if(deptRes[i].department_name === res[whatToBuy].department_name){
                  index = i;
                }
              }
              
              //updates totalSales in departments table
              connection.query("UPDATE Departments SET ? WHERE ?", [
              {TotalSales: deptRes[index].TotalSales + grandTotal},
              {department_name: res[whatToBuy].department_name}
              ], function(err, deptRes){
                  if(err) throw err;
              });
            });
    
          } else{
            console.log("Sorry, there's not enough in stock!");
          }
    
          reprompt();
        })
    })
    }
    
    //asks if they would like to purchase another item
    function reprompt(){
      inquirer.prompt([{
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }]).then(function(ans){
        if(ans.reply){
          start();
        } else{
          console.log("Thank you for your business!");
        }
      });
    }
    
    start();