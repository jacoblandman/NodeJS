var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
// 3rd number won't ve there because there isnt enough storage
view[2] = 30;
console.log(view);
