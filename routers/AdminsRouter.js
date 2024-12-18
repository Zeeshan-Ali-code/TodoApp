const express = require("express")

const Route = express.Router()

Route.get("/")
Route.get("/:id")
Route.post("/")
Route.put("/:id")
Route.delete("/:id")