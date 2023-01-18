let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// //###Fetch Andy's toys

// // 1) fetch request
// // 2) render to dom
// // 3) submit form addEventListener 
// // 4) post request for submit
// // 5) click addEventListener
// // 6) patch request for like clicks

fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toyData => {renderToys(toyData);});

function renderToys(toys){
  toys.forEach((toy) => {
    const card = document.createElement("div");
    card.className = ("card");  
//    toyCollection = document.querySelector("#toy-collection");
    const h2 = document.createElement("h2");
    h2.textContent = toy.name;
    card.append(h2)

    const img = document.createElement("img");
    img.className = ("toy-avatar")
    img.src = toy.image;
    card.append(img);

    const p = document.createElement("p");
    p.textContent = `${toy.likes} likes`;
    card.append(p);

    const button = document.createElement("button");
    button.className = ("like-btn");
    button.id = toy.id;
    button.textContent = "Like ❤️"
    card.append(button);
    button.addEventListener("click", (e) =>{
      toy.likes ++;
      p.textContent = `${toy.likes} likes`
    })

    document.querySelector('#toy-collection').appendChild(card)
  });
};


//add event listern to form and append that information to the dom
//33 minutes into Gehrig's demo
function updateForm(){
  const toyForm = document.querySelector("body > div.container > form")
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const card = document.createElement("div");
    card.className = ("card");

    const newToyName = document.createElement("h2");
    newToyName.textContent = e.target.name.value
    card.append(newToyName)

    const button = document.createElement("button");
    button.className = ("like-btn");
//    button.id = toy.id;
    button.textContent = "Like ❤️"
    card.append(button);
    button.addEventListener("click", (e) =>{
      toy.likes ++;
      p.textContent = "0 likes";
    })

    const p = document.createElement("p");
    p.textContent = "0 likes";
    card.append(p);

    const imageNewToy = document.createElement("img");
    imageNewToy.src = e.target.image.value;
    card.append(imageNewToy)
    document.querySelector('#toy-collection').appendChild(card)


  });
};

updateForm(); 