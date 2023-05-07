const express = require('express')



// const Pool = require('pg').Pool

// const pool = new Pool({
//     user:process.env.USER,
//     host:process.env.HOST,
//     database:process.env.DB,
//     password:process.env.PASSWORD,
//     port:process.env.PORT
// })

const {createPool} = require('mysql')

const pool = createPool({
    host:"localhost",
    // port:"3000",
    user:"root",
    password:"Aayush@91103",
    database:"school",
    connectionLimit:10,
})

module.exports = pool;