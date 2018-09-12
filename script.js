//Default numbers of item displayed on the site
let numberOfDisplayed= 4;


const selectInput = document.getElementById("itemsPerPage");
const headerMenu = document.getElementById("headerMenu");
const topOfHeaderMenu = headerMenu.offsetTop;
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeIcon = document.getElementById("closeIcon");
const mobileNavbar = document.getElementById("mobile--navBar");


//Fetching data
function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhttp.responseText);
            const responseList = response.list;
            renderItems(responseList.splice(0, numberOfDisplayed));
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
getData();


//Rendering data
function renderItems(data) {
    document.getElementById('listOfProducts').innerHTML = '';
    data.forEach(function(item) {
        document.getElementById('listOfProducts').innerHTML += order(item);
    });
}

//The structure of displayed products
function order(item) {
    return"\n " +
            "<div class=\"order--wrapper\">\n" +
                "<a href=\"#\">\n" +
                    "<div class=\"order--top\">\n" +
                        "<img src=\"images/trolleyplus-icon.png\">\n " +
                        "<div class=\"order--top__savings\">oszcz\u0119dzasz: <strong>" + item.price.gross.promo_float + "z\u0142</strong></div>\n" +
                        " " + "" +
                    "</div>\n " +
                    "<div class=\"order--center\">\n " +
                        "<img src=\"https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_" + item.main_image + ".jpg\">\n" +
                    "</div>\n " +
                    "<div class=\"order--bottom\">\n" +
                         "<div class=\"order--bottom__prices\">\n " +
                            "<div class=\"order--bottom__prices__final\">" + item.price.gross.final_float + "z\u0142</div>\n" +
                            "<div class=\"order--bottom__prices__base\">" + item.price.gross.base_float + "z\u0142</div>\n " +
                         "</div>\n" +
                        "<div class=\"order--bottom__name\">\n " +
                            "" + item.name + "\n" +
                        "</div> \n" +
                        "<div class=\"order--bottom__producer\">\n" + item.producer.name + "\n " +
                        "</div>\n" +
                    "</div>\n" +
                "</a>\n" +
            "</div>\n";
}

//Changing the number of displayed items
function changeNumberOfDisplayed () {
    let selectInputValue = selectInput.options[selectInput.selectedIndex].value;
    numberOfDisplayed = selectInputValue;
    getData();
}
selectInput.addEventListener("change", changeNumberOfDisplayed);

//Sticky navigation
function fixedNav() {
    if(window.pageYOffset >= topOfHeaderMenu) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener("scroll", fixedNav);


//Show mobile navigation
function openMobileNav() {
    if (mobileNavbar.style.display === "none") {
        mobileNavbar.style.display = "block";
        closeIcon.style.display = "block";
        hamburgerMenu.style.display = "none";
    } else {
        mobileNavbar.style.display = "none";
    }
}

//Hide mobile navigation
function closeMobileNav() {
    mobileNavbar.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerMenu.style.display = "block"
}

hamburgerMenu.addEventListener('click', openMobileNav);
closeIcon.addEventListener("click", closeMobileNav);


