function validateForm()
	{
		// Creating a function to validate the form
		var email=document.forms["joinus"]["email"].value;  //Getting the value of email
		var password=document.forms["joinus"]["password"].value; 
        console.log("Something");  //Getting the value of password

		if(email=="" || password=="")   //Checking the conditon whether the form is filled fully or not
		{
			alert("Form is not filled properly. Please fill the form.");
		}
		else
		{
			alert("Thank you for joining us.");
		}
	}

  function Func() {

	document.getElementById("elements").classList.toggle("show");

}

// Close the dropdown menu if the user clicks outside of it
function hideerr()
{
  var errbox = document.getElementById("errbox");
  errbox.style.display="none";  /* Hides the error box after clicking to cross */
}

function hideerrsucc()
{
  var sucbox=document.getElementById("succbox");
  sucbox.style.display="none";  /* Hides the success box after clicking to cross */
  document.getElementById('fm').reset();  //Resets the form after clicking on hide button 
}

window.onclick = function(event) {
if (!event.target.matches('.nav5')) {
  var dropdowns = document.getElementsByClassName("content");
  var i;

  for (i = 0; i < dropdowns.length; i++) {
	var openDropdown = dropdowns[i];

	if (openDropdown.classList.contains('show')) {
	  openDropdown.classList.remove('show');

	   }
   }
 }
}

function feedback()
{
    /* Running a function when someone clicks on submit button */
  /* Taking elements from id  */
    let firstname=document.getElementById('fname');
    var lastname=document.getElementById('lname');
    var Age=document.getElementById('age');
    var Gender=document.getElementById('gender');
    var Email=document.getElementById('email_feed');
    var phonenum=document.getElementById('phone');
    var msg=document.getElementById('message'); 
    var err=document.getElementById('errbox');
    var succ= document.getElementById('succbox');
    
    if(firstname.value=="" || lastname.value=="" || Age.value==""|| Gender.value=="" || Email.value=="" || 
        phonenum.value=="" || msg.value=="")
    {
       err.style.display="block"; /* Displays the error message  */
       
    }
    else
    {
      succ.style.display="block"; /* Displays the success message */
    }
       
}