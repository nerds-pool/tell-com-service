const {
  sendComplaintAcceptMail,
  sendComplaintRejectMail,
  sendAnyEmail,
  sendCompleteConfirmationMail,
} = require("../services/emailService");

const SendAcceptMailController = async (req, res) => {
  try {
    const { userEmail, userFirstName, complaintID, complaintTitle } = req.body;

    const { result, success } = await sendComplaintAcceptMail(userEmail, userFirstName, complaintID, complaintTitle);
    if (!success) return res.status(400).json({
      result, success, msg: "Sending email failed"
    });
    return res.status(200).json({ result, success, msg: "Sending mail success" })

  } catch (error) {
    return res.status(500).json(error);
  }
};

const SendRejectMailController = async (req, res) => {
  try {
    const { userEmail, userFirstName, complaintID, complaintTitle } = req.body;

    const { result, success } = await sendComplaintRejectMail(userEmail, userFirstName, complaintID, complaintTitle);
    if (!success) return res.status(400).json({
      result, success, msg: "Sending email failed"
    });
    return res.status(200).json({ result, success, msg: "Sending mail success" })

  } catch (error) {
    return res.status(500).json(error);
  }
}

const SendAnyEmailController = async (req, res) => {
  try {
    const { userEmail, emailSubject, emailBody } = req.body;

    const { result, success } = await sendAnyEmail(userEmail, emailSubject, emailBody);
    if(!success) return res.status(400).json({
      result, success, msg: "Sending email failed"
    });
    return res.status(200).json({ result, success, msg: "Sending mail success" })

  } catch (error) {
    return res.status(500).json(error);
  }
}

const SendCompleteEConfirmationController = async (req, res) => {
  try {
    const { userEmail, userFirstName, complaintID, complaintTitle, link } = req.body;

    const { result, success } = await sendCompleteConfirmationMail(userEmail, userFirstName, complaintID, complaintTitle, link);
    if(!success) return res.status(400).json({
      result, success, msg: "Sending email failed"
    });
    return res.status(200).json({ result, success, msg: "Sending mail success" })

  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  SendAcceptMailController,
  SendRejectMailController,
  SendAnyEmailController,
  SendCompleteEConfirmationController,
};