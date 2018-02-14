const express = require('express');
const app = express();
const fs = require('fs');





// this handles static files, initial load of webpage
app.use(express.static('./client'))

// storage of the data of results, may not be needed *******
var arrResults = [];
// this handles the GET method with a route of csv
// app.get('*', (req, res) => {
//   fs.readFile('./samples/sales_report.json', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       arrResults.push(data.toString());
//       arrResults.join('\n');
//     }

//     res.json(arrResults);

//   });
// });




app.post('/', (req, res) => {
  console.log(req.url, 'reqqqqq');
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    body = JSON.parse(body);
    res.json(body);
  })
});



// this handles the static file
// app.use(express.static('./client'), function(req, res) {
//   // this handles the GET route
//   if (req.method === 'GET') {
//    console.log('this is the get');
//     var arr = [];
//   fs.readFile('./samples/sales_report.json', 'utf-8', (err, data) => {
//     arr.push(data);
//   //  console.log(data[526]);
//   })

//  // this handles the POST route
//   } else if (req.method === 'POST' && req.url === '/') {
//     console.log('this is the post', req.info);
//   } 
// });


// listening to server making sure it is up
app.listen(3000, () => {
  console.log('server is on Listening to 3000');
});

