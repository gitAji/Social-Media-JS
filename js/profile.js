
// get this user's data first and then get the user's posts
const userName=localStorage.getItem('username');
const accessToken=localStorage.getItem('accessToken');



const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const registerEndpoint = "/social/auth/register"; // POST
const profilesEndpoint = "/social/profiles/"; // POST
const allPostsEndpoint = "/social/posts"; // GET
const aProfileEndpoint=`${API_BASE_URL}${profilesEndpoint}${userName}`;
const homeURL = `${API_BASE_URL}${profilesEndpoint}`;

//console.log(aProfileEndpoint);
const profileName= document.getElementById('user-name');
const email = document.getElementById('email');
const banner=document.getElementById('cover');
const avatar=document.getElementById('avatar');
const logOutBtn=document.getElementById('logout');
const filterBtn=document.getElementById('filter-modal');
const modalBox= document.getElementsByClassName('.modal');


  fetch(`${aProfileEndpoint}`,{
    method: 'GET',
    headers:{
      Authorization: `Bearer ${accessToken}`,
      mode: 'no-cors',
      cache: 'default',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
})
.then((response) => response.json())
.then((data) => {
userData(data);
  //console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

function userData(user){
  profileName.innerHTML = user.name;
  avatar.src=user.avatar;
  email.innerHTML=user.email;
  //banner.src=user.banner;
  //console.log(user.banner);

  
}

