const btn = document.querySelector("#getImageBtn");
const img = document.querySelector("img");
const breedDisplay = document.querySelector("#breed");
const loadingText = document.querySelector("#loading");

const url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", fetchDogImage);
img.addEventListener("click", fetchDogImage);

async function fetchDogImage() {
    try {
        loadingText.style.display = "inline";
        btn.disabled = true;
        breedDisplay.innerText = "";

        const res = await axios.get(url);

        const imageUrl = res.data.message;
        img.src = imageUrl;

        const breed = extractBreedName(imageUrl);
        breedDisplay.innerText = `Breed: ${breed}`;

        console.log("Fetched Image URL:", imageUrl);
    } catch (error) {
        alert("Failed to fetch dog image. Please try again.");
        console.error("Error fetching dog image:", error);
    } finally {
        loadingText.style.display = "none";
        btn.disabled = false;
    }
}

function extractBreedName(imageUrl) {
    const parts = imageUrl.split("/");
    const breedInfo = parts[parts.indexOf("breeds") + 1];
    return breedInfo.replace("-", " ").toUpperCase();
}
