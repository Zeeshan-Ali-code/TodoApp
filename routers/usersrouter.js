const express = require("express");
const UsersModel = require("../models/UsersModel");

const Route = express.Router()

Route.get("/", async (req, res) => {
  try {
    const result = await UsersModel.find({});
    res.status(200).send({
      isSuccessfull: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(404).send({
      isSuccessfull: false,
      message: error.message,
      data: error,
    });
  }
})
Route.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UsersModel.findById(id);
    res.status(200).send({
      isSuccessfull: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(404).send({
      isSuccessfull: false,
      message: error.message,
      data: error,
    });
  }
})




Route.post("/", (req, res) => {
  try {
    const body = req.body;
    const usersObj = {
      name: body.name,
      email: body.email,
    };

    const resObj = new UsersModel({ ...usersObj });

    resObj
      .save()
      .then((dbRes) => {
        res.status(201).send({
          isSuccessfull: true,
          data: dbRes,
          message: "User Added Successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          isSuccessfull: false,
          message: err.message,
          data: err,
        });
      });
  } catch (err) {
    res.status(400).send({
      isSuccessfull: false,
      message: err.message,
      data: err,
    });
  }
});




Route.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const result = await UsersModel.findByIdAndUpdate(id, body, { new: true });

    res.status(200).send({
      isSuccessfull: true,
      message: "Record Updated Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      isSuccessfull: false,
      message: error.message,
      data: error,
    });
  }
})
Route.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UsersModel.findByIdAndDelete(id);

    res.status(200).send({
      isSuccessfull: true,
      message: "User Dalated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      isSuccessfull: false,
      message: error.message,
      data: error,
    });
  }
})


module.exports = Route;