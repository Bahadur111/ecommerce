		//curren date && time(Nepal)
		function display_date() {
				document.getElementById('clk').innerHTML = Date();
				setTimeout(display_date,1000);
			}
			display_date();
		//form validation
		function form() {
			var name = document.forms["formValidation"]["fullname"].value;
			var address = document.forms["formValidation"]["address"].value;
			var contact = document.forms["formValidation"]["contact"].value;
			var email = document.forms["formValidation"]["email"].value;
			var gender = document.forms["formValidation"]["gender"].value;
			var message = document.forms["formValidation"]["message"].value;
			if(name=="" || address=="" || contact=="" || email=="" || gender=="" || message=="")
			{
				alert("Please, fill up Form");
			}
			else
			{
				alert("Thank you for your Feedback");
			}
		}