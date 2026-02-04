// JS scripts placed here
const bees = [
  { name: "Pollen Frey", bio: "A Canadian bee that came down to share his love of maple honey. He's ready to settle down in the hive and have larva of his own. ", img: "./img/PollenFrey.PNG",
    likes: ["Maple Honey","Wing Painting","The Show Survivor"], dislikes:["Cookie Clicker","Madi Bee","Coding"], 
            partner: ["Must always bee there", "Sense of humor", "Must bee a Star Wars fan"] },
  { name: "Beeia Honey", bio: "An energetic and extravagent bee ready to yap and buzz to any kind of pollen partner!", img: "./img/BeeiaHoney.PNG",
    likes: ["Horses","Tom Hivelston","Honey Espresso"], dislikes:["Beeology Class","Beessans","Pollentics"], 
            partner: ["Has to bee a catfly lover", "Likes to talk a lot", "Will play Hivecraft on dates"] },
  {name: "Gabee Nectar", bio: "The sweetest bee you'll ever meet! She may be the smallest of the bees, but she's got the biggest heart!", img: "./img/GabeeNectar.png",
    likes: ["Naps","Buzzing in Spanish","B-Dramas"], dislikes:["That one girl from that show","All-You-Can-Eat Nectar","Catflies"],
    partner: ["Can reach the top shelf", "Somebee who will bee friendly", "Watches the wi-wi-wi catfly"] },
  { name: "Burt Bee", bio: "Has a tendancy to sneak into your bag to see what chapstick you're using, but loves to spend time flying together!", img: "./img/BurtBee.PNG",
    likes: ["Hydration","Organic Foods","Nectar"], dislikes:["Chapped Lips","Pollution","EOS"], 
            partner: ["Doesn't use a chapstick that isn't Burt's Bees", "Likes to talk long flights", "Doesn't sleep in"] },
  { name: "Madi Bee", bio: "Is looking for the father of her weenie dogfly Abee. She also loves to cook and clean and is the perfect partner for your hive!", img: "./img/MadiBee.png",
    likes: ["Her dogfly Abbee","Dance Moms","Bee Puns"], dislikes:["Wind","Cockroaches","Red Beeans"], 
            partner: ["Is willing to parent Abbee", "Doesn't buzz along to music", "Will watch larvahood movies every night"] },
  { name: "Mibee Xiao", bio: "Don't mistake her for the killer Asian hornet.", img: "./img/Mibee.PNG",
    likes: ["Clowns","Chinebeese Food","Blue Skies"], dislikes:["The Moon","Pollen Frey","Hive School"],
            partner: ["Like to go to the circus", "Favorite color must bee blue", "Can't bee related to Pollen Frey"]  },
  {name: "Grant Buzzton", bio: "Only has eyes for Madi Bee but joined this site because Madi thought it would be funny.", img: "./img/GrantBuzzton.png", 
    likes: ["Action Movies","Rock Music","Nectar Cheesecake"], dislikes:["Glasses","Movie Spoilers","Humans"], 
            partner: ["Can only bee Madi Bee", "Must have brown fuzz, not blonde", "Won't steal movie snacks at the Bee-ater"] },
  {name: "Lauren Beechelle", bio: "A graceful flier and all around hard working, busy bee. She's not looking for any kind of slacker!", img: "./img/LaurenBeechelle.png", 
    likes: ["Bee Office","Smoothbees","Sweet Spot Design"], dislikes:["Comic Sans","Horror Movies","Beatles"], 
            partner: ["Is a hard worker bee", "Likes to go on long air trips", "Has to fit into a buzzy schedule"] },
  {name: "Hope Swarm", bio: "An artistic and fun bee that wants a pollen partner ready to fly her wherever she needs so that she doesn't have to.", img: "./img/HopeSwarm.png", 
    likes: ["Stinger Wood Carving","Honeybo","Bird Watching"], dislikes:["Flying","AI Bee Bots","BuzzFeed"], 
            partner: ["Wants to live on a bee farm", "Is cool with shaving fuzz", "Likes to go to the honey market"] }, 
  {name: "Isabeela Yellolo", bio: "Just a regular bee like every other bee on this site. Definitely not a yellow jacket disguised as a bee.", img: "./img/IsabeelaYelollo.png", 
    likes: ["Fellow Bees","Honey","Flowers"], dislikes:["Yellow Jackets","Gasoline","dislike3"], 
            partner: ["Has to bee a bee", "Doesn't talk to yellow jackets", "Wants to bee partners in crime"] }, 
  {name: "Bartney Stinger", bio: "Is a proud member Sigma Buzz Fraternity at the local universibee. He loves to falunt his fuzz and is looking for a dedicated buzzball lover for his pollen partner. ", img: "./img/BartneyStinger.PNG",
    likes: ["Hive Parties","Flying Around","Buzzball"], dislikes:["The Other Team","Wet Wings","Salty Honey"],
    partner: ["Has to bee a bee", "Doesn't talk to yellow jackets", "Wants to bee partners in crime"] },
  {name: "Conrad Beedman", bio: "A carpenter bee. You would never know that he 3d printed his own hive.", img: "./img/ConradBeedman.PNG",
    likes: ["3d Printing","Stinger Carpentry","Kings of Beeon Band"], dislikes:["Fires","Lazy Worker Bees","The Monarchy"],
    partner: ["Has to be organized", "Wants a baby larva daughter", "Has to be on the carnivore diet"] },
    {name: "Honey Jordan", bio: "", img: "./img/HoneyJordan.png",
    likes: ["?","?","?"], dislikes:["Fires","m","?"],
    partner: ["Has to bee a bee", "Doesn't talk to yellow jackets", "Wants to bee partners in crime"] }
         
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
