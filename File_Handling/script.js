//write file||read file||update file||append file||delete file||folder creation
const fs = require("fs");

//function(err){} => callback();

/*
To Write in a File

fs.writeFile("abcd.txt", "Hello world", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});
*/

/*
To read a file
 
fs.readFile("abcd.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
*/

/*
To append a file

fs.appendFile("abcd.txt", " Hi World", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file appended");
  }
});
*/

/*
To rename a file

fs.rename("abcd.txt", "Hello.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file renamed");
  }
});
*/

/*
To delete a file

fs.unlink("Hello.txt", function (err) {
  if (err) console.log(err);
  else console.log("file deleted");
});
*/

/*To create a folder

fs.mkdir("Hello.txt", function (err) {
  if (err) console.log(err);
  else console.log("folder created");
});
*/

/*To read a directory

fs.readdir("Hello", { withFileTypes: "true" }, function (err, files) {
  if (err) console.log(err);
  else console.log(files);
});
*/

/*To delete a directory

fs.rmdir("Hello", function (err) {
  if (err) console.log(err);
  else console.log("folder deleted");
});
*/

/*To delete a file within a folder

fs.unlink("./Hello/Hi.txt", function (err) {
  if (err) console.log(err);
  else console.log("file deleted");
});
*/

/*
To delete a complete folder/dir with files

fs.rm("lolo", { recursive: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("folder deleted");
  }
});
*/
