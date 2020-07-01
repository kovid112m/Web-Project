const mysql = require('phpMyAdmin');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "switchiton"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

function getOption() {
    selectElement = document.querySelector('#fil');

    output = selectElement.value;

    // document.querySelector('.output').textContent = output;
} 

function display(){
    getOption();
    // ans = "You selected " + output;
    document.querySelector('#bos1').innerText = output;
}


// document.getElementById('box1').innerText="Cases"
