require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersrouter = require("./routers/usersrouter")

const App = express();
App.use(cors());
App.use(express.json());




App.use("/users", usersrouter)


// App.get("/users", async (req, res) => {
//   try {
//     const result = await UsersModel.find({});
//     res.status(200).send({
//       isSuccessfull: true,
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(404).send({
//       isSuccessfull: false,
//       message: error.message,
//       data: error,
//     });
//   }
// });

// App.get("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await UsersModel.findById(id);
//     res.status(200).send({
//       isSuccessfull: true,
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(404).send({
//       isSuccessfull: false,
//       message: error.message,
//       data: error,
//     });
//   }
// });

// App.post("/users", (req, res) => {
//   try {
//     const body = req.body;
//     const usersObj = {
//       name: body.name,
//       email: body.email,
//     };

//     const resObj = new usersmodels({ ...usersObj });

  
//     resObj
//        .save()
//       .then((dbRes) => {
//         res.status(201).send({
//           isSuccessfull: true,
//           data: dbRes,
//           message: "User Added Successfully",
//         });
//        })
//        .catch((err) => {
//         throw err;
//      });


//   } catch (error) {
//     res.status(400).send({
//       isSuccessfull: false,
//       message: error.message,
//       data: error,
//     });
//   }
// });
// App.delete("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await UsersModel.findByIdAndDelete(id);

//     res.status(200).send({
//       isSuccessfull: true,
//       message: "User Dalated Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       isSuccessfull: false,
//       message: error.message,
//       data: error,
//     });
//   }
// });

// App.put("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;

//     const result = await UsersModel.findByIdAndUpdate(id, body, { new: true });

//     res.status(200).send({
//       isSuccessfull: true,
//       message: "Record Updated Successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       isSuccessfull: false,
//       message: error.message,
//       data: error,
//     });
//   }
// });


mongoose
  .connect(process.env.MUNGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    App.listen(1026, (err) => {
      if (err) {
        console.log("Error starting the server");
      } else {
        console.log(
          "MongoDB Connected and Server is listening on http://localhost:1026"
        );
      }
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err.message);
  });
