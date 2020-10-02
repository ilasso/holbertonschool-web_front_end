/* Binding*/
let roomDimensions = {
  width: 50,
  length: 100,
  getArea(){
    return this.width * this.length;
  }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());
roomDimensions.width = 100;
console.log(boundGetArea());
