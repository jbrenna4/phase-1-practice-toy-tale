

//###Fetch Andy's toys
//get request
function getAllToys(){
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
//    .then(toyData => toyData.forEach(toy => renderOneToy(toy)));
};



// cleaner fetch (not working)
// function fetchAllToys(){
//     fetch('http://localhost:3000/toys')
//     .then(res => res.json());
//     .then(toyData => toyData.forEach(toy => renderOneToy(toy)));
// };




//###Add Toy Info to the Card
//part of the get request i guess? when we're appending it to the html
function initialize(){
   getAllToys();
};
initialize();

//DOM Rendering
function renderOneToy(toy){
    let card = document.createElement("div");
    card.className = "card";
    let image = document.createElement("img");
    image.src = toy.image
    image.className = "toy-avatar";
    let h2 = document.createElement("h2");
    h2.textContent = toy.name;
    let p = document.createElement("p");
    p.textContent = `${toy.likes} likes`;
    let button = document.createElement("button");
    button.className = "like-btn"
    button.id = toy.id;
    button.textContent = "Like ❤️";
    button.className = "button";
    console.log(button);
    document.querySelector('#toy-collection').appendChild(card);
    card.append(h2);
    card.append(image);
    card.append(p);
    card.append(button);
};

//



//### Add a New Toy
//post request
// function getAllToys(){
//     fetch('http://localhost:3000/toys')
//     .then(response => response.json())
//     .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
// //    .then(toyData => toyData.forEach(toy => renderOneToy(toy)));
// };
// function newToy(){
//     fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify({
//         "name": "Jessie",
//         "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
//         "likes": 0}
//     ),
//   }
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     })


//### Patch request
//event listener for submit event
//document.getElementById("submit").addEventListener("click", function (event) {
    // event.preventDefault();
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var message = document.getElementById("message").value;