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
      5. ``npx sequelize-cli migration:generate --name create_tasks``
      6. ``npx sequelize-cli db:migrate``
2. 