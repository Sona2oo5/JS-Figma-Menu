const menuItems = ["Ana Sehife", "Haqqimizda", "Xidmetler", "Elaqe"];

const nav = document.getElementById("menu-container");

const ul = document.createElement("ul");
ul.className = "nav-list"; 

menuItems.forEach(text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.textContent = text;
    a.setAttribute("href", "#");
    
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);