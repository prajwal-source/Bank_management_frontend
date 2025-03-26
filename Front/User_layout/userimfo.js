let username_of_box = document.getElementById("box_5")

let id=sessionStorage.getItem("id")
console.log(id);

let request_url = 'http://localhost:8080/user';
let request_url_id = `http://localhost:8080/user/${id}`;

fetch(request_url_id)
.then((response) => {
    return response.json();
})
.then((data) => {
   console.log(data);
   username_of_box.innerHTML=data.username
   
})

.catch((error) => {
    console.log("error");

})

document.getElementById("box_8").addEventListener("click", function () {
    sessionStorage.clear(); // Clear all session storage data
    window.location.replace("index.html"); // Use replace() to prevent back navigation
    alert("Logged Out")
});
