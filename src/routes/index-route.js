const express = require('express');
const router = express.Router();
const {indexController} = require("../controllers/index-control")
const isLoggesin = require("../middlewares/isLoggedin")

router.get("/",isLoggedin,indexController);

module.exports = router;