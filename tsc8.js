//Function
var fightRobotArmy3 = function (robots) {
    console.log('fight');
    return 5;
};
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("rarararararrrrrr");
lion.greet();
lion.sing;
