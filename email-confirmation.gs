function doPost(e) {
	sendConfirmation(e);
}

function sendConfirmation(e) {
	var emailAddress = e.parameter.Email;
    var firstName = e.parameter.FirstName;
    var subject = "Thank you for your registration!";
    var body = "Thank you for registering for the event. If at any time you need to change your registration, visit https://example.com/events/portal/registration.html?name=" + firstName + " and fill out the form again. If you have any questions, comments, or concerns, feel free to reply to this email.";
    MailApp.sendEmail(emailAddress, subject, body, {
      name: 'Form Submissions',
      replyTo: 'replies@example.com',
      noReply: true
    })
}