module.exports = class Interpreter {
    
    constructor(step,answer){
        this.step = step;
        this.answer = answer;
    }

    setStep(step){
        this.step = step;
    }

    setAnswer(answer){
        this.answer = answer;
    }

    getStep(){
        return this.step;
    }

    getAnswer(){
        return this.answer;
    }

    helpText(){

        if(this.getStep() === 0 ){
            return `                          -== HELP ==-
                The first line is 1 integer, consisting of the number of the number of lines of source code (N).
                The second line is 1 integer, constiting of the number of queries (Q).
                The next N lines consiste of HRML source code, consisting of either an opening tag with zero or more attributes or a closing tag. 
                Then the next Q lines contains the queries. 
                Each line is a string that references an attribute in the HRML source code.`;

        }else if(this.getStep() === 1){
            return 'START';
        }
    }

    checkFormat(string){
        let toTest = string[0];
        //<head><title></title></head>
        /*TODO
        checar se todas as tags abertas foram fechadas
        checar se o numero de tags respeita o tamanho do source code
         */
         let reS = /^</;
         let reE = />$/;
         let regExp = /(<.[^(><.)]+>)/g;

         if(!reS || !reE || !regExp){
            return false;
         }else{
             return true;
         }
    }

    StartHRML(){

    }
}