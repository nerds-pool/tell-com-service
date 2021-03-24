const {
    sendComplaintAcceptMail,
    sendComplaintRejectMail,
    sendAnyEmail,
    sendCompleteConfirmationMail,
  } = require("../services/emailService");

  const SendAcceptMailController = (req, res) =>{
    try {
        const { userEmail, userFirstName, complaintID, complaintTitle } = req.params;
        
        sendComplaintAcceptMail(userEmail, userFirstName, complaintID, complaintTitle);
      } catch (error) {
        return res.status(500).json(error);
      }
};

const SendRejectMailController = (req, res) =>{
    try{
        const { userEmail, userFirstName, complaintID, complaintTitle } = req.params;
        
        sendComplaintRejectMail(userEmail, userFirstName, complaintID, complaintTitle);
      } catch (error) {
        return res.status(500).json(error);
    }
}

const SendAnyEmailController = (req, res) =>{
    try{
        const { userEmail, emailSubject, emailBody} = req.params;
        
        sendAnyEmail(userEmail, emailSubject, emailBody);
      } catch (error) {
        return res.status(500).json(error);
    }
}

const SendCompleteEConfirmationController = (req, res) =>{
    try{
        const { userEmail, userFirstName, complaintID, complaintTitle, link } = req.params;
        
        sendCompleteConfirmationMail(userEmail, userFirstName, complaintID, complaintTitle, link);
      } catch (error) {
        return res.status(500).json(error);
    }
}

  module.exports = {
    //SmsController,
    SendAcceptMailController,
    SendRejectMailController,
    SendAnyEmailController,
    SendCompleteEConfirmationController,
  };