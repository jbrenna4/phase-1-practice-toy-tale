

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
    button.addEventListener("click", () => {
        toy.likes += 1;
        p.textContent = `${toy.likes} likes`;
        updateLikes(toy)});
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

  //PATCH REQUEST
  function updateLikes(newToy){
    fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({newToy
      })
    .then(res => res.json())
    .then(toy => console.log(toy))
});}
