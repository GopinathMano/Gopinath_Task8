
class personDetail {
  constructor(name) {
    this.name = name;
  }
  setname(x) {
    return (this.name = x);
  }
  getname() {
    console.log(`My name is  ${this.name}`);
  }
}

let dd = new personDetail("Gopi");
// dd.setname("Rahul");
dd.getname();
