# EAT-DA-BURGER! 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
## Description
A simple full-stack application utilizing a CRUD enabled ORM model to manipulate a MySQL database hosted on Heroku via JawsDB. The application allows the user to add burgers to a list, then devour them and delete them as they wish. Upon visiting the deployed link, the user will be presented with any burgers currently in the database and an input field to add more burgers. Upon adding a new burger, the data will be stored in the datbase. Additionaly, the user can chose to devour or delte the burgers - this will modify the database and refresh the displayed information. 
![EAT-DA-BURGER! screenshot](./public/assets/img/screenshot.png)
## Deployed link
https://frozen-ocean-63424.herokuapp.com/
## Usage
The deployed version of this application is fully functional, however you may run the application locally by following these steps:
1. Clone the repository
2. Navigate to the parent directory and run 'npm i' to install dependencies
3. Configure your MySQL connection in '/config/connection.js'
4. Use the files located in '/db' to setup and seed the scheema
5. Run 'node server' to start server
6. Open a web browser and navigate to 'localhost:8080'
7. Enjoy!

## Questions
If you have any questions, please feel free to [e-mail](mailto:thorngren87@gmail.com) me!        
Check out my [GitHub](https://github.com/Josh8903/) to see more of my work!
