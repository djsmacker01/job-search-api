const express = require('express')

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json())


app.get('/',(req, res)=>{
  let employeeProfile = {
    firstName: 'John',
    lastName: 'Doe',
    occupation: 'Software Engineer',
    age: 30,
    sex: 'male'
  }
  res.json(employeeProfile);
})


app.get('/api/',(req,res)=>{
    let passData = {

    }
})


app.listen(PORT,()=>{
    console.log(`Server listening on: ${PORT}`);
})