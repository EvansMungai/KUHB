# University Hostel Booking System

## Description

This project is a web based application where universities can provide internal hostel booking services to their students.

## Tech stack

Backend - NodeJS, ExpressJS and MySQl Database
Frontend- Bootstrap and CSS modules

## Installation

1. Prerequisites

    Make sure you have the following installed on your system:

   - Node.js 18.17 or later.: You can download it from [the official Node.js website](https://nodejs.org/en).
   - An IDE: You can use any IDE of your choice like [Visual Studio](https://visualstudio.microsoft.com/), [Visual Studio Code](https://code.visualstudio.com/) or [JetBrains Rider](https://www.jetbrains.com/rider/).

2. Clone the repository

    You can clone the repository using the command:

    ``` bash

    git clone https://github.com/EvansMungai/UHB

    ```

4. Restore dependencies

   You can restore the dependencies used by this project using the command:

    ``` bash

    npm install

    ```

5. Import the database

    You can find the starter database in the Server directory.
    Run MySQl and create an empty database. Exit MySQL and run the following command:

    ``` bash

    mysqldump -u username -p databaseName < dumpfile.sql

    ```
    Replace username with database username, databaseName with the name of the empty database and dumpfile.sql with the file found in the server directory.

6. Start the Project in Development Server

    You can start the project in development mode using the command:

    ``` bash

    nodemon index.js

    ```
7. Check out the system in the web browser
   [UHB](https://localhost:3000)



