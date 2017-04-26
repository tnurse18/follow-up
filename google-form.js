function setFields(){
	var intro = document.getElementById("intro");
	intro.style.display = "block";
	var firstSection = document.getElementById("primary-sec");
	var thankYou = document.getElementById("thanks");
	
	firstSection.style.display = "block";
	thankYou.style.display = "none";
}

var request;

function submitForm(){
	if (request) {
		request.abort();
	}
	
	var $form = $('#registration-form');
	var $inputs = $form.find("input, button, select");
	
	var serializedData = $form.serialize();
	console.log(serializedData);
	
	$inputs.prop("disabled", true);
	
	request = $.ajax({
		url: "https://script.google.com/macros/s/YOUR-KEY-HERE/exec",
		type: "post",
		data: serializedData
	});
	
	// Callback handler - success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        $( "#form-container" ).hide();
        $( "#thanks" ).show();
    });

    // Callback handler - failure
    request.fail(function (jqXHR, textStatus, error){
        // Log the error to the console
        //alert(
        //    "The following error occurred: "+
        //    textStatus, error
        //);
        
        // Domain prohibits full success. Request is still received by google. If problems arise, expand this function
		console.log(error);
    });
}

function cancel(){
	var check = confirm("Are you sure you want to leave this page? Your responses will not be saved.");
	if (check == true){
		window.location.href = "https://example.com/index.html";
	}
}

function submit(){
	var firstName = document.getElementById("first-name");
	var lastName = document.getElementById("last-name");
	var email = document.getElementById("email");
	
	if (firstName.value.length > 2) {
		if (lastName.value.length > 2) {
			var emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			var emailCheck = emailFormat.test(email.value);
			if (emailCheck == true){
				submitForm();
			}else{
				alert("Please enter a valid email address");
			}
		}else{
			alert("Please enter your last name");
		}
	}else{
		alert("Please enter your first name");
	}
}