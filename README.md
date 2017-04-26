# FollowUp
FollowUp is a set of scripts that can be added to an HTML form to trigger an email confirmation for the user. These emails come from a single pre-defined email address and can be customized to include information from their response if desired. A Google account is required for setup.

This repository contains custom scripts and programs designed for use with Google Apps - including Gmail. Check back here periodically for updates to this software. For license information, read the included LICENSE document.

Primary authors: T. Nurse '18


Server side setup:
------------------

  1. Create a new Google Apps Script
  2. Add email-confirmation.gs and customize the email format as desired, then save
  3. Deploy as web-app. (Resources > Deploy as web-app...)
  4. Set as New Version. Execute as "me" and allow anyone to use it, even anonymous
  5. Publish and copy URL
  6. Run script. If asked, allow it to access your account

Customize Email Message:
------------------------
To include parameters from the submitted form in your emails, access that specific parameter using  `e.parameter.PARAMETER_NAME` and assign that to a new variable. Then include that in the email string where desired. To create a new parameter, simply add a new input to your form with the name tag set to the parameter name.


Web Client
----------
There is also a javascript file and a basic HTML form in this repository that handles the actual POST request to your Google Script. Feel free to adjust these as you need and incorporate them into your own website however you would like.


To connect the scripts:
-----------------------
Replace the URL in google-form.js with the URL you copied from deploying the web-app (See server setup step 5).
Ensure that the names of the inputs in the `<form>` object match the parameters in your script.


Using FollowUp
--------------
Users visit your site and fill out the form, and will then receive a follow up email message. That's it. Note: FollowUp does NOT handle sending the form data to your database.


To submit questions, comments, concerns, bug reports, solutions, etc. shoot us an email at developer@marianapolis.org
