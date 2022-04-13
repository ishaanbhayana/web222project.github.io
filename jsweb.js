function validateForm()
{
    var firstName = document.getElementById("fname").value;
    var lastName=document.getElementById("lname").value;
    var emailaddress = document.getElementById("email").value;
    var contactNo = document.getElementById("contact").value;
    var cityName = document.getElementById("city").value;
    var purpose = document.getElementById("purpose");
    var Postal= document.getElementById("postalcode").value;

if (firstName=="")
{
    document.getElementById("fName").innerHTML = "Required Field";
        return false;
    }
    if(firstName.charAt(0)!=firstName.charAt(0).toUpperCase() ){
        document.getElementById("fName").innerHTML  =" First letter of first name needs to be upper case";
        return false


    }
    if (!/^[a-zA-Z]*$/g.test(document.signup.firstName.value)) {
        document.getElementById("fName").innerHTML = "Only alphabet allowed";
         return false;
     }
    if (!/^[a-zA-Z]*$/g.test(document.contact.lastName.value)) {
        document.getElementById("lName").innerHTML = "Only alphabet allowed";
         return false;
     }
     if(!/^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1}[ ]{0,1}\d{1}[A-Za-z]{1}\d{1}$/.test(document.contact.postalcode.value))
     {
         document.getElementById("postalcode").innerHTML="Enter valid postal code";
     }
     if (cityName == "")
     {
document.getElementById("city").innerHTML="Please Enter your City Name"
     }
     if (purpose == "Hiring")
     {}
}

function addBox()
{
    var nt= document.createElement("input");
    nt.setAttribute("name",type);
    var ntt = document.getElementById("hiring");
    ntt.appendChild("nt");
}

/*<script type="text/javascript">
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];       
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
</script>*/