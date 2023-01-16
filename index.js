

//###Fetch Andy's toys
//get request
function getAllToys(){
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
//    .then(toyData => toyData.forEach(toy => renderOneToy(toy)));
};
//
getAllToys();

//###Add Toy Info to the Card
//part of the get request i guess? when we're appending it to the html
// function initialize(){
//    getAllToys();
// //   newToy();
// };
// initialize();

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
    card.appendChild(h2);
    card.append(image);
    card.append(p);
    card.append(button);
    document.querySelector('#toy-collection').appendChild(card)
};

//



//### Add a New Toy
//post request
function addNewToy(newToy){
    fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(newToy)
    })}
  //.then(response => response.json().then(toy => renderOneToy(toy)))};

//event listener fpr the button
// button.addEventListener("click", () => {
//     toy.likes += 1})
// console.log(button);


//event listener form submitter
const f = document.querySelector("form");
f.addEventListener("submit", (e) => {
    e.preventDefault();
        const toy = {
            name: e.target.name.value,
            image: e.target.image.value,
            likes: 0}
        renderOneToy(toy);
        addNewToy(toy);
})