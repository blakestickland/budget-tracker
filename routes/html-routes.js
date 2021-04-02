// // Dependencies
// const path = require('path');

// module.exports = (app) => {
//     // Routes
//     // Each of the below routes just handles the HTML page that the user gets sent to.
    
//     // '/' route loads index.html
//     app.get('/', (req, res) =>
//         res.sendFile(path.join(__dirname, '../public/index.html'))
//     );
    
//     // '/stats' route loads stats.html
//     app.get('/stats', (req, res) =>
//         res.sendFile(path.join(__dirname, '../public/stats.html'))
//     );
    
//     // '/exercise' route loads exercise.html
//     app.get('/budget', (req, res) =>
//         res.sendFile(path.join(__dirname, '../public/budget.html'))
//     );
// };

var path = require("path");

module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
