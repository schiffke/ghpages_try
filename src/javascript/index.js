function loadJSON() {
    var xhttp = new XMLHttpRequest();       // Objekt zum Datenaustausch mit Server -> page ohne reload updaten
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {     // this.readyState 4 = request finished and response is ready
        let date = this.responseText.replace(/[TZ\]\[\"\""]/g, " ")
        document.getElementById("date-footer").innerHTML = "Last Change made: " + date;
       }
    };
    xhttp.open("GET", "./src/javascript/date.json", true);      // true für asynchron, false für sync
    xhttp.send();       // request zum server senden
  }

  window.onload = (event) => {
      loadJSON();
  }