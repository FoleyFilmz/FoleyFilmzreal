
const ADMIN_USERNAME = "Dylan053108";
const ADMIN_PASSWORD = "Lucky106$";
let isLoggedIn = false;

document.getElementById("adminBtn").onclick = () => {
  document.getElementById("loginModal").classList.remove("hidden");
};

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    isLoggedIn = true;
    document.getElementById("loginModal").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Wrong credentials");
  }
}

function createEvent() {
  const eventName = document.getElementById("eventName").value;
  const eventSection = document.createElement("div");
  eventSection.innerHTML = `<h2>${eventName}</h2>`;
  document.getElementById("events").appendChild(eventSection);
}

function addRider() {
  const riderName = document.getElementById("riderName").value;
  const thumbnail = document.getElementById("thumbnailUrl").value;
  const videoUrl = document.getElementById("videoUrl").value;
  const price = document.getElementById("price").value;

  const riderCard = document.createElement("div");
  riderCard.className = "card locked";
  riderCard.innerHTML = `
    <img src="${thumbnail}" alt="${riderName}">
    <h3>${riderName}</h3>
    <button onclick="unlockVideo('${videoUrl}', ${price})">Unlock for $${price}</button>
  `;
  document.getElementById("events").appendChild(riderCard);
}

function unlockVideo(link, price) {
  const email = prompt("Enter your email to unlock");
  if (!email) return;
  alert("Demo payment - unlocking video...");
  window.open(link, "_blank");
}
