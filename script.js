const get=(hero)=>{   
console.log(hero)
document.getElementById("name").value=hero.name
document.getElementById("Full-Name").value=hero.biography["full-name"]
document.getElementById("publisher").value=hero.biography.publisher
document.getElementById("race").value=hero.appearance.race
document.getElementById("Alignment").value=hero.biography.alignment
document.getElementById("Combat").value=hero.powerstats.combat
document.getElementById("Durability").value=hero.powerstats.durability
document.getElementById("Intelligence").value=hero.powerstats.intelligence
document.getElementById("Power").value=hero.powerstats.power
document.getElementById("Speed").value=hero.powerstats.speed
document.getElementById("Strength").value=hero.powerstats.strength
document.getElementById("img").innerHTML=`<img src="${hero.image.url}" alt="" width=400 height=auto>`
}
const token=`10223569763528853`
const line=`https://superheroapi.com/api.php/${token}`
/* fetch(`${line}/27`)
.then(response=>response.json())
.then (json=>get(json)) */

/* const find=(hunt)=>{
fetch(`${line}/search/${hunt}`)
.then(response=>response.json())
.then (json=>get(json.results[0]))
.catch((error)=>alert(`No hero found with name ${hunt}. Please try again.`));
} */
const find=async (hunt)=>{
try{
    response=await fetch(`${line}/search/${hunt}`)
    link=await response.json()
    get(link.results[0])
}
 catch(error){
    alert(`No powered character found with name ${hunt}. Please try again.`)  
      console.log(error)
 };
 }
const find2=(hunt,num)=>{
    fetch(`${line}/search/${hunt}`)
    .then(response=>response.json())
    .then (json=>get(json.results[num]))
    .catch((error)=>alert(`No powered character found with name ${hunt}. Please try again.`));
    }
document.getElementById("search").onclick=()=>{
    document.getElementById("Character").value=0
        hunt=document.getElementById("item").value
        find(hunt)
    console.log(hunt)
}
const next=()=>{
    char=document.getElementById("Character").value
    if(document.getElementById("item").value!=""){
        find2(document.getElementById("item").value,char)
    }
}
var inputElement = document.getElementById("Character");
inputElement.addEventListener("input", function(event) {
    char=document.getElementById("Character").value
    if(document.getElementById("item").value!=""){
        find2(document.getElementById("item").value,char)
    }
console.log(char)});
