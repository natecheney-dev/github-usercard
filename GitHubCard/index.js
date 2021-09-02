import 'regenerator-runtime/runtime';


const entryPoint = document.querySelector('.cards');

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/natecheney-dev
*/

const getUserData = async (userStuff) => {
  try{
    const resp = await axios.get(`https://api.github.com/users/${userStuff}`);
    const info = {name: resp.data.name, userName: resp.data.login, profile: resp.data.html_url,       followers: resp.data.followers_url, following: resp.data.following_url, bio: resp.data.bio, cardImgUrl: resp.data.avatar_url};
    const putData = receiver(info);
    entryPoint.appendChild(putData);
  }
  catch{
    const errorText = document.createElement('p');
    errorText.textContent = "OH no! Try again later";
    document.body.appendChild(errorText);
  }
  
  finally{
    console.log("We're back!");
  }
}
getUserData();

/*
  X STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  X STEP 4: Pass the data received from Github into your function,
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

const followersArray = ["tetondan","dustinmyers","justsml","luishrd","bigknell"];



followersArray.forEach(item =>{
  getUserData(item);
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

function receiver({name, userName, profile, followers, following, bio, cardImgUrl}) {
  const humanCard = document.createElement('div');
  const image = document.createElement('img');
  const receivedName = document.createElement('h3');
  const receivedUserName = document.createElement('p');
  const receivedProfile = document.createElement('p');
  const receivedProfileLink = document.createElement('a');
  const receivedFollowers = document.createElement('p');
  const receivedFollowing = document.createElement('p');
  const receivedBio = document.createElement('p');

  receivedName.textContent = `Name: ${name}`;
  receivedUserName.textContent = `Username: ${userName}`;
  receivedProfileLink.textContent = `Profile Link: ${profile}`;
  receivedFollowers.textContent = `Followers: ${followers}`;
  receivedFollowing.textContent = `Following: ${following}`;
  receivedBio.textContent = `Bio: ${bio}`;
  image.src = cardImgUrl;

  image.classList.add('card')
  receivedName.classList.add('card');
  receivedUserName.classList.add('card');
  receivedBio.classList.add('card');
  receivedProfile.classList.add('card');
  receivedFollowers.classList.add('card');
  receivedFollowing.classList.add('card');
  


  
  
  
  humanCard.appendChild(image);
  
  humanCard.appendChild(receivedName);
  humanCard.appendChild(receivedUserName);
  humanCard.appendChild(receivedBio);
  humanCard.appendChild(receivedProfile);
  humanCard.appendChild(receivedFollowers);
  humanCard.appendChild(receivedFollowing);
  
  receivedProfile.appendChild(receivedProfileLink);

  
  return humanCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
