// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// const PORT = process.env.PORT || 3000;
// const { PORT = 3000 } = process.env;

//middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.send());

// app.get("/", (req, res) => {
//   let data1 = {
//     hello: " Hello world",
//   };
//   res.json(data1);
// });

// app.get("/details", (req, res) => {
//   const details = {
//     Name: "John",
//     sex: "male",
//   };
//   res.json(details);
// });

// app.get("/info", (req, res) => {
//   let info = {
//     last_name: "Adedeji",
//     first_name: "Adewale",
//     occupation: "Full Stack Developer",
//     age: 32,
//   };
//   res.json(info);
// });

// app.post("/searchbycategory", (req, res) => {
//   let searchCategory = req.body.jobCategory;
//   console.log(`search : ${searchCategory}`);
//   let getJob = data.filter((getJobs) => getJobs.jobCategory === searchCategory);
//   console.log(`getJOBS : ${getJob}`);
//   res.json(getJob);
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port: ${PORT}`);
// });

const express = require("express");
// const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json()); // for parsing application/json

app.get("/", (request, response) => {
  let data = { hello: "world" };
  response.json(data);
  response.send('HELLO');
});

app.post("/searchbycategory", (request, response) => {
  let searchCriteria = request.body.jobCategory;
  console.log(`search=${searchCriteria}`);
  let respData = data.filter(job => job.jobCategory === searchCriteria);
  console.log(respData);
  response.json(respData);
});

app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
});

const data = [
  {
    id: "DC1793C1-EC81-D427-78BA-1312BEEFC4CC",
    jobTitle: "Platform engineer",
    company: "Magnis Dis Ltd",
    region: "Chattanooga",
    jobCategory: "IT",
  },
  {
    id: "0254383E-C856-5EE8-3B57-E2674EA0DEBF",
    jobTitle: "(user experience) designer",
    company: "Nulla Interdum Corporation",
    region: "Battagram",
    jobCategory: "IT",
  },
  {
    id: "6A38F873-23DB-3ED4-63AE-C6C117D3C22A",
    jobTitle: "assurance analyst",
    company: "Mauris Blandit Mattis Company",
    region: "San Venanzo",
    jobCategory: "IT",
  },
  {
    id: "5B513268-EE87-AA24-5817-0D66A4D3A331",
    jobTitle: "Software engineer",
    company: "Fusce Aliquam Institute",
    region: "Hallein",
    jobCategory: "IT",
  },
  {
    id: "AE5CAECD-FFBE-6931-2459-3BD478BE5294",
    jobTitle: "Software quality assurance",
    company: "Blandit Mattis Company",
    region: "Kalush",
    jobCategory: "IT",
  },
  {
    id: "DC1793C1-EC81-D427-78BA-1312BEEFC4CC",
    jobTitle: "Certified",
    company: "Magnis Dis Ltd",
    region: "Chattanooga",
    jobCategory: "Accounting",
  },
  {
    id: "0254383E-C856-5EE8-3B57-E2674EA0DEBF",
    jobTitle: "Financial",
    company: "Nulla Interdum Corporation",
    region: "Battagram",
    jobCategory: "Accounting",
  },
  {
    id: "6A38F873-23DB-3ED4-63AE-C6C117D3C22A",
    jobTitle: "Controller",
    company: "Mauris Blandit Mattis Company",
    region: "San Venanzo",
    jobCategory: "Accounting",
  },
  {
    id: "5B513268-EE87-AA24-5817-0D66A4D3A331",
    jobTitle: "Controller Accounting",
    company: "Fusce Aliquam Institute",
    region: "Hallein",
    jobCategory: "Accounting",
  },
  {
    id: "AE5CAECD-FFBE-6931-2459-3BD478BE5294",
    jobTitle: "clerk",
    company: "Blandit Mattis Company",
    region: "Kalush",
    jobCategory: "Accounting",
  },
];
