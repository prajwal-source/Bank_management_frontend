let request_url = 'http://localhost:8080/user';
let mail_url = 'http://localhost:8080/mail';

   let myOtp=Math.trunc(Math.random()*100000);
   console.log(myOtp);
   
   
   
document.getElementById("myform").addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let aadhaar = document.getElementById("aadhaar").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    if(age<18){
        e.preventDefault();
        alert("Age must be greater than 18 ");
        return;
    }
  

    let jsonObject = {
       
        username: username,
        aadhar: aadhaar,
        adress: address,
        email: email,
        age: age,
        phone: phone,
        password: password
      
    }
    let mail_obj = {
        username: username,
        email: email,
        otp:myOtp
    }

    fetch(mail_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mail_obj),
    })
        .then(response => {
            if (!response.ok) {
                alert('error')
            }
        })
        .then(data => {
            console.log("success ", data);

        })
        .catch(error => console.error("Error:", error));

        //fetch while form
fetch(request_url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObject),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check if response has content before parsing JSON
        return response.text();
    })
    .then(text => {
        if (text) {
            return JSON.parse(text); // Parse only if text exists
        }
        return {}; // Return empty object if no data
    })
    .then(data => {
        console.log("Success:", data);
        alert('Details are saved Successfully')
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after form submission
        }, 1000); // Delay 1 second for user experience

    })
    .then(data=>{
        console.log(myOtp);
        
    })
    .catch(error => console.error("Error:", error));

});


    
 

