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

/**
 * @description Send Reject complain SMS
 * @param {String} userPhone Receiver Phone number
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @async
 */
 const sendComplaintRejectSMS = async (userPhone, userFirstName, complaintID, complaintTitle) => {
    try {
    client.messages
    .create({
       body: `Sorry ${userFirstName}, your complaint about ${complaintTitle}\nID#${complaintID} has been rejected. It's not a priority complaint \nThank You`,
       from: process.env.TWILIO_PHONE,
       to: userPhone
     })
    .then(message => console.log(message.sid));
} catch (error) {
    return { result: error.message, success: false };
  }
    return { result: { response: info.response }, success: true };
  
};

/**
 * @description Semd SMS : Any
 * @param {String} userPhone Receiver Phone number
 * @param {String} smsBody Body of the message
 * @async
 */
 const sendAnySMS = async (userPhone, smsBody) => {
    try {
    client.messages
    .create({
       body: smsBody,
       from: process.env.TWILIO_PHONE,
       to: userPhone
     })
    .then(message => console.log(message.sid));
} catch (error) {
    return { result: error.message, success: false };
  }
    return { result: { response: info.response }, success: true };
  
};

/**
 * @description Send complete confirmation SMS
 * @param {String} userPhone Receiver email
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @param {String} link confirmation link
 * @asyncs
 */
 const sendCompleteConfirmationSMS = async (userPhone, userFirstName, complaintID, complaintTitle, link) => {
    try {
        client.messages
        .create({
           body: `Hi ${userFirstName}, completion of your complaint #${complaintID} for ${complaintTitle} has been completed.\nPlease confirm the completion by clicking the following link https://${link}`,
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
    sendComplaintRejectSMS,
    sendAnySMS,
    sendCompleteConfirmationSMS,
};