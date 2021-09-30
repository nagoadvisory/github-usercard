const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

*/

  //create a cards variable in JSS from HTML
  const cards = document.querySelector('.cards');


axios.get('https://api.github.com/users/nagoadvisory')
  .then(resp =>{
    console.log(resp);
  })
  .catch(resp =>{
    console.error(err);
  })
  .finally(resp =>{
    console.log('IDGAF');
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]

followersArray.forEach(object => {
  axios.get('https:api.github.com/users/${object}').then(res => {
    cardsDiv.appendChild(cardBuilder(res.data))
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function cardBuilder ({avatar_url, name, login, location, html_url, followers, following, bio}) {
//first step is to build JSS variables from element structure
  const cardCard = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardProfileAddress = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  // time to give all the JSS variables content
  cardImage.src = avatar_url;
  cardName.textContent = name;
  cardUsername.textContent = login;
  cardLocation.textContent = location;
  cardProfile.textContent = bio;
  cardProfileAddress.textContent = html_url;
  cardProfileAddress.href = html_url;
  cardFollowers.textContent = 'Followers: ${followers}';
  cardFollowing.textContent = 'Following: ${following}';
  cardBio.textContent = 'Bio: ${bio}';

  //then we arrange elements in proper order
  cardCard.appendChild(cardImage)
  cardCard.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(cardName)
  cardInfoDiv.appendChild(cardUsername)
  cardInfoDiv.appendChild(cardLocation)
  cardInfoDiv.appendChild(cardProfile)
  cardInfoDiv.appendChild(cardFollowers)
  cardInfoDiv.appendChild(cardFollowing)
  cardInfoDiv.appendChild(cardBio)
  cardProfile.appendChild(cardProfileAddress)

  // assign classes
  cardCard.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');

//return the panel
return cardCard;




}