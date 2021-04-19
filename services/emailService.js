const nodemailer = require("nodemailer");

// Gmail User Details
const user = "dsprojtest@gmail.com";
const pass = "tell@123";


/**
 * @description Send Accept complain email
 * @param {String} userEmail Receiver email
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @async
 */
 const sendComplaintAcceptMail = async (userEmail, userFirstName, complaintID, complaintTitle) => {
    console.log(userEmail);
 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `tell <${user}>`,
    to: userEmail,
    subject: "Complaint has been accepted",
    html: `<h1>Hi ${userFirstName}, we have reviewed your complaint #${complaintID}</h1><p><b>${complaintTitle}</b> has marked as an inquiry. We are working on it.</p>Thank You<p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (!info)
      throw new Error(
        "Couldn't send the verification email, Something went wrong!"
      );
    return { result: { response: info.response }, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};


/**
 * @description Send Reject complain email
 * @param {String} userEmail Receiver email
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @async
 */
 const sendComplaintRejectMail = async (userEmail, userFirstName, complaintID, complaintTitle) => {
    console.log(userEmail);
 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `tell <${user}>`,
    to: userEmail,
    subject: "Complaint has been rejected",
    html: `<h1>Sorry ${userFirstName}, we have reviewed your complaint #${complaintID}</h1><p><b>${complaintTitle}</b> is not a priority complaint</p>Thank You<p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (!info)
      throw new Error(
        "Couldn't send the verification email, Something went wrong!"
      );
    return { result: { response: info.response }, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * @description Send any email
 * @param {String} userEmail Receiver email
 * @param {String} emailSubject Receiver first name
 * @param {String} emailBody Complaint id
 * @async
 */
 const sendAnyEmail = async (userEmail, emailSubject, emailBody) => {
 
 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `tell <${user}>`,
    to: userEmail,
    subject: emailSubject,
    html: emailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (!info)
      throw new Error(
        "Couldn't send the verification email, Something went wrong!"
      );
    return { result: { response: info.response }, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * @description Send complete confirmation email
 * @param {String} userEmail Receiver email
 * @param {String} userFirstName Receiver first name
 * @param {String} complaintID Complaint id
 * @param {String} complaintTitle Complaint title
 * @param {String} link confirmation link
 * @asyncs
 */
 const sendCompleteConfirmationMail = async (userEmail, userFirstName, complaintID, complaintTitle, link) => {

 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `tell <${user}>`,
    to: userEmail,
    subject: "Complaint completetion Confirmation",
    html: `<h1>Hi ${userFirstName}, completion of your complaint #${complaintID} </h1><p><b>${complaintTitle}</b> is now completed. Please click the button below and confirm the completion</p>
    <a href="${link}" target="_blank" style="background-color:#0C71E0;border:1px solid #FFF;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:16px;line-height:44px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;mso-hide:all;">Confirm</a>
    <p>Thank You</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (!info)
      throw new Error(
        "Couldn't send the verification email, Something went wrong!"
      );
    return { result: { response: info.response }, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};


module.exports = {
    sendComplaintAcceptMail,
    sendComplaintRejectMail,
    sendAnyEmail,
    sendCompleteConfirmationMail,
};
