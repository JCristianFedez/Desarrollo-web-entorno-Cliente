var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jarra = /** @class */ (function () {
    function Jarra(capacidad, cantidad) {
        // El if falla al extender
        //if(cantidad <= capacidad && cantidad>=0 && capacidad>0){
        this._capacidad = capacidad;
        this._cantidad = cantidad;
        // }else{
        //     console.log("Error al crear Jarra parametros invalidos");
        // }
    }
    Jarra.prototype.llenar = function () {
        this._cantidad = this._capacidad;
    };
    Jarra.prototype.vaciar = function () {
        this._cantidad = 0;
    };
    Jarra.prototype.llenarDesde = function (j2) {
        var restante = this._capacidad - this._cantidad;
        if (j2._cantidad <= restante) {
            this._cantidad += j2._cantidad;
            j2._cantidad = 0;
        }
        else {
            this._cantidad = this._capacidad;
            j2._cantidad -= restante;
        }
    };
    Object.defineProperty(Jarra.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        set: function (cant) {
            this._cantidad = cant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jarra.prototype, "capacidad", {
        get: function () {
            return this._capacidad;
        },
        set: function (cap) {
            this._capacidad = cap;
        },
        enumerable: false,
        configurable: true
    });
    Jarra.comparar = function (j1, j2) { return (j1.cantidad > j2.cantidad) ? j1 : j2; };
    return Jarra;
}());
var JarraLimitada = /** @class */ (function (_super) {
    __extends(JarraLimitada, _super);
    function JarraLimitada(capacidad, cantidad) {
        var _this = this;
        if (cantidad <= capacidad
            && cantidad >= 0
            && (capacidad > 0 && capacidad <= 10)) {
            _this = _super.call(this, cantidad, capacidad) || this;
        }
        else {
            console.log("Error al crear JarraLimitada parametros invalidos");
        }
        return _this;
    }
    JarraLimitada.prototype.vaciarMitad = function () {
        this.cantidad /= 2;
    };
    return JarraLimitada;
}(Jarra));
function test() {
    var j1 = new Jarra(10, 4);
    console.dir("Jarra 1: Capacidad " + j1.capacidad + " | Cantidad " + j1.cantidad);
    var j2 = new Jarra(15, 8);
    console.dir("Jarra 2: Capacidad " + j2.capacidad + " | Cantidad " + j2.cantidad + "\n\n");
    var aux = Jarra.comparar(j1, j2);
    console.dir("Jarra mayor tiene: Capacidad " + aux.capacidad + " | Cantidad " + aux.cantidad + "\n\n");
    j1.llenarDesde(j2);
    console.log("Lleno jarra1 desde jarra2");
    console.dir("Jarra 1: Capacidad " + j1.capacidad + " | Cantidad " + j1.cantidad);
    console.dir("Jarra 2: Capacidad " + j2.capacidad + " | Cantidad " + j2.cantidad + "\n\n");
    j2.vaciar();
    console.log("Vaciado Jarra2");
    console.dir("Jarra 2: Capacidad " + j2.capacidad + " | Cantidad " + j2.cantidad + "\n\n");
    console.log("Creo JarraLimitada con mas de 15 litros\n\n");
    var jL = new JarraLimitada(20, 15);
    console.log("Creo JarraLimitada con menos de 15 litros");
    jL = new JarraLimitada(9, 8);
    console.dir("JarraLimitada: Capacidad " + jL.capacidad + " | Cantidad " + jL.cantidad + "\n\n");
    console.log("Vacio la mitad");
    jL.vaciarMitad();
    console.dir("JarraLimitada: Capacidad " + jL.capacidad + " | Cantidad " + jL.cantidad + "\n\n");
}
