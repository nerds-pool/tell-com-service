const router = require("express").Router();

//#region IMPORTS
const {
    SendAcceptSMSController,
    SendRejectSMSController,
    SendAnySMSController,
    SendCompleteSConfirmationController,
  } = require("../controllers/sms.controller");

  

  module.exports = router;