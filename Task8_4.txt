class uberPrice {
  constructor(mode, kilometer) {
    this.mode = mode;
    this.kilometer = kilometer;
  }
  getAmount() {
    if (this.mode == "auto") {
      console.log(12 * this.kilometer + " Rs");
    }
    else if (this.mode == "car") {
      console.log(20 * this.kilometer + " Rs");
    }
    else { console.log("No data found")}
    
  }
}
let trip1 = new uberPrice("car", 10);
trip1.getAmount();
