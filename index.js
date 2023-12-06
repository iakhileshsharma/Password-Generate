#!/usr/bin/env node
import welcome from 'cli-welcome';
import cliTable from 'cli-table';
import clipboardy from 'clipboardy';
import pkgjson from './package.json' assert { type: "json"};
import { program } from 'commander';




var args = process.argv.slice(2);

program
.option('-l, --length ', 'length of password')
.option('-s, --save', 'save password')
.option('-nums, --numbers', 'add only numbers')
.option('-sym, --symbols', 'add only symbols') 
.parse();

const options = program.opts();
if(options.alpha) console.log(options);


(async () => {

    // let flags = [];
    // flags = [...process.argv.slice(2)];
    // const isalphaonly = flags.indexOf('--aplha') !== -1 ? true : false;

    /*
     random-password-gen  v1.0.0 by Akhilesh        
     A CLI that can generate random passwords for you

     gen-pass -l=10 -a -n -sc -c -s -text=gmail -e=10 -re=akhilesh

     {djbwj21!k}

     send email or text of password with timestamp
     "Here is your Gmail password dwahfjh%$E%$"

     bulk password generator, exports csv

     gen-pass -l=7 -n=2 -s=2

     asbdjhs
     
    */

    // Initialization...
    welcome({
        title: `${pkgjson.name}`,
        tagLine: `by ${pkgjson.author.name}`,
        description: `${pkgjson.description}`,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${pkgjson.version}`
    });
    
 //console.log(process.argv[3][2])
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });




  //cli
  let password = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
  let symbols = '!@#$%^&*';
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';


  let checkL = parseInt(process.argv[2][2]);
  let checkN = parseInt(process.argv[3][2]);
  let checkS = parseInt(process.argv[4][2]);
  let checkIdx = new Array(arr.length).fill(false);

    for(let i = 0; i < checkL; i++){
       password += alpha[Math.floor(Math.random() * alpha.length)];
    }

    for(let i = 0; i < checkN; i++){
      let arr = password.split('');
      arr[Math.ceil(Math.random()* arr.length)] = numbers[Math.floor(Math.random() * numbers.length)];
      password = arr.join('');
    }

    for(let i = 0; i < checkS; i++){
      let arr = password.split('');
      arr[Math.ceil(Math.random()* arr.length)] = symbols[Math.floor(Math.random() * symbols.length)];
      password = arr.join('');
    }

  try{
    await clipboardy.write(password); 

  }catch(error){
      console.log(error);
  }

    console.log("Password: ", password, "has been copied to your clipboard.");
 
  









// Ending...
    // const table = new cliTable();

    // table.push(
    //     ['star', 'https://www.npmjs.com/package/cli-table'],
    //     ['follow', 'https://www.npmjs.com/package/cli-table'],
    //     );

    // console.log(table.toString());

      // // if(isalphaonly == false){
  //   //     characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  //   // }
    

    console.log("\n")

})();

