const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
    .then((response) => response.json())
    .then((result) =>  displayResults(result, searchTerm))
}

function displayResults(result, searchTerm){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById("artist-img");

    result.forEach(element => {
        
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    console.log(result)
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ""){
        resultPlaylist.classList.add("hidden");
        resultArtist.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
}); 

// Resolver bug, que não filtra direito.