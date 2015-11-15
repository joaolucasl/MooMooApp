

![MooMoo App Icon](http://i.imgur.com/my0qdPU.png)  **MooMoo App**
==========

A Yik Yak style web app built with [React.js](https://facebook.github.io/react/) (Frontend), and [Node.js](nodejs.org) (Backend). 

GETTING STARTED
---------------
After downloading or cloning this repository, you should go to the `src` folder, where the code is located. Then, run:

    $ npm install
   
   That will install the dependencies for this project. Then, you will need to create a database to store the data from the application. Since we are using [Sequelize](sequelizejs.com) ORM, we can use different DBMS and it *should work* regardless of which one you choose. 
   
   *Note: The system is being developed with MySQL, but if you want to use PostgreSQL, for instance, you can do so by updating the `package.json` with the respective libraries and `src/config/config.json` to reflect so.*
   
   This project uses [Gulp](http://gulpjs.com) to run tasks (primarily to transpile and bundle our React code and its dependencies). Before running the project, run:
   
    $ gulp build
    
This will bundle the project code (Components, etc), React and ReactDOM libraries and other dependencies to `/public/js/app.js`, which will be required in the client-side of our application.

 Finally, you can run the server, by running:

    $ node server.js

Note that the server, won't restart itself if any error happens using the `node` command. Using the `nodemon` package is the ideal for 

LICENCE
---------
This project is licensed under the terms of the GNU General Public License ([GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)). 
A copy of this license can be also found in this repository, in `LICENCE.MD` .
 


> Header icon made by [Freepik](http://www.freepik.com) from [www.flaticon.com](http://www.flaticon.com) is licensed under [CC BY3.0](http://creativecommons.org/licenses/by/3.0/)
