interface JarraInterfaz {
    _capacidad: number;
    _cantidad: number;

    llenar(): void;
    vaciar(): void;
    llenarDesde(j2: Jarra): void;
    // No se pueden implementar metodos estaticos
    // comparar(j1: Jarra, j2: Jarra):Jarra;

}

class Jarra implements JarraInterfaz {

    _capacidad: number;
    _cantidad: number;

    constructor(capacidad: number, cantidad: number) {
        // El if falla al extender
        //if(cantidad <= capacidad && cantidad>=0 && capacidad>0){
        this._capacidad = capacidad;
        this._cantidad = cantidad;
        // }else{
        //     console.log("Error al crear Jarra parametros invalidos");
        // }
    }

    public llenar(): void {
        this._cantidad = this._capacidad;
    }

    public vaciar(): void {
        this._cantidad = 0;
    }

    public llenarDesde(j2: Jarra): void {
        let restante: number = this._capacidad - this._cantidad;

        if (j2._cantidad <= restante) {
            this._cantidad += j2._cantidad;
            j2._cantidad = 0;
        } else {
            this._cantidad = this._capacidad;
            j2._cantidad -= restante;
        }
    }

    public static comparar = (j1: Jarra, j2: Jarra): Jarra => { return (j1.cantidad > j2.cantidad) ? j1 : j2; };

    public get cantidad() {
        return this._cantidad;
    }

    public set cantidad(cant: number) {
        this._cantidad = cant;
    }
    public get capacidad() {
        return this._capacidad;
    }

    public set capacidad(cap: number) {
        this._capacidad = cap;
    }
}

class JarraLimitada extends Jarra {

    constructor(capacidad: number, cantidad: number) {
        if (cantidad <= capacidad
            && cantidad >= 0
            && (capacidad > 0 && capacidad <= 10)) {
            super(cantidad, capacidad);
        } else {
            console.log("Error al crear JarraLimitada parametros invalidos");
        }
    }

    public vaciarMitad() {
        this.cantidad /= 2;
    }
}


function test() {
    let j1 = new Jarra(10, 4);
    console.dir(`Jarra 1: Capacidad ${j1.capacidad} | Cantidad ${j1.cantidad}`);

    let j2 = new Jarra(15, 8);
    console.dir(`Jarra 2: Capacidad ${j2.capacidad} | Cantidad ${j2.cantidad}\n\n`);

    let aux = Jarra.comparar(j1, j2);
    console.dir(`Jarra mayor tiene: Capacidad ${aux.capacidad} | Cantidad ${aux.cantidad}\n\n`);

    j1.llenarDesde(j2);
    console.log("Lleno jarra1 desde jarra2");
    console.dir(`Jarra 1: Capacidad ${j1.capacidad} | Cantidad ${j1.cantidad}`);
    console.dir(`Jarra 2: Capacidad ${j2.capacidad} | Cantidad ${j2.cantidad}\n\n`);

    j2.vaciar();
    console.log("Vaciado Jarra2");
    console.dir(`Jarra 2: Capacidad ${j2.capacidad} | Cantidad ${j2.cantidad}\n\n`);

    console.log("Creo JarraLimitada con mas de 15 litros\n\n");
    let jL = new JarraLimitada(20, 15);

    console.log("Creo JarraLimitada con menos de 15 litros");
    jL = new JarraLimitada(9, 8);
    console.dir(`JarraLimitada: Capacidad ${jL.capacidad} | Cantidad ${jL.cantidad}\n\n`);

    console.log("Vacio la mitad");
    jL.vaciarMitad();
    console.dir(`JarraLimitada: Capacidad ${jL.capacidad} | Cantidad ${jL.cantidad}\n\n`);


}
