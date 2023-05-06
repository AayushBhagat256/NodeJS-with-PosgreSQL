const pool = require('../../db')
const query = require('../student/queries')

const getStudents  = (req,res)=>{
    // console.log("getting students");
    pool.query(query.getStudents,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}
const postStudents = (req,res)=>{
    const {id,fname,lname,age} = req.body;
    pool.query(query.postStudents,[id,fname,lname,age],(error,result)=>{
        if(error) throw error;
        res.status(200).json({
            message:"Posted Successfully"
        })
    })
}

module.exports = {
    getStudents,
    postStudents,
}