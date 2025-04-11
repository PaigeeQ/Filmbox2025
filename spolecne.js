document.addEventListener("DOMContentLoaded", () => { 
    const tlacitko = document.querySelector("#menu-tlacitko");
    const menu = document.querySelector("#menu-polozky");
    const ikona = tlacitko.querySelector("i");

    tlacitko.addEventListener("click", () => {
         menu.classList.toggle("show");

        if(menu.classList.contains("show")) {
            ikona.classList.remove("fa-bars");
            ikona.classList.add("fa-xmark");
        } else {
            ikona.classList.remove("fa-xmark");
            ikona.classList.add("fa-bars");
        }  
    });
});

