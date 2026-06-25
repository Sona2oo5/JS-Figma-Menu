const header = document.getElementById("main-header");

const logoWrapper = document.createElement("div");
logoWrapper.className = "logo-wrapper";

const logoImg = document.createElement("img");
logoImg.src = "logo.png";
logoImg.className = "logo-img";

const logoText = document.createElement("h1");
logoText.textContent = "Furniro";
logoText.className = "logo-text";

logoWrapper.appendChild(logoImg);
logoWrapper.appendChild(logoText);
header.appendChild(logoWrapper);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "nav-list";
const menuItems = ["Ana Sehife", "Haqqimizda", "Xidmetler", "Elaqe"];

menuItems.forEach(text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.setAttribute("href", "#");
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

const iconsDiv = document.createElement("div");
iconsDiv.className = "icons";
const icons = ["person.png", "search.png", "like.png", "shopping.png"]; 

icons.forEach(src => {
    const img = document.createElement("img");
    img.src = src;        
    img.className = "nav-icon";
    iconsDiv.appendChild(img); 
});

header.appendChild(iconsDiv);