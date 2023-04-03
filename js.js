console.log('helllo from js ducoment object dom ');
// console.log(document.html);


// document.getElementByClassName("importent-places");
const places = document.getElementsByClassName('importent-places');

for (const place of places){
    console.log(place.innerText);
}
// console.log(places);

