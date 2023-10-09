#!/usr/bin/env node


//import packages
import welcome from 'cli-welcome';
import cliTable from 'cli-table';
import clipboardy from 'clipboardy';
import pkgjson from './package.json' assert { type: "json"};





(async () => {

    let flags = [];
    flags = [...process.argv.slice(2)];
    const isalphaonly = flags.indexOf('--aplha') !== -1 ? true : false;





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
    








  //cli
  let password = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
    if(isalphaonly == false){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }



  let charlength = characters.length;

     for(let i=0; i<30; i++){
       password += characters[Math.floor(Math.random() * charlength)];
    }

  try{
    await clipboardy.write(password);

  }catch(error){
      console.log(error);
  }

    console.log("Password: ", password, "has been copied to your clipboard.");
 
  









// Ending...
    const table = new cliTable();

    table.push(
        ['star', 'https://www.npmjs.com/package/cli-table'],
        ['follow', 'https://www.npmjs.com/package/cli-table'],
        ['followup', 'https://www.npmjs.com/package/cli-table'],
        ['followup', 'https://www.npmjs.com/package/cli-table'],
        );

    console.log(table.toString());

})();

