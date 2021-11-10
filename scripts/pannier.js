let poster = document.querySelectorAll(".add-poster");

let products = [
  {
    name: "alone",
    tag: "alonetag",
    img: "gokudera",
    price: 20,
    id: 0,
    inPoster: 0,
  },
  {
    name: "duo",
    tag: "duotag",
    img: "teamC",
    price: 15,
    id: 1,
    inPoster: 0,
  },
  {
    name: "sexy",
    tag: "sexytag",
    img: "android-18",
    price: 10,
    id: 2,
    inPoster: 0,
  },
  {
    name: "favorite",
    tag: "favoritetag",
    img: "vegeta-trunks",
    price: 5,
    id: 3,
    inPoster: 0,
  },
];

// Permet de cliquer sur les produits

for (let i = 0; i < poster.length; i++) {
  poster[i].addEventListener("click", () => {
    posterNumbers(products[i]);
    TotalAll(products[i]);
  });
}

// Function pour sauvegarder le panier

function LoadPageProducts() {
  let productNumbers = localStorage.getItem("posterNumbers");

  if (productNumbers) {
    document.querySelector(".poster span").textContent = productNumbers;
  }
}

///////// Je rajoute aux paniers le nombres de produits et le stock dans le
// localStorage

function posterNumbers(product) {
  let productNumbers = localStorage.getItem("posterNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("posterNumbers", productNumbers + 1);
    document.querySelector(".poster span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("posterNumbers", 1);
    document.querySelector(".poster span").textContent = 1;
  }

  setItems(product);
}

// Recuperation du tableau et config. du inPoster

function setItems(product) {
  let posterItems = JSON.parse(localStorage.getItem("productsinPoster"));


  // Ajouter plusieurs produits du même poster

  if (posterItems != null) {
    // Pour diferencier les produits

    if (posterItems[product.tag] === undefined) {
      posterItems = {
        ...posterItems,
        [product.tag]: product,
      };
      // posterItems.push(product);
    }
    posterItems[product.tag].inPoster += 1;
    
  } else {
    product.inPoster = 1;
    posterItems = {
      ...posterItems,
      [product.tag]: product,
    };
    // posterItems.push(product);
  }

  localStorage.setItem("productsinPoster", JSON.stringify(posterItems));
}

// Total des produits, prix, .....

function TotalAll(product) {
  let posterCost = localStorage.getItem("TotalAll");

  if (posterCost != null) {
    posterCost = parseInt(posterCost);
    localStorage.setItem("TotalAll", posterCost + product.price);
  } else {
    localStorage.setItem("TotalAll", product.price);
  }
}

// Pour pouvoir supprimer les élèments...

function TotalAlldel(product) {
  let posterCost = localStorage.getItem("TotalAll");

  if (posterCost != null) {
    posterCost = parseInt(posterCost);
    localStorage.setItem("TotalAll", posterCost - product.price);
  } else {
    localStorage.setItem("TotalAll", product.price);
  }

}

function posterNumbersDell(product) {
  let productNumbers = localStorage.getItem("posterNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("posterNumbers", productNumbers - 1);
    document.querySelector(".poster span").textContent = productNumbers - 1;
  } else {
    localStorage.setItem("posterNumbers", 1);
    document.querySelector(".poster span").textContent = 1;
  }

  setItems(product);
}

// Page Panier, affichage des produits ...

function displayPoster() {

  let posterItems = localStorage.getItem("productsinPoster");


  posterItems = JSON.parse(posterItems);

  let productContainer = document.querySelector(".products");
  let posterCost = localStorage.getItem("TotalAll");

  if (posterItems && productContainer) {
    productContainer.innerHTML = "";

    Object.values(posterItems).filter(x => x.inPoster != 0).map((posters) => {
      productContainer.innerHTML += `
            
                <div class="product">

                    <table>
                        
                        <thead>
                        <tr>
                            <th class="product-title">Produit</th>
                            <th class="price">Prix</th>
                            <th class="quantity">Quantité</th>
                            <th class="total">Total</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr data-id="${posters.tag}">
                                <th><img src="./images/${posters.img}.png"></th>
                                <td>${posters.price},00 €</td>
                                <td><button class="btndel" data-id="${posters.tag}">retire</button> ${posters.inPoster
        } <button class="btnadd" data-id="${posters.tag}">add</button></td>
                                <td>${posters.inPoster * posters.price
        },00 €</td>
                            </tr>

                        </tbody>
                        
                    </table>
            `;
    });

    if(posterCost != 0){

      productContainer.innerHTML += `
        
      <div class="postertotal">

          <h4 class="postertotaltitle">
          Poster total: 
          </h4>

          <h4 class="totalposter">
              ${posterCost},00 €
          </h4>
      </div>
  `;
    }else{
      productContainer.innerHTML += `
        
      <div class="postertotal">

          <h1 class="no-itmes">
              Vous n'avez pas de produits dans votre panier.
          </h1>
      </div>
  `;
    }

  }
  deldel(posterItems);
  addadd(posterItems);
}

// Btn DEL

function deldel(posterItems) {

  const delbutton = document.getElementsByClassName('btndel');
  for (let i = 0; i < delbutton.length; i++) {

    delbutton[i].addEventListener('click', () => {
      let tag = delbutton[i].getAttribute("data-id");

        if (tag == posterItems[tag].tag) {

          posterItems[tag].inPoster -= 2;

          localStorage.setItem("productsinPoster", JSON.stringify(posterItems));

          TotalAlldel(posterItems[tag]);
          posterNumbersDell(posterItems[tag])
          displayPoster();
        
        }
    })

  }

}

// Btn ADD

function addadd(posterItems) {

  const addbutton = document.getElementsByClassName('btnadd');
  for (let i = 0; i < addbutton.length; i++) {

    addbutton[i].addEventListener('click', () => {
      let tag = addbutton[i].getAttribute("data-id");

        if (tag == posterItems[tag].tag) {

          localStorage.setItem("productsinPoster", JSON.stringify(posterItems));
          posterItems = JSON.parse(localStorage.getItem("productsinPoster"));
          TotalAll(posterItems[tag]);
          posterNumbers(posterItems[tag])
          displayPoster();

        }

    })

  }

}

LoadPageProducts();
displayPoster();
