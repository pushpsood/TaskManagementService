# TaskManagementSystem with CRUD APIs and task metrics using Node.js and a SQL database:

## Set up your development environment

1. Install Node.js: https://nodejs.org/
2. Choose a SQL database: MySQL
3. Set up Git

##  Project Initialization

1. npm init
2. Install necessary dependencies: express, mysql2, Sequelize for database interaction, Body-parser for parsing JSON data
3. .gitignore file to exclude unnecessary file

## Set up the Database

1. Used Sequelize: TypeScript and Node.js ORM for MySQL. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.
   1. Steps:
      1. npm install --save-dev sequelize-cli
      2. ``sequelize init``
      3. Modify the config
      4. ``sequelize db:create``
      5. ``npx sequelize-cli model:generate --name Task --attributes title:string,status:string,createdAt:date,updatedAt:date``
      6. ``npx sequelize-cli migration:generate --name create_tasks``
      7. ``npx sequelize-cli db:migrate``
2. DB(database_development) available in MySQL with the Tasks table

## Implement CRUD APIs

1. Create routes and controllers for CRUD operations 
2. Testing using Postman (For all APIs, listed only one)
   1. API request for the /tasks route using the POST method: 
      1. HTPP
         ```
         POST /tasks HTTP/1.1
         Host: your-api-domain.com
         Content-Type: application/json
         ```
      2. Request
         ```
         {
         "title": "Sample Task",
         "status": "open"
         }
         ```
