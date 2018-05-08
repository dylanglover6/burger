# burger
This Burger Eating App was developed by Dylan Glover in May of 2018 to display knowledge of full stack web development. The App uses `Node.js` and `Express.js` to host a page where the client can add, update, and delete burgers from a SQL hosted database accessed through `Sequelizer`. The HTML is viewed and displayed through the `Handlebars` engine.

To access this page: 
*Create the `burgers_db` database with the `schema.sql` file.
*Add your SQL credentials to the development object of the `config.json` file.
*Run an `npm install` from the root folder.
*Run `node server.js` in command line.
*Acces `localhost:8080` in your web browser.
*Eat some burgers!

Table Of Contents:
*[Server Initialization](./server.js)
*[SQL Schema](./schema.sql)
*[Database Configuration](./config/config.json)
*[CSS Stylesheet](./public/css/style.css)
*[Webpage Javascript](./public/js/app.js)
*[SQL Model](./models/burger.js)
*[Sequelize Dependencies](./models/index.js)
*[API Routes](./routes/api-routes.js)
*[HTML Routes](./routes/html-routes.js)
*[Handlebars Layout](./views/layouts/main.handlebars)
*[Handlebars Index](./views/index.handlebars)