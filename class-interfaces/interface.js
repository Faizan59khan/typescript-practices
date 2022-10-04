var Programmer = /** @class */ (function () {
    function Programmer(name, position) {
        this.name = name;
        this.position = position;
    }
    Programmer.prototype.develop = function () {
        console.log("".concat(this.name, " can develop sofwares"));
    };
    ;
    return Programmer;
}());
var programmer = new Programmer("salman", "SE");
console.log(programmer.position);
programmer.develop();
