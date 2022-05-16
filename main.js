let container = document.getElementById("container");
async function getData() {
  try {
    let response = await fetch("https://api.openbrewerydb.org/breweries");

     let data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

getData()
function displayData(data) {
    data.forEach(data => {
        let displayCard = document.createElement("div");

        let name = document.createElement("p");
        name.textContent = "Name : " + data.name;
      
        let type = document.createElement("p");
        type.textContent = "Type : " + data.brewery_type;
      
        let city = document.createElement("p");
        city.textContent = "City : " + data.city;
      
        let state = document.createElement("p");
        state.textContent = "State : " + data.state;
        let butt=document.createElement("button");
        butt.textContent="More details..."
        butt.onclick="./brewery.html"
        displayCard.append(name, type, city, state,butt);
      
        container.append(displayCard);
    });

}