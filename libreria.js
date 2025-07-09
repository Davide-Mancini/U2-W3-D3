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
        html += `<div class="col col-6 col-md-3 col-lg-2 mt-3" id="colonna" ><div class="card" >
        <img src="${element.img}" class="card-img-top" alt="..." style= 'height:100%'>
        <div class="card-body " style='height:100%'>
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.price}</p>
          
          <a href="#" class="btn btn-primary mb-2" id= 'compra'>COMPRA ORA</a>
          <a href="#" class="elimina btn btn-danger" id='elimina'>ELIMINA</a>
        </div>
      </div>
      </div>`;
        console.log(libro[0]);
        colonna.innerHTML = html;
      });
      const bottoneCompra = document.querySelectorAll("a.btn btn-primary mb-2");
      const bottoneElimina = document.querySelectorAll("a.elimina");
      bottoneElimina[0].addEventListener("click", () => {
        colonna.classList.add("d-none");
      });
      console.log(bottoneElimina);
      //       for (let i = 0; i < libreria.lenght; i++) {
      //         colonna.innerHTML = `<div class="card" style="width: 18rem;">
      //    <img src="${libro.img}" class="card-img-top" alt="...">
      //    <div class="card-body">
      //      <h5 class="card-title">${libro.title}</h5>
      //      <p class="card-text">${libro.price}</p>
      //      <a href="#" class="btn btn-primary">Acquista</a>
      //    </div>
      //  </div>`;
      //       }
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
libreria();
