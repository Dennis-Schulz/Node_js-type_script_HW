abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  name: string = 'circle';
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    super();
    this.color = color;
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShape {
  name: string = 'rectangle';
  color: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super();
    this.color = color;
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle('red', 5),
  new ColoredRectangle('blue', 10, 20),
];

shapes.forEach((shape) => {
  console.log(
    `Name: ${shape.name}, Color: ${shape.color}, Area: ${shape.calculateArea()}`
  );
});
