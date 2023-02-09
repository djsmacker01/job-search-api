const express = require('express')

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json())


app.get('/',(req, res)=>{
  let info = {
    firstName: 'John',
    lastName: 'Doe',
    occupation: 'Software Engineer',
    age: 30,
    sex: 'male'
  }
  res.json(info.age);
})

app.listen(PORT,()=>{
    console.log(`Server listening on: ${PORT}`);
})