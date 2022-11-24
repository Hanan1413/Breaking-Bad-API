





async function getResponse() {
  let response = await fetch("https://www.breakingbadapi.com/api/characters");
  const data = await response.json();
  // console.log(data)

  // To  return just  12 items of json data
  // .filter((item, index) => index < 12)


// loop throught each image form api call and return it
let getImg = data.map((actor) => {
    return [actor.img]
})



// fuction to load image faster
setTimeout(function() {

getImg
 
  
}, 4)

  document.querySelector("#grid").innerHTML = `
            ${data
              .filter((item, index) => index < 12)
              .map(
                (actor) => `
                      <div class="gallery">

                      <img  src=${actor.img}  class="img">
                          <h3 class="desc">Name: ${actor.name}</h3>
                          <h3 class="info"> Nikname: ${actor.nickname}</h3>
                          <h3 class="job">Occupation: ${actor.occupation}</h3>

                          </div>`
              )
              .join("")}`;
}

getResponse();
