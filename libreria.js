const libreria = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      console.log("RESPONSE", res);
      if (res.ok === true) {
        return res.json();
      } else {
        throw new Error("La response non è ok");
      }
    })
    .then((libro) => {
      console.log(libro);
      const colonna = document.getElementById("colonna");
      let html = " ";
      libro.forEach((element) => {
        html += `<div class="col col-6 col-md-3 col-lg-2 mt-3" id="card" >
        <img src="${element.img}" class="card-img-top" alt="..." style= 'height:100%'>
        <div class="card-body " style='height:100%'>
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.price}</p>
          
          <a href="#" class=" compra btn btn-primary mb-2">COMPRA ORA</a>
          <a href="#" class="elimina btn btn-danger" >ELIMINA</a>
        </div>
      </div>
      `;
        console.log(libro[0]);
        colonna.innerHTML = html;

        const bottoneCompra = document.querySelectorAll(
          "a.btn btn-primary mb-2"
        );
        const bottoneElimina = document.querySelectorAll(".elimina");
        bottoneElimina.forEach((bottone) => {
          bottone.addEventListener("click", function (e) {
            e.preventDefault;
            const card = this.closest(".col");
            card.classList.add("d-none");
          });
        });
      });
      console.log(bottoneElimina);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
libreria();
