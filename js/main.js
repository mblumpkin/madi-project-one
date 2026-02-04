// JS scripts placed here
const bees = [
  { name: "Pollen Frey", bio: "Pollen bio", img: "./img/PollenFrey.PNG",
    likes: ["Grapes","Wing Painting","The Show Survivor"], dislikes:["Cookie Clicker","Books with Fluff","Technology"], 
            partner: ["1", "2", "3"] },
  { name: "Beeia Honey", bio: "Beeia bio", img: "./img/BeeiaHoney.PNG",
    likes: ["Horses","like2","like3"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] },
  { name: "Burt Bee", bio: "Burt bio", img: "./img/BurtBee.PNG",
    likes: ["like1","like2","like3"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] },
  { name: "Bartney Stinger", bio: "Bartney bio", img: "./img/BartneyStinger.PNG",
    likes: ["like1","like2","like3"], dislikes:["dislike1","dislike2","dislike3"],
            partner: ["1", "2", "3"]},
  { name: "Madi Bee", bio: "Madi bio", img: "./img/MadiBee.png",
    likes: ["like1","Dance Moms","Bee Puns"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] },
  { name: "Mibee Xiao", bio: "Mibee bio", img: "./img/Mibee.PNG",
    likes: ["like1","like2","like3"], dislikes:["The Moon","dislike2","dislike3"],
            partner: ["1", "2", "3"]  },
  {name: "Grant Buzzton", bio: "Grant bio", img: "./img/GrantBuzzton.png", 
    likes: ["Action Movies","Rock Music","like3"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] },
  {name: "Lauren Beechelle", bio: "Lauren bio", img: "./img/LaurenBeechelle.png", 
    likes: ["Bee Office","","like3"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] },
  {name: "Hope Swarm", bio: "Hope bio", img: "./img/HopeSwarm.png", 
    likes: ["like1","like2","like3"], dislikes:["dislike1","dislike2","dislike3"], 
            partner: ["1", "2", "3"] }, 
  {name: "Isabeela Yellolo", bio: "Isabeela bio", img: "./img/IsabeelaYelollo.png", 
    likes: ["Fellow Bees","Honey","Flowers"], dislikes:["Yellow Jackets","Gasoline","dislike3"], 
            partner: ["1", "2", "3"] }, 
         
];

let index = 0;

function renderBee() {
  const bee = bees[index];

  document.getElementById("name").textContent = bee.name;
  document.getElementById("bio").textContent = bee.bio;
  document.getElementById("beePfp").src = bee.img;

  const likesList = document.getElementById("likes");
  likesList.innerHTML = "";
  bee.likes.forEach(like => {
    const li = document.createElement("li");
    li.textContent = like;
    likesList.appendChild(li);
  });

  const dislikesList = document.getElementById("dislikes");
  dislikesList.innerHTML = "";
  bee.dislikes.forEach(dislike => {
    const li = document.createElement("li");
    li.textContent = dislike;
    dislikesList.appendChild(li);
  });

  const partnerList = document.getElementById("partner");
    partnerList.innerHTML = '';
    bee.partner.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      partnerList.appendChild(li);
    });
}

function nextBee() {
  index = (index + 1) % bees.length;
  renderBee();
}

function likeBee() {
  showPopup("There's a match in the hive!");
  nextBee();
}

function stingBee() {
  showPopup("You stung this bee!");
  nextBee();
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  popupText.textContent = message;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
}

renderBee();
