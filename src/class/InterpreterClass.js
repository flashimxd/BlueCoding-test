/**
 * Interpreter Class
 * basic confirgurations
 * @author Rangel Netto 
 */

module.exports = class Interpreter {
    
    constructor(step,answer){
        this.step = step;
        this.answer = answer;
    }

    /**
     * set step
     * @param {*} step 
     */
    setStep(step){
        this.step = step;
    }

    /**
     * set Answer
     * @param {*} answer 
     */
    setAnswer(answer){
        this.answer = answer;
    }

    /**
     * return the step
     */
    getStep(){
        return this.step;
    }

    /**
     * return the answer
     */
    getAnswer(){
        return this.answer;
    }

    /**
     * Show the help text
     */
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

    /**
     * Basic regex expression to test if the template is on the right format
     * @param {*} string 
     */
    checkFormat(string){
        let toTest = string[0];
        let reS = /^</;
        let reE = />$/;
        let regExp = /(<.[^(><.)]+>)/g;

        if(!reS.test(toTest) || !reE.test(toTest) || !regExp.test(toTest)){
            return false;
        }else{
            return true;
        }
    }
}