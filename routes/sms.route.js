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
  
 /**
 * @description Send SMS : Notify reject the complaint
 * @name post/sms/reject
 * @param {String} userPhone complaint user phonenumber
 * @param {String} userFirstName complaint user first name
 * @param {String} complaintID complaint id
 * @param {String} complaintTitle complaint title
 */
   router.post("/reject/:userPhone/:userFirstName/:complaintID/:complaintTitle", SendRejectSMSController);

  
 /**
 * @description Send SMS : Any
 * @name post/sms/send
 * @param {String} userPhone complaint user phonenumber
 * @param {String} smsBody body of the message
 */
  router.post("/send/:userPhone/:smsBody", SendAnySMSController);

/**
 * @description Send Email : Completion confirmation
 * @name post/sms/complete/
 * @param {String} userPhone
 * @param {String} userFirstName
 * @param {String} complaintID
 * @param {String} complaintTitle
 * @param {String} link confirmation link
 */
 router.post("/complete/:userPhone/:userFirstName/:complaintID/:complaintTitle/:link", SendCompleteSConfirmationController);


  module.exports = router;