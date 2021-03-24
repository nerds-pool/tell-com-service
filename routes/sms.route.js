const router = require("express").Router();

//#region IMPORTS
const {
    SendAcceptSMSController,
    SendRejectSMSController,
    SendAnySMSController,
    SendCompleteSConfirmationController,
  } = require("../controllers/sms.controller");

  /**
 * @description Send SMS : Notify accept the complaint
 * @name post/sms/accept
 * @param {String} userPhone complaint user phonenumber
 * @param {String} userFirstName complaint user first name
 * @param {String} complaintID complaint id
 * @param {String} complaintTitle complaint title
 */
 router.post("/accept/:userPhone/:userFirstName/:complaintID/:complaintTitle", SendAcceptSMSController);


  module.exports = router;