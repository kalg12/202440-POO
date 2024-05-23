class BBVA {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    depositar(monto, quienDeposita) {
        this.saldo += monto;
        this.quienDeposita = quienDeposita;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            console.log("Haz retirado: " + monto )
            const comision = monto * 0.01;
            console.log("La comisión del retiro es: " + comision);
            this.saldo -= monto + comision;
            console.log("Tu saldo actual es de: ", this.saldo)
        } else {
            console.log("Saldo insuficiente");
        }
    }

    transferir(monto, cuentaDestino) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            cuentaDestino.saldo += monto;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

//Instancias
const cuenta = new BBVA("Juan Pérez", 1000);
const cuentaYatziri = new BBVA ("Yatziri Chicken", 500)
const cuentaJavi = new BBVA ("Javi", 0)

cuentaYatziri.retirar(200)
console.log(cuentaYatziri.consultarSaldo())

/* cuenta.depositar(500);
cuenta.retirar(200);

console.log(cuenta.consultarSaldo());

console.log("<------------->")
cuentaYatziri.depositar(500, "Ambar Estrada")
console.log(cuentaYatziri.consultarSaldo())
console.log(cuentaYatziri.quienDeposita)
console.log("<------------->")
cuentaYatziri.depositar(459, "Dennis Castro")
console.log(cuentaYatziri.consultarSaldo())
console.log(cuentaYatziri.quienDeposita)
console.log("<------------->")
console.log("Javi actualmente tiene: " + cuentaJavi.consultarSaldo())
console.log("<------------->")
cuentaYatziri.transferir(4000, cuentaJavi)
console.log(cuentaYatziri.consultarSaldo())
console.log("<------------->")
console.log("Ahora Javi tiene" + cuentaJavi.consultarSaldo())

 */