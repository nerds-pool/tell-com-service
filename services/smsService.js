const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

/**
 * @description Send Accept complain SMS
 * @param {String} userPhone Receiver PhoneNumber
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @async
 */
 const sendComplaintAcceptSMS = async (userPhone, userFirstName, complaintID, complaintTitle) => {
    try {
    client.messages
    .create({
       body: `Hi ${userFirstName}, your complaint about ${complaintTitle}\nID#${complaintID} has been reviewed. We are working on it \nThank You`,
       from: process.env.TWILIO_PHONE,
       to: userPhone
     })
    .then(message => console.log(message.sid));
} catch (error) {
    return { result: error.message, success: false };
  }
    return { result: { response: info.response }, success: true };
  
};

module.exports = {
    sendComplaintAcceptSMS,
    // sendComplaintRejectSMS,
    // sendAnySMS,
    // sendCompleteConfirmationSMS,
};