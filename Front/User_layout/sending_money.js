let request_url = 'http://localhost:8080/user';


let sender_id = sessionStorage.getItem("id");
let sender_password = sessionStorage.getItem("password");
let sender_amount = parseFloat(sessionStorage.getItem("sender_amount")) || 0;
console.log(sender_amount);



let receiver_id = sessionStorage.getItem("receiver_id")


let sender_url_id = `http://localhost:8080/update/${sender_id}`;
let receiver_url_id = `http://localhost:8080/minus/${receiver_id}`;

document.getElementById("myform").addEventListener('submit', function (e) {
    e.preventDefault();
    let amount = parseFloat(document.getElementById("amount").value)
    let confirm_amount = parseFloat(document.getElementById("confirm_amount").value)

    let password = document.getElementById("password").value;
    if (amount != confirm_amount) {
        alert("Amount must be same")
        return;
    }
    if (sender_password != password) {
        alert("Enter Valid Password")
        return;
    }

    let reciever_amount = parseFloat(sessionStorage.getItem("reciver_amount")) || 0;
    let receiver_data = reciever_amount + amount;
    let receiver_obj = {
        amount: receiver_data
    };

    if (sender_amount < amount) {
        alert("Insuficient Balance")
        return;
    }



    let sender_data = sender_amount - amount
    let sender_obj = {
        amount: sender_data
    }

    fetch(sender_url_id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sender_obj),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error in request");
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
        })
        .catch(error => console.error("Error:", error));




    fetch(receiver_url_id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receiver_obj),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error in request");
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
        })
        .catch(error => console.error("Error:", error));
        alert("Transfer Success")
        window.location.href="index2.html"
})


