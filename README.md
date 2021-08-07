## Install Node.js
If you've never worked with Node.js before, start with installing the npm manager: nodejs.org/en/download/package-manager

## Install NPM and Mocha
Create a directory for the application:

## mkdir myapp && cd myapp
Now initalize npm. We'll use it to create a package.json with the Mocha framework:

`npm init`

When asked for the details of the application provide the following:

* name: chai_mocha-framework
* entry point: app.js
* test command: ./node_modules/.bin/mocha We shall use this framework to test the application

You can confirm the rest of the values with enter.

Create framework with Express framework
To build the app, we'll use Express Node.js web application framework:

`npm install express --save`
Using --save adds this package to package.json where all dependencies are stored

Run the app
The application is ready to launch:

`node app.js`
Go to http://localhost:8080/ in your browser to view it.

To begin automating with Buddy, simply connect with your Git provider and select the repository containing your project:
Configuring unit tests with Mocha and Chai
Every application requires testing before the deployment to the server, especially a welcome site that determines the first impression. In this example we shall use Mocha as the test running framework, and Chai as the assertion library.

Install Mocha and Chai
Let's add Mocha and Chai packages to the package.json:

`npm install mocha chai --save-dev`
Add a test file
Time to define our first test. We shall keep all testing files in a separate /test directory (orndung muss sein):

`mkdir test`
Now, add the first testing file:

`touch test/mainPage.js`
`touch test/mainPageGroupingTests.js`
The test verfies the content of the websit. For that, we need an HTTP client: https://npm.io/package/request

`npm install request --save-dev`

Run the file to trigger the tests:

`npm test`