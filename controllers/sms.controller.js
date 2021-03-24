const {
    sendComplaintAcceptSMS,
    sendComplaintRejectSMS,
    sendAnySMS,
    sendCompleteConfirmationSMS,
  } = require("../services/smsService");

  const SendAcceptSMSController = (req, res) =>{
    try {
        const { userPhone, userFirstName, complaintID, complaintTitle } = req.params;
        
        sendComplaintAcceptSMS(userPhone, userFirstName, complaintID, complaintTitle);
      } catch (error) {
        return res.status(500).json(error);
      }
};

const SendRejectSMSController = (req, res) =>{
    try{
        const { userPhone, userFirstName, complaintID, complaintTitle } = req.params;
        
        sendComplaintRejectSMS(userPhone, userFirstName, complaintID, complaintTitle);
      } catch (error) {
        return res.status(500).json(error);
    }
}

const SendAnySMSController = (req, res) =>{
    try{
        const { userPhone, smsBody} = req.params;
        
        sendAnySMS(userPhone, smsBody);
      } catch (error) {
        return res.status(500).json(error);
    }
}

const SendCompleteSConfirmationController = (req, res) =>{
    try{
        const { userPhone, userFirstName, complaintID, complaintTitle, link } = req.params;
        
        sendCompleteConfirmationSMS(userPhone, userFirstName, complaintID, complaintTitle, link);
      } catch (error) {
        return res.status(500).json(error);
    }
}

  module.exports = {
    SendAcceptSMSController,
    SendRejectSMSController,
    SendAnySMSController,
    SendCompleteSConfirmationController,
  };
