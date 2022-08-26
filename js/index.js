// Add footer with name and year

let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Almira SD, ${thisYear}`;
footer.appendChild(copyright);

// Add skills section
// general skills
const gskills = [
  "Research",
  "Data Visualization",
  "Data Geocoding",
  "Machine Learning",
  "Statistical Analysis",
];

const gskillsSection = document.getElementById("gen-skills");
const gskillsList = gskillsSection.querySelector("ul");

for (let i = 0; i < gskills.length; i++) {
  const gskill = document.createElement("li");
  gskill.textContent = gskills[i];
  gskillsList.appendChild(gskill);
}

//technical skills

const techskills = [
  "Python",
  "R",
  "STATA",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "LaTeX",
];

const tskillsSection = document.getElementById("tech-skills");
const tskillsList = tskillsSection.querySelector("ul");

for (let i = 0; i < techskills.length; i++) {
  const tskill = document.createElement("li");
  tskill.textContent = techskills[i];
  tskillsList.appendChild(tskill);
}

// language skills

const langskills = ["English", "Kazakh", "Russian", "Turkish"];

const lskillsSection = document.getElementById("lang-skills");
const lskillsList = lskillsSection.querySelector("ul");

for (let i = 0; i < langskills.length; i++) {
  const lskill = document.createElement("li");
  lskill.textContent = langskills[i];
  lskillsList.appendChild(lskill);
}

//Handle Message from Submit

const messageForm = document.getElementsByName("leave_message");

// function printUserMessage(event) {
//   event.preventDefault();
//   let userName = event.target.firstName.value; //how do I select first-name
//   let userEmail = event.target.email.value;
//   let userMessage = event.target.message.value;
//   console.log(userName, userEmail, userMessage);
//   messageForm.reset() how to reset a form inside the function? Maybe use this?
// }

for (let i = 0; i < messageForm.length; i++) {
  messageForm[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let name = event.target.name.value;
    let userEmail = event.target.email.value;
    let userMessage = event.target.message.value;
    console.log(name, userEmail, userMessage);
    // Display Message List
    let currentdate = new Date();
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    const messageContainer = document.createElement("div");
    newMessage.classList.add("messageLayout");
    messageContainer.innerHTML = `<p><span class='strong'>"${userMessage}"</span></p> <a href='mailto:${userEmail}'>${name}</a> posted on ${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()} at ${currentdate.getHours()}:${currentdate.getMinutes()}`;
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", function (event) {
      const entry = removeButton.parentNode;
      // remove element
      entry.remove();
    });
    newMessage.appendChild(messageContainer);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm[i].reset();
  });
}

//Fetching Github repositories
// using AJAX
const url = "https://api.github.com/users/sadykova/repos";

// let githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", url);
// githubRequest.onload = function () {
//   let repositories = JSON.parse(githubRequest.responseText);
//   renderHTML(repositories);
// };
// githubRequest.send();

// Using fetch API

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    renderHTML(response);
  });

// Adding it to the HTML
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");

function renderHTML(array) {
  for (let i = 0; i < 11; i++) {
    const project = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = array[i].name;
    link.setAttribute("href", array[i].html_url);
    link.setAttribute("target", "_blank");
    link.classList.add("enlarge");
    project.appendChild(link);
    projectList.appendChild(project);
  }
}

// Displaying messages section when submit button is clicked
const btn = document.getElementById("submit-btn");
// const messagesSection = document.getElementById("messages");
// btn.addEventListener("click", function () {
//   messagesSection.classList.remove("hide");
//   messagesSection.classList.add("show");
// });
