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
  
   

   sessionStorage.setItem("sender_amount",data.balance.amount);
   
})

.catch((error) => {
    console.log("error");

})

document.getElementById("box_8").addEventListener("click", function () {
    sessionStorage.clear(); // Clear all session storage data
    window.location.replace("index.html"); // Use replace() to prevent back navigation
    alert("Logged Out")
});

fetch(`http://localhost:8080/view/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => {
    const imageUrl = URL.createObjectURL(blob);

    // Get the <img> inside the #box_6 div
    const img = document.querySelector("#box_6 img");
    if (img) {
      img.src = imageUrl;
      img.alt = "Loaded image";
    }
  })
  .catch((error) => {
    console.log("Fetch failed:", error.message);
  });


