const img = document.getElementsByTagName('img');
const form = document.getElementById('form');

let db = {};

const url = "http://localhost:8014/travel_recommendation_api.json";
const options = {
  mode: 'cors',
  headers: { 'Content-Type': 'application/json' }
};

function clearSearch(){
  document.getElementById('found').innerHTML = "";
  document.getElementById('searchInput').value = "";
}

fetch(url, options)
  .then(response => response.json())
  .then((data) =>  db = data )
  .catch(error => console.error("Error:", error));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = document.getElementById('searchInput').value.toLowerCase();
  let foundDiv = document.getElementById('found');

  if (value === "beach" || value === "beaches") {
    foundDiv.innerHTML = "";
    db.beaches.forEach((item, index) => {
      foundDiv.innerHTML += `<div id="card">
          <img id="img" src="${item.imageUrl}" alt="">
          <div id="info">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button>Visit</button>
          </div>
        </div>`;

    });
  } else if (value === "temple" || value === "temples") {
    foundDiv.innerHTML = "";
    db.temples.forEach((item, index) => {
      foundDiv.innerHTML += `<div id="card">
          <img id="img" src="${item.imageUrl}" alt="">
          <div id="info">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button>Visit</button>
          </div>
        </div>`;
    });

  } else if (value === "country" || value === "countries") {
    foundDiv.innerHTML = "";
    db.countries.forEach((item, index) => {
      item.cities.forEach((city)=>{
        foundDiv.innerHTML += `<div id="card">
        <img id="img" src="${city.imageUrl}" alt="">
        <div id="info">
          <h2>${city.name}</h2>
          <p>${city.description}</p>
          <button>Visit</button>
        </div>
      </div>`;
      })

    });
  }else if(value === "japan"){
    foundDiv.innerHTML = "";
    let test = db.countries.filter((place => place.name.toLowerCase() === value));

    test[0].cities.forEach((city)=>{
      foundDiv.innerHTML += `<div id="card">
      <img id="img" src="${city.imageUrl}" alt="">
      <div id="info">
        <h2>${city.name}</h2>
        <p>${city.description}</p>
        <button>Visit</button>
      </div>
    </div>`;
    })
  }else if(value === "brazil"){
    foundDiv.innerHTML = "";
    let test = db.countries.filter((place => place.name.toLowerCase() === value));

    test[0].cities.forEach((city)=>{
      foundDiv.innerHTML += `<div id="card">
      <img id="img" src="${city.imageUrl}" alt="">
      <div id="info">
        <h2>${city.name}</h2>
        <p>${city.description}</p>
        <button>Visit</button>
      </div>
    </div>`;
    }) 
  }else if(value === "australia"){
    foundDiv.innerHTML = "";
    let test = db.countries.filter((place => place.name.toLowerCase() === value));

    test[0].cities.forEach((city)=>{
      foundDiv.innerHTML += `<div id="card">
      <img id="img" src="${city.imageUrl}" alt="">
      <div id="info">
        <h2>${city.name}</h2>
        <p>${city.description}</p>
        <button>Visit</button>
      </div>
    </div>`;
    }) 
  }
});