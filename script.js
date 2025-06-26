//complete this code
// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Pass side as both width and height to Rectangle
    super(side, side);
  }

  // Method to calculate perimeter of square
  getPerimete
