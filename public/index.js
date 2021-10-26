const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");

})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");

})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
    document.querySelector('.minus_nav').classList.toggle('hide_behind')
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
 

})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");

})


if (window.innerWidth <= 900) {
    //  alert("Resolution is " + window.innerWidth + " X " + window.innerHeight + "." )

    // Removing br
    document.getElementById("remove_Br1").remove();
    document.getElementById("remove_Br2").remove();
    document.getElementById("remove_Br3").remove();
    document.getElementById("remove_Br4").remove();


    // Removing Network_logos
    document.getElementById("remove_ATTlogo").remove();
    document.getElementById("remove_T-mob_Sprintlogo").remove();
    document.getElementById("remove_Verizonlogo").remove();

    // Adding Network_text at the biginning of the H4
    
    document
    .querySelector(".place_a-down")
    .insertAdjacentElement(
        "afterend",
        document.getElementById("displaced_a")
        );
        document.getElementById("displaced_a").style = "font-size:13.3px;";
   
        
        const para = [
            document.createElement("span"),
            document.createElement("span"),
            document.createElement("span"),
        ];
    const node = [
        document.createTextNode("AT&T: "),
        document.createTextNode("T-mobile/Sprint: "),
        document.createTextNode("Verizon: "),
    ];
    para[0].appendChild(node[0]);
    para[1].appendChild(node[1]);
    para[2].appendChild(node[2]);

    para[0].classList.add("network_Txt");
    para[1].classList.add("network_Txt");
    para[2].classList.add("network_Txt");

    document
        .getElementById("Add_ATT-text")
        .insertAdjacentElement("afterbegin", para[0]);
    document
        .getElementById("Add_Tmobile-Sprint-text")
        .insertAdjacentElement("afterbegin", para[1]);
    document
        .getElementById("Add_Verizon-text")
        .insertAdjacentElement("afterbegin", para[2]);

    const displaced_div = document.getElementById("displaced_div");
    document
        .getElementById("phone_div")
        .insertAdjacentElement("afterbegin", displaced_div);

    const only_mobile = document.getElementById("only_mobile");
    document
        .getElementById("phone_div")
        .insertAdjacentElement("afterend", only_mobile);
} else {
    //  alert("Resolution is " + window.innerWidth + " X " + window.innerHeight + "." )
    document.getElementById("only_mobile").remove();
    document.getElementById("remove_Br-desktop").innerText =
        "From $999 or $41.62/mo. before trade-in*";
}
