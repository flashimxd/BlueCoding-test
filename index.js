//require module readline to get inputs using terminal
const readline = require('readline');
const Interpreter = require('./src/class/InterpreterClass');
const HRML = require('./src/class/HRMLClass');

//set intro informations using template string
const intro = `Welcome To HRML Maker, Using this system, you'll be able to write
custom XML tags, type START to use, --help to see all options or EXIT to close.
    -==Powered By Blue Coding @ The coding talent warehouse==- `;

let interpreter = new Interpreter();
let hrml = new HRML();

//seting rl constant to create factory method to use readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//display intro informations and how to use
console.log(intro);

rl.question(' ', (answer) => {
    switch(answer){
        case "--help":
            interpreter.setStep(0);
            interpreter.setAnswer(answer);
            console.log(interpreter.helpText());

            setTimeout(() => { 
                rl.question(`EXIT? S/N: `, (answer) => {
                    if(answer === 'S'){
                        console.log("Bye, see you later! ^^");
                        rl.close();
                    }
            }), 10000});
        break;

        case "START":
            interpreter.setStep(1);
            interpreter.setAnswer(answer);
            console.log('-- Start HRML --');
            rl.question('1 - The number of lines of source code: ', (answer) => {
                hrml.setNumberOfSourceLines(answer);
                console.log(`Number of source code lines = ${hrml.getNumberOfSourceLines()}`)
                
                rl.question('2 - The number of Queries: ', (answer) => {
                    hrml.setNumberOfQueries(answer);
                    console.log(`Number of Queries = ${hrml.getNumberOfQueries()}`);
                    console.log("Write your code!");

                    let sourceLines = parseInt(hrml.getNumberOfSourceLines());
                    let idx = 0;
                    let tags = []; //TODO transforma isso em propriedade da classe
                    let queries = [];
                    let queryLines = parseInt(hrml.getNumberOfQueries());
                    rl.question('3 - Write your template: ', (template) => {
                        tags.push(template);
                        console.log(interpreter.checkFormat(tags));
                        let id = 0;
                        if(interpreter.checkFormat(tags)){
                            console.log("Start with your queries:")
                            while(queryLines >= id){
                                rl.question(`Query nº${id}`, (query) => {
                                    console.log(query);
                                });
                                id++;
                            }

                        }else{
                            console.log("Incorrenct Format")
                            rl.question('3 - Write your template: ', (template) => {

                            });
                        }
                    });
                });
            });

        break;

        case "EXIT":
            console.log("Bye, see you later! ^^");
            rl.close();
        break;
    }
});