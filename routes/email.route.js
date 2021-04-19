const router = require("express").Router();

//#region IMPORTS
const {
    SendAcceptMailController,
    SendRejectMailController,
    SendAnyEmailController,
    SendCompleteEConfirmationController,
  } = require("../controllers/email.controller");

/**
 * @description Send Email : Notify accept the complaint
 * @name post/email/accept
 * @param {String} userEmail complaint user email
 * @param {String} userFirstName complaint user first name
 * @param {String} complaintID complaint id
 * @param {String} complaintTitle complaint title
 */
 router.post("/accept", SendAcceptMailController);
//:userEmail/:userFirstName/:complaintID/:complaintTitle
/**
 * @description Send Email : Notify reject the complaint
 * @name post/email/reject
 * @param {String} userEmail
 * @param {String} userFirstName
 * @param {String} complaintID
 * @param {String} complaintTitle
 */
 router.post("/reject", SendRejectMailController);
///:userEmail/:userFirstName/:complaintID/:complaintTitle
/**
 * @description Send Email : Any
 * @name post/email/send/
 * @param {String} userEmail
 * @param {String} emailSubject
 * @param {String} emailBody
 */
 router.post("/send", SendAnyEmailController);
///:userEmail/:emailSubject/:emailBody
/**
 * @description Send Email : Completion confirmation
 * @name post/email/complete/
 * @param {String} userEmail
 * @param {String} userFirstName
 * @param {String} complaintID
 * @param {String} complaintTitle
 * @param {String} link confirmation link
 */
 router.post("/complete", SendCompleteEConfirmationController);
///:userEmail/:userFirstName/:complaintID/:complaintTitle/:link
 module.exports = router;