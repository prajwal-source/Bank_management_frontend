
// Register redirecting

document.getElementById("b2").addEventListener("click", function () {
    window.location.href = 'login.html'
})
let request_url = 'http://localhost:8080/user';


document.getElementById("login_form").addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let userId = document.getElementById("uid").value;
    let password = document.getElementById("password").value;
    let request_url_id = `http://localhost:8080/user/${userId}`;
    fetch(request_url_id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.id == userId && data.username == username && data.password == password) {

                alert("login Success")
                sessionStorage.setItem("id", userId);
                window.location.href = "index2.html"

            }
            else {
                alert("Error")

            }
        })

        .catch((error) => {
            console.log("error");

        })

})

// stock data

// let stock_url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=ZUQTI3D2L7HMBFG5"

// fetch(stock_url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     let timeSeries = data["Time Series (Daily)"];
//     console.log(timeSeries["2025-03-25"]);
    
    
// })
// .catch((error)=>{
//     console.log("Error occured");
    
// })

