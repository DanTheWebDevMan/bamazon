# bamazon
In this activity, we created an Amazon-like storefront with the MySQL skills  learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

### Challenge Instructions: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
 
 ## *What does the user need to do?*
 1. User needs to make sure they have the proper npm installations prior to using app (npm install mysql, inquire, and cli-table)
 2. User needs to type in node and name of js file
 3. Upon succesful connection to the server, user is shown list of items to choose from
 4. User chooses which product they'd like to purchase by choosing product id
 5. User then chooses the number of units they want to purchase
 6. User is shown total price and qty is depleted by purchased amount from total stock quantity
 
 
### Technologies Used:
1. MAMP - Used to startup server connecting to product database
2. MySQL Workbench - Allows to create database and table with product information
3. Visual Studio Code- This is where the JavaScript file was written and where the terminal was ran

## *How does it look?*
Note: Red arrows display user command and input inside terminal and responses

**mySQL code**
Code ran in workbench:

![mysqlcode](https://raw.githubusercontent.com/DanTheWebDevMan/bamazon/master/images/mysqlcode.jpg)

Database create from above code:

![mysqldatabase](https://raw.githubusercontent.com/DanTheWebDevMan/bamazon/master/images/database.jpg)

After Connecting JS file to sql, this is how the terminal looks like once booted:

![terminalatstart](https://raw.githubusercontent.com/DanTheWebDevMan/bamazon/master/images/pic1.jpg)

Succesfully ran terminal:

![terminalsuccess](https://raw.githubusercontent.com/DanTheWebDevMan/bamazon/master/images/pic2.jpg)





