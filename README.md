<!-- Title of the project -->
  # Budget Tracker
  
  [![MIT License](https://img.shields.io/badge/MIT-License-brightgreen)](https://choosealicense.com/licenses/)

  ## Description 
  Track your budget by adding expenses and deposits to this Budget Tracker app. No internet connection? No problem. This app will store the new data and provide an up-to-date total amount regardless of network connections. When the app goes online next and the page is refreshed, the newly created data will be transferred to the online budget tracker database.  


  ## Link to the Deployed App
  [Link to the deployed the Budget Tracker app](https://floating-anchorage-84927.herokuapp.com/)

  ## Link to Github repo
  [Link to Github repo for the Budget Tracker app](https://github.com/blakestickland/budget-tracker)

  
  ## Table of Contents
  * [Usage](#usage)
  * [Technology used](#technology)
  * [My role](#role)
  * [License](#license)
  * [Questions](#questions)
  * [Screenshots](#screenshots)

  
  ## Usage
  1. You are presented with "Your total" budget amount, a row to add or subtract funds, a scrollable table of the Transaction names and amounts, and a flow chart displaying the Total Over Time. 
  2. Create a transaction: Add the name of the transaction (eg. "weekly groceries"), the transaction amount (eg. $134), and click on the appropriate button to Add Funds or Subtract Funds (eg. "Subtract Funds" in this example). 
  3. The transaction will be added to the Transaction table and the chart will be updated. 
    
  ## Technology
  * JavaScript
  * Node.js
  * IndexedDB
  * Service Worker
  * MongoDB
  * Mongoose
  * Express
  * Heroku
  * Mongo Atlas
  * Github
  
  ## Role
  * Create the service worker and make sure that it will check for a network connection before checking the cached data. If the online data is fresher, it will update the cache to the new version. 
  * Add the db.js file.
  * Code the routes (HTML and API).
  * Deploy the app to Heroku using Mongo Atlas. 

  ## License
  [MIT License](https://choosealicense.com/licenses/)
  

  ## Questions
  Please refer any questions via Github or my email address.
  Github username: [blakestickland](https://github.com/blakestickland)

  Email: blakestickland@gmail.com

  ## Screenshots

  ![Home page displaying the Budget Tracker](https://user-images.githubusercontent.com/73763708/113418533-67b1ea00-9411-11eb-9b8c-26108ed43fe5.png)

  ![Data is added to indexedDB when app goes offline](https://user-images.githubusercontent.com/73763708/113418578-80220480-9411-11eb-8e89-dcf4e3ed8461.png)
