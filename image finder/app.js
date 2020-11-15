const container = document.querySelector('.image-container')
let allImages = []
let term = ''
const search = document.querySelector('.search')

const getImage = () => {
    fetch(`https://pixabay.com/api/?key=15277680-ec9894bba8dd82e7e736a48c1&q&q=${term}&per_page=12&pretty=true&image_type=photo`)
        .then(Response => Response.json())
        .then(data => {
            allImages = data.hits
            allImages.forEach(image => {
                let img = document.createElement('img')
                img.src = image.largeImageURL
                container.appendChild(img);
            })
        })
}

const searchImage = () => {
    event.preventDefault()
    const searchResult = search.value;
    term = searchResult
    container.innerHTML = ''
    getImage()
}

getImage();
