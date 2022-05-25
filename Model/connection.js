var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database:"second_project_knex"
})

// con.connect(function(err) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Connected!");    
//     }
     
    // con.query("CREATE DATABASE second_project_knex", function (err, result) {
    //   if (err){
    //       console.log(err)
    //   }
    //   else{
    //     console.log("Database created");
    //   }
       
    // });
//   })

  
//     var sql = "CREATE TABLE project_tables (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(1000), logo VARCHAR(1000),notes VARCHAR(1000),days_to_complete VARCHAR(1000),short_description VARCHAR(1000),type VARCHAR(1000),course_type VARCHAR(1000),lang_available VARCHAR(1000))";
//     con.query(sql, function (err, result) {
//         if (err){
//             console.log("table already created")
//         }
//         else{
//           console.log("Table created");
//         }
         
//     });
// })


// const data = require('../courses.json')
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Database Connected!");
//     var values = []
//     for (let i = 0; i < data.length; i++) {
//         values.push([data[i].id, data[i].name, data[i].logo, data[i].notes, data[i].days_to_complete, data[i].short_description, data[i].type, data[i].course_type, (data[i].lang_available).toString()])
//     }
//     console.log(values);
//     var sql = `INSERT INTO project_tables VALUES?`
//     con.query(sql, [values], (err, result) => {
//         if (err) throw err;
//         console.log('data inserted succesfully.');
//     })
// })
// module.exports=con

