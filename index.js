function getGif() {
    const apiKey = "Txhb9aHL9xtbOxA9YC9HFkBmmK5bg46u";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.fixed_height.url;
            const gifAlt = data.data.title;
            const imgElement = document.createElement("img");
            imgElement.src = gifUrl;
            imgElement.alt = gifAlt;
            const gifContainer = document.getElementById("gif-container");
            gifContainer.innerHTML = "";
            gifContainer.appendChild(imgElement);
        })
        .catch(error => console.error(error));
}