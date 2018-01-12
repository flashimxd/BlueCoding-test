module.exports = class HRML {
    constructor(nLines, nQueries){
        this.numberOfSourceLines = nLines;
        this.numberOfQueries = nQueries;
    }

    setNumberOfSourceLines(lines){
        this.numberOfSourceLines = lines;
    }

    getNumberOfSourceLines(){
        return this.numberOfSourceLines;
    }

    setNumberOfQueries(lines){
        this.numberOfQueries = lines;
    }

    getNumberOfQueries(){
        return this.numberOfQueries;
    }
}