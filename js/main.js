//  SELECT ELEMEN IN HTML
let elItem = document.querySelector(".main__item");

//  STARTED WITH FOR OF
for (let pokemon of pokemons) {
  //  CREATE ELEMENT
  let newTopDiv = document.createElement("div");
  let newImg = document.createElement("img");
  let newdivTitle = document.createElement("div");
  let newHead = document.createElement("h4");
  let newDescForWidth = document.createElement("p");
  let newDivButton = document.createElement("div");
  let newBottonDesc = document.createElement("h3");

  //  AFTER CREATE ELEMENT  ADD CLASS
  newTopDiv.classList.add("card");
  newImg.setAttribute("src", pokemon.img);
  newdivTitle.classList.add("card-body");
  newDescForWidth.classList.add("card-text");
  newDivButton.classList.add("last-group");
  newBottonDesc.classList.add("last__desc");
  // ADDED TEXT CONTENT
  (newHead.textContent = pokemon.name), "ismi";
  newHead.textContent = pokemon.name;
  newDescForWidth.textContent = pokemon.avg_spawns;
  newBottonDesc.textContent = pokemon.type;
  //APPEND CHILD //
  elItem.appendChild(newTopDiv);
  newTopDiv.appendChild(newImg);
  newTopDiv.appendChild(newdivTitle);
  newdivTitle.appendChild(newHead);
  newdivTitle.appendChild(newDescForWidth);
  newdivTitle.appendChild(newDivButton);
  newDivButton.appendChild(newBottonDesc);
}
