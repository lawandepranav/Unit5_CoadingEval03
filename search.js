async function main(){
    try{
        let data= await searchBrewery();
    
    if (!data){
      return false;
    }
   display(data);
}
   catch(error){
       console.log("Error")
   }

}

async function searchBrewery(){
    try{
        let brewery=document.getElementById("search").value;
        let response= await fetch(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`);
        let data= await response.json();
        return data;
    }
    catch(error){
        console.log("Error")
    }
}

let displayEle=document.getElementById("searchData");
function display(breweryData){
    breweryData.forEach((ele)=>{
        let p=document.createElement("p");
        p.textContent=ele.name;
        displayEle.append(p);
    })
}
let intid;
function debounce(func, delay){
    if (intid){
        clearTimeout(intid)
    }
    intid=setTimeout(function () {
func;
    } , delay)
}