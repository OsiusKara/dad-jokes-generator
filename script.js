const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//Using .then()

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      //data = entire object (id, joke, status)
      jokeEl.innerHTML = data.joke;
    });
}

// ======================================================
// Using ASYNC/AWAIT

// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }
