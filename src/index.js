// Your code here
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImg = document.getElementById("image");
const characterVotes = document.getElementById("vote-count");
const votesForm = document.getElementById("votes-form");
const voteCount = document.getElementById("vote-count");
const fetchUrl = "http://localhost:3000/characters";

document.addEventListener("DOMContentLoaded", () => {
  fetch(fetchUrl)
    .then((resp) => resp.json())
    .then((characterData) => {
      console.log(characterData);
      characterData.forEach(renderCharacterNames);
    });
});

const renderCharacterNames = (names) => {
  const spanName = document.createElement("span");
  spanName.textContent = names.name;
  characterBar.appendChild(spanName);

  spanName.addEventListener("click", () => {
    characterName.textContent = names.name;
    characterImg.src = names.image;
    characterVotes.textContent = names.votes;
  });
};

votesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const likeValues = e.target.votes.value;

  totalVotes = parseInt(characterVotes.textContent) + parseInt(likeValues);
  characterVotes.textContent = totalVotes;
});
