
let menu = document.getElementById("menu");
let menu2 = document.getElementById("menu2");
let dropdownmenu = document.getElementById("dropdownmenu");
let backing = document.getElementById("back");
let companybunch = document.querySelectorAll(".company");
let carnames = document.getElementById("carnames");
let fuel = document.getElementById("Fueltype");
let Models = document.getElementsByClassName("Models");


carnames.innerHTML = JSON.parse(localStorage.getItem("cars"));

let modelsname = [];
let clickedmodel;
let modeltext = "";
let defaultmenu2 = menu2.innerHTML;
let defaultdropdowntext = dropdownmenu.innerHTML;
let defaultFueltext = fuel.innerHTML;
let carscollection;



//-----------------------Additional Functions--------------------------------------------------------
function dropdown() {
    menu.style.display = "flex";
    backing.style.display = "block";
}

function back() {
    menu.style.display = "none";
    dropdownmenu.style.display = "flex";
    backing.style.display = "none";
}

function back2() {
    menu2.style.display = "none";
    menu2.innerHTML = ` <button class="container-fluid bg-black text-light bg-opacity-25" id="back" onclick="back2()">back</button>`;
    menu.style.display = "flex";

}

function changemenu() {
    menu.style.display = "none";
    menu2.style.display = "flex";
    showmodelslist();
}

function close() {
    menu.style.display = "none";
    menu2.style.display = "none";
}
//-----------------------Additional Functions--------------------------------------------------------

//---------------------dropdown menu choose company------------------------------------------
for (i = 0; i <= companybunch.length; i++) {
    companybunch[i].addEventListener("click", function () {
        let clickedcompany = this.textContent;
        modelselection(clickedcompany);
    });
}

//-------------------------company models upload and selsection----------------------------------------------
function modelselection(clickedcompany) {

    switch (clickedcompany) {
        case "MarutiSuzuki":
            modelsname = ["Swift", "WagonR", "SwiftDzire", "Baleno", "Alto", "Ritz", "Celerio", "Ciaz", "Alto K10", "Ertiga", "Alto 800", "Brezza", "Estilo", "SX4", "Maruti 800", "Zen", "A-Star", "Ignis", "S-Cross", "Eeco", "Esteem", "Omni", "S-Presso", "GrandVitara", "Gypsy", "Kizashi", "Versa", "XL6", "Jimmy"];
            changemenu();
            break;
        case "Honda":
            modelsname = ["CityIVTEC", "Amaze", "City", "Brio", "Jazz", "Civic", "Accord", "CityZX", "WRV", "Mobilio", "CityIDTEC", "CRV", "BRV", "AccordHybrid"];
            changemenu();
            break;
        case "Tata":
            modelsname = ["Tiago", "TiagoNRG", "Nano", "Zest", "Nexon", "IndicaVista", "Tigor", "Manza", "Indica", "Indigo", "Safari", "IndigoeCS", "IndicaV2", "Bolt", "IndigoCS", "SafariStorme", "NanoGenx", "IndicaeV2", "Altroz", "Aria", "Harrier", "Hexa", "SumoGrande", "IndigoMarina", "SumoGold", "SumoGrandeMKII", "Venture", "IndigoXL", "SumoSpacio", "Winger", "Xenon", "SumoVicta", "Punch"];
            changemenu();
            break;
        default:
            menu.style.display = "none";
            menu.style.display = "none";

    }

}

function showmodelslist() {

    for (let j = 0; j < modelsname.length; j++) {
        menu2.innerHTML += `<button class="Models col-lg-4 col-md-6 col-sm-6" id=${modelsname[j]}><img class="mt-2" src="../src/images/modelsimages/${modelsname[j]}.jpg"></img><br/><h2>${modelsname[j]}</h2></button>`;
    }
    listingmodels();
}
function listingmodels() {
    for (k = 0; k < Models.length; k++) {
        Models[k].addEventListener("click", function () {
            clickedmodel = this.innerHTML;
            modeltext = this.textContent;
            dropdownmenu.textContent = modeltext;
            close();
        });

    }

}

//---------------------Appearance of models in collection catalog-----------------------------------------------
function save() {
    let value = fuel.options[fuel.selectedIndex].text;
    carnames.innerHTML = `${clickedmodel}Fuel Type - ${value}`;
    carscollection = carnames.innerHTML;
    localStorage.setItem("cars", JSON.stringify(carscollection));
    menu2.innerHTML = defaultmenu2;
    dropdownmenu.innerHTML = defaultdropdowntext;
    fuel.innerHTML = defaultFueltext;
}
//---------------------Appearance of models in collection catalog------------------------------------------------

