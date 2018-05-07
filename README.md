# Pet Weather App

The pet weather app acts as the frontend portion of a 2 system project that communicate through REST endpoints. Its purpose is to be the client facing portion of the project, display data from the backend system, post data to the backend, and query DarkSky for the weather report of the specified location.

## Project Technologies

### Techs

*   [NPM](https://www.npmjs.com/) - node package manager
*   [Yarn](https://yarnpkg.com/en/) - package manager, using it to run the client and express at the same time

### Frameworks

*   Node.js - JavaScript server
*   Express - Web application framework for running requests through (if correctly implemented, would allow client to use it as a proxy for accessing DarkSky content)
*   React - frontend architecture used for holding state of user variables and organizing the code

### Requirements

*   axios: 0.18.0 - http client
*   body-parser: 1.18.2 - populates req.body on the server, when requests are made through it
*   concurrently: 3.5.1 - tool to run express server and
*   ejs: 2.6.1 - allow embedded JS templates
*   express: 4.16.3 - server software
*   express-http-proxy: 1.2.0 - server proxy software - (implemented but not currently used)
*   material-ui: 1.0.0-beta.44 - Tool to make UI pretty
*   react: 16.3.2 - frontend framework, hold state of forms
*   react-dom: 16.3.2 - react routing framework
*   react-router: 4.2.0 - react routing framework
*   react-router-dom: 4.2.2 - react routing framework
*   react-scripts: 1.1.4 -react routing framework
*   request: 2.85.0 - http client

## Installation / Running the app

*   Installation: clone project to work environment `git clone https://github.com/OriginalMidas/PetWeatherApp.git`, open command prompt within created directory and install the required packages
*   Running the app: in the project root directory run `yarn run dev` this will run the client and express app concurrently

## Known issues

*   The application is not able to communicate with the DarkSky API. In order to do so, a proxy server must be set up to make calls to DarkSky's. The addProxyServer branch showcases my attempt at routing the DarkSky API calls through the express server, but to no avail - this exposed a lack of understanding for myself.
*   On the Heroku deployment, you are unable to make posts to the backend, due to being unable to communicate with express server. Due to time constraints, I have not been able to address the root of this issue. 

## Future improvements

*   Postman testing of the forms
*   Client-side form validation before making posts to the backend. 
