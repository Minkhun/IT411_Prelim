const readline = require('readline');

 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter grade? ', (grade) => {
  // TODO: Log the answer in a database
  
  var grade = parseInt(grade);
  addyears(grade,3);
  addyears(grade,2);
  addyears(grade,5);
 
  rl.close();
});
