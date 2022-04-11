function validate() {

    var firstname = document.getElementById('fname').value;
    var lastname = docoment.getElementById('lname').value;
    var address = document.getElementById('add').value;
    var address_2 = docoment.getElementById('add_2').value;
    var city = document.getElementById('city').value;
    var stateprovince = docoment.getElementById('city_1').value;
    var postal = document.getElementById('postal').value;

}


document.getElementById('phone').onchange = () => {
    var phoneNumber = document.getElementById('phone').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    if (phoneResult == false) {
        alert('Please enter a valid phone number');
        // return false;

    }
}

document.getElementById('fname').onchange = () => {
    var fullname = document.getElementById('fname').value;
    var fnameRGEX = /^[A-Za-z]{3,30}$/;
    var fnameResult = fnameRGEX.test(fullname);
    debugger
    if (fnameResult == false) {
        alert('Please enter a valid firstname');
        // return false;
    }

}

document.getElementById('lname').onchange = () => {
    var lastname = document.getElementById('lname').value;
    var lnameRGEX = /^[A-Za-z]{3,30}$/;
    var lnameResult = lnameRGEX.test(lastname);
    if (lnameResult == false) {
        alert('Please enter a valid lastname');
        // return false;
    }

}
document.getElementById('add_1').onchange = () => {
    var address = document.getElementById('add_1').value;
    var addRGEX = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    var addResult = addRGEX.test(address);
    if (addResult == false) {
        alert('Please enter  valid address');
        // return false;
    }

}

document.getElementById('add_2').onchange = () => {
    var address_2 = document.getElementById('add_2').value;
    var add2RGEX = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    var add2Result = add2RGEX.test(address_2);
    if (add2Result == false) {
        alert('Please enter a  valid street address');
        // return false;
    }

}


document.getElementById('city').onchange = () => {
    var city = document.getElementById('city').value;
    var cityRGEX = /^[a-zA-Z]{3,20}$/;
    var cityResult = add2RGEX.test(city);
    if (cityResult == false) {
        alert('Enter a valid city name');
        // return false;
    }

}

document.getElementById('city_1').onchange = () => {
    var city_1 = document.getElementById('city_1').value;
    var city_1RGEX = /^[a-zA-Z]{3,20}$/;
    var city_1Result = city_1RGEX.test(city_1);
    if (city_1Result == false) {
        alert('Enter a valid state or province');
        // return false;
    }

}

document.getElementById('postal').onchange = () => {
    var postal = document.getElementById('postal').value;
    var postalRGEX = /^[0-9]{3,20}$/;
    var postalResult = postalRGEX.test(postal);
    if (postalResult == false) {
        alert('Enter a valid zip or postal code');
        // return false;
    }

}

document.getElementById('email_area').onchange = () => {
    var email_area = document.getElementById('email_area').value;
    var email_areaRGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email_areaResult = email_areaRGEX.test(email_area);
    if (email_areaResult == false) {
        alert('Enter a valid email');
        // return false;
    }

}

document.getElementById('feedback').onchange = () => {
    var feedback = document.getElementById('feedback').value;
    var feedbackRGEX = /^[a-zA-Z]{3,200}$/;
    var feedbackResult = feedbackRGEX.test(feedback);
    if (feedbackResult == false) {
        alert('feedback invalid');
        // return false;
    }

}

document.getElementById('suggestions').onchange = () => {
    var suggestions = document.getElementById('suggestions').value;
    var suggestionsRGEX = /^[a-zA-Z]{3,200}$/;
    var suggestionsResult = suggestionsRGEX.test(suggestions);
    if (suggestionsResult == false) {
        alert('suggestion invalid');
        // return false;
    }

}

function ddvalidate() {
    var e = document.getElementById("ddView");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].value;
    if (optionSelIndex == 0) {
        alert("Please select a field");
    }
    else {
        alert("Success !! You have selected Course : " + optionSelectedText); ;
    }
}
function validateForm()
{debugger;
if (!document.getElementById("Yes").checked == true)
     {
         alert("please select the field");
     }
if(!document.getElementById("Maybe").checked == true)
    {
        alert("please select the field");
    }
if(!document.getElementById("No").checked == true)
    {
        alert("please select the field");
    }
}