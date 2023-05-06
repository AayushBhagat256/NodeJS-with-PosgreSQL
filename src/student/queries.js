const getStudents = "SELECT * from students"
const postStudents = "INSERT INTO students (id,fname,lname,age) VALUES ($1,$2,$3,$4)"

module.exports = {
    getStudents,
    postStudents
}