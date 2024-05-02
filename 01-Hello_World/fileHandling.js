const { log } = require("console");
const fs = require("fs");
// both below functions are used for writing in a file
//sychronous call
// fs.writeFileSync("./test.txt", "And now i am changing the file content");

//asychronous call

// fs.writeFile("./test.txt", "this is using writefile method", (e) => {});

// below both functions are used for reading a file

//synchronous call

// const result = fs.readFileSync("./content.txt", "utf-8");
// console.log(result);

// asynchronous call

// fs.readFile("./content.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error in the file");
//   } else {
//     console.log(result);
//   }
// });

// to add data but it not overwrite the existing data

fs.appendFileSync("./test.txt", "\nthis is second line");
