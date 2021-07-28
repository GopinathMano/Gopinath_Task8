
2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  tostring() {
    console.log(`circle [radius = ${this.radius},colour =${this.color}]`);
  }
  getarea() {
    console.log(3.14 * (this.radius * this.radius));
  }
  getcircumference() {
    console.log(2 * 3.141 * this.radius);
  }
}
var dd = new circle(3, "Blue");

// dd.setTitle("Master");
dd.tostring();
dd.getarea();
dd.getcircumference();
