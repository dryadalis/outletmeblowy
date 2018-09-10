function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(xhttp.responseText);
          console.log(response.list);

        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
getData();