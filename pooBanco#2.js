class Banco {
  // Atributos
  nombre;
  direccion;
  telefono;
  cuentas = [];

  // Métodos
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  agregarCuenta(cuenta) {
    this.cuentas.push(cuenta);
  }

  obtenerCuentas() {
    return this.cuentas;
  }
}

// Instancias
const banco1 = new Banco("Banco del Pueblo", "Calle Principal 123", "555-123-4567");
const banco2 = new Banco("Banco de la Nación", "Avenida Central 456", "555-234-5678");

// Cuentas
const cuenta1 = {
  numero: "123456789",
  saldo: 1000,
};

const cuenta2 = {
  numero: "987654321",
  saldo: 2000,
};

// Agregar cuentas a los bancos
banco1.agregarCuenta(cuenta1);
banco2.agregarCuenta(cuenta2);
