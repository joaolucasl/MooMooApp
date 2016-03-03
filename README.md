

![MooMoo App Icon](http://i.imgur.com/my0qdPU.png)  **MooMoo App**
==========

A Yik Yak style web app built with [React.js](https://facebook.github.io/react/) (Frontend), and [Node.js](nodejs.org) (Backend). 

GETTING STARTED
---------------
After downloading or cloning this repository, you should go to the `src` folder, where the code is located. Then, run:

    $ npm install
   
   That will install the dependencies for this project. Then, you will need to create a database to store the data from the application. Since we are using [Sequelize](sequelizejs.com) ORM, we can use different DBMS and it *should work* regardless of which one you choose. 
   
   *Note: The system is being developed with MySQL, but if you want to use PostgreSQL, for instance, you can do so by updating the `package.json` with the respective libraries and `src/config/config.json` to reflect so.*
   
   
   This project uses [Webpack](https://webpack.github.io/) to primarily to transpile, optmise and bundle our React code and its dependencies. Before running the project, run:
   
    $ webpack
    
This will bundle the project code (Components, etc), React and ReactDOM libraries and other dependencies to `/public/js/app.js`, which will be required in the client-side of our application.


 Finally, you can run the server, by running:

    $ node server.js

Note that the server won't restart itself if any errors happen using the `node` command. Using the `nodemon` package is the ideal for that matter.

CODEBASE/CONTRIBUTING
--------
  [ESLint](http://eslint.org/) is being used to create a standard for our codebase. If you plan on sending a PR, please check that you code is compliant with this project's `.eslintrc.json` rules via ESLint. Our ruleset is initally based on AirBNB ECAMScript5 styleguide (Now called `airbnb/legacy`) with addition of custom rules.
  Since this is a project meant for the author learning good development practices, there ain't a need for new contributors. If you feel the need/will to do so, please contact the author.

LICENCE
---------
This project is licensed under the terms of the GNU General Public License v3.0 ([GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)). 
A copy of this licence can be also found in this repository, in `LICENCE.MD` .
 


> Header icon made by [Freepik](http://www.freepik.com) from [www.flaticon.com](http://www.flaticon.com) is licensed under [CC BY3.0](http://creativecommons.org/licenses/by/3.0/)
