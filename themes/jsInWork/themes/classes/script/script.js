'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {      // базируемся на классе Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width);                           // вызывает тоже что и у родителя тут; Пишется на первой строке всегда
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Привет', 'red');
div.showMyProps();
console.log(div.calcArea());