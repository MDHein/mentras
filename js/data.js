document.addEventListener("DOMContentLoaded", getProducts);

async function getProducts() {
  try {
    const response = await fetch("data/one.json");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    //console.log(products);
    showProducts(products);
    putInSearch(products);
  } catch (error) {
    console.error(error);
  }
}

function showProducts(products) {
  //let container = document.querySelector(".item-container");
  let container = document.getElementById("item-container");

  for (let i = 0; i < products.length; i++) {
    //console.log("Initial: ", products);
    let item = document.createElement("div");
    item.setAttribute("class", "item-card");
    container.appendChild(item);

    if (products[i].image !== "") {
      let imageUrl = products[i].image;
      let img = document.createElement("img");
      img.setAttribute("class", "image");
      img.src = imageUrl;
      item.appendChild(img);
    }

    let title = document.createElement("div");
    title.setAttribute("class", "title pd-10");
    title.textContent = products[i].name;
    item.appendChild(title);

    let descText = products[i].desc;
    if (descText.length > 100) {
      descText = descText.substring(0, 100) + " <span style='color: black; font-weight: bold;'>See more...</span>";
    }

    let desc = document.createElement("div");
    desc.setAttribute("class", "desc pd-10");
    desc.innerHTML = descText;
    item.appendChild(desc);

    let description = document.createElement("div");
    description.setAttribute("class", "description pd-10");
    description.textContent = products[i].desc;
    item.appendChild(description);

    item.addEventListener("click", () => {
      let t = products[i].name;
      let d = products[i].desc;
      showDetails(t, d);
    });
  }
}

function showDetails(t, d) {
  document.body.style.overflow = "hidden";
  let showData = document.querySelector(".show-data");
  let titleText = document.querySelector(".sd-title");
  let close = document.querySelector(".sd-close");
  let descriptionText = document.querySelector(".sd-description");

  showData.style.display = "flex";

  close.addEventListener("click", () => {
    showData.style.display = "none";
    document.body.style.overflow = "auto";
  });

  titleText.innerText = t;
  descriptionText.innerText = d;
}

function putInSearch(products) {
  let container = document.getElementById("search-item");

  for (let i = 0; i < products.length; i++) {
    //console.log("Initial: ", products);
    let item = document.createElement("div");
    item.setAttribute("class", "dr-item");
    container.appendChild(item);

    if (products[i].image !== "") {
      let imageUrl = products[i].image;
      let img = document.createElement("img");
      img.setAttribute("class", "image");
      img.src = imageUrl;
      item.appendChild(img);
    }

    let title = document.createElement("div");
    title.setAttribute("class", "title pd-10");
    title.textContent = products[i].name;
    item.appendChild(title);
    
    /*
    let descText = products[i].desc;
    if (descText.length > 100) {
      descText = descText.substring(0, 100) + " <span style='color: blue;'>See more...</span>";
    }

    let desc = document.createElement("div");
    desc.setAttribute("class", "desc pd-10");
    desc.innerHTML = descText;
    item.appendChild(desc);
    */
    
    let description = document.createElement("div");
    description.setAttribute("class", "description pd-10");
    description.textContent = products[i].desc;
    item.appendChild(description);

    item.addEventListener("click", () => {
      let t = products[i].name;
      let d = products[i].desc;
      showDetails(t, d);
    });
  }
}