

const ropas = [];

class    Ropa {
   constructor(nombre, precio, color, talle,stock,) {
       this.tipo = nombre;
       this.precio = precio;
       this.color = color;
       this.talle = talle;
       this.stock= stock;
       
   }
   
}

function Bienvenidos() {
   alert("Bienvenidos a EQUUS");
}

Bienvenidos();

const precioTotal = (precio) => {return precio*1.21}
let ropa = prompt("Elige la prenda que quieras comprar: Remera\n Camisa\n Chomba\n Musculosa\n Jean\n Jogger\nJoggin\nPantalon\nCampera\nZapatillas\n Para Finalizar su Compra presione Salir").toLowerCase();
let precio = 0;
let ahora = new Date();


function ropaOnline (ropa, precio) {
while(ropa!="salir"){
switch(ropa){
   
   case "Remera":
   ropas.push(new Ropa("Remera","$4000 + IVA","Blanca","XL","Disponible"));
   precio= precio + 4000
   console.log("La remera esta disponible, tiene un costo de $4000 mas IVA");
   break;

   case "Camisa":
   ropas.push(new Ropa("Camisa","$6000 + IVA","Azul","L","Disponible"));
   precio= precio + 6000
   console.log("La camisa esta disponible, tiene un costo de $6000 mas IVA");
   break;

   case "Chomba":
   ropas.push(new Ropa("Chomba","$5500 + IVA","Gris","M","Disponible"));
   precio= precio + 5500
   console.log("La chomba esta disponible, tiene un costo de $5500 mas IVA");
   break;

   case "Musculosa":
   ropas.push(new Ropa("Musculosa","$3500 + IVA","Negra","XL","Sin stock"));
   console.log("La musculosa no esta disponible, no hay stock");
   break;

   case "Jean":
   ropas.push(new Ropa("Jean","$8000 + IVA","Azul","44","Disponible"));
   precio= precio + 3500
   console.log("El jean esta disponible, tiene un costo de $8000 mas IVA");
   break;

   case "Jogger":
   ropas.push(new Ropa("Jogger","$7500 + IVA","Negro","42","Disponible"));
   precio= precio + 7500
   console.log("El jogger esta disponible, tiene un costo de $7500 mas IVA");
   break;

   case "Joggin":
   ropas.push(new Ropa("Joggin","$6500 + IVA","Negro","46","Sin stock"));
   console.log("El joggin no disponible, no hay stock");
   break;

   case "Pantalon":
   ropas.push(new Ropa("Pantalon","$9000 + IVA","Mostaza","38","Disponible"));
   precio= precio + 9000
   console.log("El pantalon esta disponible\n tiene un costo de $9000 mas IVA");
   break;

   case "Campera":
   ropas.push(new Ropa("Campera","$12000 + IVA","Blanca","XL","Disponible"));
   console.log("La campera esta disponible\n tiene un costo de $12000 mas IVA");
   break;

   case "Zapatos":
   ropas.push(new Ropa("Zapatos","$15000 + IVA","Blanca","XL","Disponible"));
   precio= precio +15000
   console.log("Los zapatos estan disponible\n tiene un costo de $15000 mas IVA");
   break;

   

   case "comprar":
   console.log("Total a pagar:$" + (precio*1.21) + "IVA incluido");
   console.log("Tu compra se realizo el" +  ahora.toLocaleString())

   break;

  
}
      ropa= prompt("Ingresa la prenda que quieres comprar: Remera\n Camisa\n Chomba\n Musculosa\n Jean\n Jogger\nJoggin\nPantalon\nCampera\nZapatillas\n Para Finalizar su Compra presione Salir").toLowerCase();
   }

   console.table(ropas)
   const disponible = ropas.filter((ropa) => ropa.disponibilidad.includes("Sin stock"))
   console.log("Estas prendas no estan disponibles:")
   console.table(disponible)

}

ropaOnline(ropa, precio);


 
