class Mascota {
  /* Atributos */
    constructor(nombre, color, edad, raza, sexo, colorOjos, seniaParticular, alimentacion, sonido, enemigo) {
      this.nombre = nombre;
      this.color = color;
      this.edad = edad;
      this.raza = raza;
      this.sexo = sexo;
      this.colorOjos = colorOjos;
      this.seniaParticular = seniaParticular;
      this.alimentacion = alimentacion;
      this.sonido = sonido;
      this.enemigo = enemigo
    }

    /* Métodos = Función */
    hacerSonido(){
      console.log(this.sonido)
    }

    hacerAtaque(enemigo){
      console.log("Llegó la palabra:",enemigo)
      if(enemigo === "gato"){
        console.log("Perro corretea a gato 🐈")
      }

      if(enemigo === "perro"){
        console.log("Perro pelea con perro 🐶")
      }

      if(enemigo === "ratón"){
        console.log("Perro pelea con ratón 🐭")
      }
    }
  }

/* Necesito hacer instancias, es decir, usar el molde (clase) para cada tipo de mascota */
/* Mandar la información de tipo "any" = string, number, objetc, array, boolean */
const perro = new Mascota ("Daskan","Negro con blanco",4,"Husky","Macho", "Azules", "Mancha en el ojo derecho", "Croquetas", "Guau guau")
const gato = new Mascota("Garfield", "Naranja", 8, "Husky", "Macho", "Marrones", "Tiene una mancha en el ojo", "Purina DogChow", "Miau miau");

/* Podemos hacer uso de cualquier atributo o método para cada mascota como deseemos */
console.log(perro.nombre)

console.log(perro.hacerSonido)
/* Manera de correcta de trae un método o función */
perro.hacerSonido()

/* Hacer ataque */
perro.hacerAtaque("persona")
