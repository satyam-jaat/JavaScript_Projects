const btn = document.querySelector("#jokeBtn");
const jokeDisplay = document.querySelector("#joke");

const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    jokeDisplay.innerText = "Loading...";
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(url, config);
    jokeDisplay.innerText = res.data.joke;
  } catch (e) {
    jokeDisplay.innerText = "Failed to fetch a joke. Please try again.";
    console.error(e);
  }
}
