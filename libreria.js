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
        html += `<div class=" card col col-6 col-md-3 col-lg-2 mt-3 mx-2 border-danger p-0" id="card" style= 'height:650px'>
        <img src="${element.img}" class="card-img-top object-fit-contain" alt="..." '>
        <div class="card-body  d-flex flex-column " style='height:100%'>
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">€${element.price}</p>
          
          <a href="#" class=" compra btn btn-primary mb-2 mt-auto ">COMPRA ORA</a>
          <a href="#" class="elimina btn btn-danger" >ELIMINA</a>
        </div>
      </div>
      `;
        console.log(libro[0]);
        colonna.innerHTML = html;

        // console.log(bottoneCompra);
        const bottoneElimina = document.querySelectorAll(".elimina");
        bottoneElimina.forEach((bottone) => {
          bottone.addEventListener("click", function (e) {
            e.preventDefault;
            const card = this.closest(".col");
            card.classList.add("d-none");
          });
        });
        const bottoneCompra = document.querySelectorAll(".compra");
        bottoneCompra.forEach((bottonecompra) => {
          bottonecompra.addEventListener("click", function (e) {
            e.preventDefault;
            const section = document.getElementById("section");
            const card = this.closest(".card").cloneNode(true);

            section.appendChild(card);
          });
        });
      });
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
libreria();
