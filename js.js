console.log('helllo from js ducoment object dom ');
// console.log(document.html);


// document.getElementByClassName("importent-places");
const places = document.getElementsByClassName('importent-places');

for (const place of places){
    console.log(place.innerText);
}
// console.log(places);

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName('h1');
for (const li of allHeadings) {
    // console.log(li.innerText);
}

