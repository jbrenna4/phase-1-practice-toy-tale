//let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });

//fetch request
function fetchToys() {
  fetch("http://localhost:3000/toys")
   .then((res) => res.json())
//   .then((toyData) => console.log(toyData))
   .then((toyData) => renderToys(toyData))
};

fetchToys();

//variables
// const card = document.createElement("div");
// card.className = "card";

//const toyCollection = document.querySelector("#toy-collection");

// const image = document.createElement("img");
// image.className = "toy-avatar";

// const likes = document.createElement("p");

// const toyName = document.createElement("h2");

// const button = document.createElement("btn");
// button.className = "like-btn";



function renderToys(toys){
//    console.log(toys);
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


function submitForm() {
    const form = document.querySelector(".add-toy-form");
 //   console.log(form);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = e.target.name.value;
        console.log(nameInput);
     const imageInput = e.target.image.value;
        console.log(imageInput);
    newToyObj = {
        name: nameInput,
        image: imageInput,
        likes: 0,
    }
    renderToys([newToyObj]);
    })
};

submitForm();