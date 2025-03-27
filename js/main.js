const button = document.querySelector('button')
button.addEventListener('click', () => {

    document.querySelector(".word").innerHTML = ''
    document.querySelector("img").src = ''
    document.querySelector('.noImg').innerHTML = ''

    fetch("https://random-word-api.herokuapp.com/word")
    .then(response => response.json())
    .then(data => {
    const word = data[0];
    console.log("Random Word:", word);

    fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=N1W_AmNXsmM959uxF16S-Pl56VXTtST7IWOek1_V1q4`)
        .then(response => response.json())
        .then(imageData => {
            document.querySelector(".word").innerHTML = word;
            if (imageData.urls && imageData.urls.full) {
                document.querySelector("img").src = imageData.urls.full;
            } else {
                document.querySelector('.noImg').innerHTML = 'This word is a little too random for the images available...'
            }
        })
        .catch(error => console.error("Unsplash API Error:", error));
    })
    .catch(error => console.error("Random Word API Error:", error));
})