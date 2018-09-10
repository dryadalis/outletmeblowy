let numitems = 4;
const selectInput = document.getElementById("itemsPerPage");

function order(item) {
    return `
        <div class="order--wrapper">
            <a href="#">
                <div class="order--top">
                    <img src="images/trolleyplus-icon.png">
                    <div class="order--top__savings">oszczędzasz: <strong>${item.price.gross.promo_float}zł</strong></div>
                </div>
                <div class="order--center">
                    <img src="https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_${item.main_image}.jpg">
                </div>
                <div class="order--bottom">
                    <div class="order--bottom__prices">
                        <div class="order--bottom__prices__final">${item.price.gross.final_float}zł</div>
                        <div class="order--bottom__prices__base">${item.price.gross.base_float}zł</div>
                    </div>
                    <div class="order--bottom__name">
                        ${item.name}
                    </div> 
                    <div class="order--bottom__producer">
                        ${item.producer.name}
                    </div>
                </div>
                </a>
         </div>
    `
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
    data.forEach((item) => {
        document.getElementById('listOfProducts').innerHTML += order(item);
    });
}

selectInput.addEventListener("change", function () {
    let selectInputValue = selectInput.options[selectInput.selectedIndex].value;
    numitems = selectInputValue;
    getData();
});

getData();

