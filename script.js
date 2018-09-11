let numitems = 4;
const selectInput = document.getElementById("itemsPerPage");

function order(item) {
    return "\n        <div class=\"order--wrapper\">\n            <a href=\"#\">\n                <div class=\"order--top\">\n                    <img src=\"images/trolleyplus-icon.png\">\n                    <div class=\"order--top__savings\">oszcz\u0119dzasz: <strong>" + item.price.gross.promo_float + "z\u0142</strong></div>\n                </div>\n                <div class=\"order--center\">\n                    <img src=\"https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_" + item.main_image + ".jpg\">\n                </div>\n                <div class=\"order--bottom\">\n                    <div class=\"order--bottom__prices\">\n                        <div class=\"order--bottom__prices__final\">" + item.price.gross.final_float + "z\u0142</div>\n                        <div class=\"order--bottom__prices__base\">" + item.price.gross.base_float + "z\u0142</div>\n                    </div>\n                    <div class=\"order--bottom__name\">\n                        " + item.name + "\n                    </div> \n                    <div class=\"order--bottom__producer\">\n                        " + item.producer.name + "\n                    </div>\n                </div>\n                </a>\n         </div>\n    ";
}

function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(xhttp.responseText);
          const responseList = response.list;
            renderItems(responseList.splice(0, numitems));
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

function renderItems(data) {
    document.getElementById('listOfProducts').innerHTML = '';
    data.forEach(function(item) {
        document.getElementById('listOfProducts').innerHTML += order(item);
    });
}

selectInput.addEventListener("change", function () {
    let selectInputValue = selectInput.options[selectInput.selectedIndex].value;
    numitems = selectInputValue;
    getData();
});

getData();


const headerMenu = document.getElementById("headerMenu");
const topOfHeaderMenu = headerMenu.offsetTop;

function fixedNav() {
    if(window.pageYOffset >= topOfHeaderMenu) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener("scroll", fixedNav);













const hamburgerMenu = document.getElementById("hamburgerMenu");
hamburgerMenu.addEventListener('click', function() {
   const mobileNavbar = document.getElementById("mobile--navBar");
    if (mobileNavbar.style.display === "none") {
        mobileNavbar.style.display = "block";
    } else {
        mobileNavbar.style.display = "none";
    }
});
