class Polygon {
  constructor (sides) {
    this.sides = sides
    this.sideNumber = sides.length
  }
    get countSides() {
      return this.sideNumber
    }

    get perimeter() {
      return this.sides.reduce((runningTotal, currentSide) => runningTotal + currentSide)
    }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      return false
    }
    else if (this.sides[1] + this.sides[2] < this.sides[0]) {
      return false
    }
    else if (this.sides[0] + this.sides[2] < this.sides[1]) {
      return false
    }
    else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every(element => element === this.sides[0] ? true : false)
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}