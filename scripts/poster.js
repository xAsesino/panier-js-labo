let main = document.querySelectorAll('.container');

let allproducts = [
    
    // Posters alone

    {
        name: 'alone',
        tag: 'alonetag',
        img: 'gokudera',
        price: 20,
        inPoster: 0
    },
    {
        name: 'alone',
        tag: 'alonetag',
        img: 'hatake-kakashi',
        price: 20,
        inPoster: 0
    },
    {
        name: 'alone',
        tag: 'alonetag',
        img: 'uchiha-madara',
        price: 20,
        inPoster: 0
    },
    {
        name: 'alone',
        tag: 'alonetag',
        img: 'kaederha-kazura',
        price: 20,
        inPoster: 0
    },

    // Posters Duo

    {
        name: 'duo',
        tag: 'duotag',
        img: 'vegeta-trunksjr',
        price: 15,
        inPoster: 0
    },
    {
        name: 'duo',
        tag: 'duotag',
        img: 'teamC',
        price: 15,
        inPoster: 0
    },
    {
        name: 'duo',
        tag: 'duotag',
        img: 'gohan-picolo',
        price: 15,
        inPoster: 0
    },
    {
        name: 'duo',
        tag: 'duotag',
        img: 'Violet-Evergarden',
        price: 15,
        inPoster: 0
    },

    // Posters Girls

    {
        name: 'girls',
        tag: 'girlstag',
        img: 'Homura',
        price: 10,
        inPoster: 0
    },
    {
        name: 'girls',
        tag: 'girlstag',
        img: 'artist-request',
        price: 10,
        inPoster: 0
    },
    {
        name: 'girls',
        tag: 'girlstag',
        img: 'android-18',
        price: 10,
        inPoster: 0
    },
    {
        name: 'girls',
        tag: 'girlstag',
        img: 'violet',
        price: 10,
        inPoster: 0
    },

    // Posters Favorite

    {
        name: 'favorite',
        tag: 'favoritetag',
        img: 'Hanma-Baki',
        price: 5,
        inPoster: 0
    },
    {
        name: 'favorite',
        tag: 'favoritetag',
        img: 'teamC',
        price: 5,
        inPoster: 0
    },
    {
        name: 'favorite',
        tag: 'favoritetag',
        img: 'android-18',
        price: 5,
        inPoster: 0
    },
    {
        name: 'favorite',
        tag: 'favoritetag',
        img: 'goku-chichi',
        price: 5,
        inPoster: 0
    }

];

function displayAllPoster(){
    
    let posterItems = localStorage.getItem("productsinPoster");
    posterItems = JSON.parse(posterItems);

    let productContainer = document.querySelector(".container");

    if(posterItems && productContainer){

        productContainer.innerHTML = '';

        Object.values(posterItems).map(posters =>{

        productContainer.innerHTML += `
        
        <div class="card">

        <div class="imgbx">

            <img class="add-poster poster1 src="images/gokudera.jpg" alt="">

        </div>

        <div class="content">

            <h3 id="black">Poster: Alone</h3>
            <h3 id="black">Name: ... </h3>
            <h3 id="black">Price: 20€</h3>

        </div>

    </div>

        `

    });

    }
}