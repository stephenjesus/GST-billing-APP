
'use strict';
const Hapi=require('hapi');
const mysql = require('mysql');
const connection = require('./db.js');

//connection.query()
const server = Hapi.server({
    port: 3100,
    host: 'localhost'
});
// const server = new Hapi.Server();
// server.connection({host: 'localhost', port: 3100});

//delete products
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: 'GET',
    path: '/deletedb',
    
    handler: function(request, reply){
      //  console.log(request.query);   DELETE * FROM users WHERE
     // console.log(request.query);  

      connection.query(`DELETE FROM products_entry WHERE ?`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              console.log(result);
          }
      })
      
       reply("DELETED SUCCESSFULLY");
    }
});


//edit 
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: 'GET',
    path: '/editdb',
    handler: function(request, reply){
      //  console.log(request.query);
      console.log(request.query);  
      var product_name = request.query['product_name'];
      var product_code = parseInt(request.query['product_code']);
      var product_price = request.query['product_price'];
      var product_gst = request.query['product_gst'];
        if(product_name !== ""){
            connection.query(`UPDATE products_entry SET product_name = ? WHERE product_code = ?`,[product_name, product_code],function(err,result){
            if(err){
                console.log(err); 
            }else{
                console.log(result);
            }
         })
        }
        
        if(product_price !== ""){
            connection.query(`UPDATE products_entry SET product_price = ? WHERE product_code=?`,[product_price, product_code],function(err,result){
            if(err){
                console.log(err); 
            }else{
                console.log(result);
            }
         })
        }

        if(product_gst !== ""){
            connection.query(`UPDATE products_entry SET product_gst = ? WHERE product_code=?`,[product_gst, product_code],function(err,result){
            if(err){
                console.log(err); 
            }else{
                console.log(result);
            }
         })
        }
        reply("EDIDED SUCCESSFULLY");
            }
})

//fetch
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: ['POST', 'GET'],
    path: '/fetchallproductdetails',
    handler: (request, h) => {

        // request.log(['a', 'name'], "Request name");
        // or
        //request.logger.info('In handler %s', request.path);
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM products_entry`, request.query, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(result, '555');
                   resolve(result);
                }
            })
        });
    }
    // handler: function(request, h){
    //   //  console.log(request.query);
    //  // console.log(request.query);  

 

    // }
});

//insert
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: ['POST', 'GET'],
    path: '/inserttodb',
    handler: function(request, reply){
      
      connection.query(`INSERT INTO products_entry SET ?`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              console.log(result);
          }
      })

        reply("INSERTED SUCCESSFULLY");
            }
});

server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: 'GET',
    path: '/searchdb',
    handler: function (request, reply) {
        //  console.log(request.query);
        //  var product_name = request.query['product_name'];

        return new Promise((resolve, reject) => {
            var product_code = parseInt(request.query['product_code']);
            console.log(request.query);
            if (product_code !== "") {
                connection.query(`SELECT * FROM products_entry WHERE product_code=?`, [product_code], function (err, result) {
                    if (err) {
                        console.log("Error");
                        reject('Error');
                    } else {
                        resolve(result);
                    }
                })
            }
        })

    }
});



server.start();
