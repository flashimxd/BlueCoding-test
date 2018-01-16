/**
 * HRML Class
 * Proccess the I/O
 * @author Rangel Netto 
 */

module.exports = class HRML {
    constructor(nLines, nQueries){
        this.numberOfSourceLines = nLines;
        this.numberOfQueries = nQueries;
        this.template = [];
        this.query = [];
    }

    /**
     * set the number of source code lines
     * @param {*} lines 
     */
    setNumberOfSourceLines(lines){
        this.numberOfSourceLines = lines;
    }

    /**
     * return the number of source code lines
     */
    getNumberOfSourceLines(){
        return this.numberOfSourceLines;
    }

     /**
     * set the number of queries
     * @param {*} lines 
     */
    setNumberOfQueries(lines){
        this.numberOfQueries = lines;
    }

     /**
     * return the number of the queries
     */
    getNumberOfQueries(){
        return this.numberOfQueries;
    }

    /**
     * set the template after being valid
     * @param {*} template 
     */
    setTemplate(template){
        this.template = template;
    }

    /**
     * get the template format
     */
    getTemplate(){
        return this.template;
    }

     /**
     * set query params
     * @param {*} query 
     */
    setQuery(query){
        this.query = query;
    }

    /**
     * return the query params
     */
    getQuery(){
        return this.query;
    }

    /**
     * format the template
     * @param {*} template 
     */
    formatTemplate(template){
        let temp = template[0].trim();
        let arrayString = temp.split(">");
        let arrayLen = arrayString.length;
        let arrayFormated = [];
        let tagName = [];
        let arrayAttr = [];
        let name = '';

        arrayString.forEach(function(v,i){

            if(i < arrayLen / 2 - 1){
                let tname = v.split("<");
                let tnameS = tname[1].split(" ");
                name += tnameS[0]+'.';

                if(tnameS.length > 1){                   
                    tnameS.shift();
                    arrayFormated.push({name: name, attrs: tnameS});
                }else{
                    arrayFormated.push({name: name, attrs: null});
                }
            }
        });

       this.setTemplate(arrayFormated);
    }

    /**
     * match and return the input after filter all the queries
     * @param {*} queries 
     */
    find(queries){
        let template = this.getTemplate();
        let result =[];

        if(queries.length){
            queries.forEach((v,i)=>{
                let needle = v.split("~");
                let tag = needle[0]+'.';
                let attr = needle[1];

                template.forEach((vl, id)=>{
                    if(vl.name == tag){
                        vl.attrs.forEach((value, index)=>{
                            let resc = value.split("=");
                            if(resc[0] === attr){
                                result.push(resc[1]);
                            }/*else{
                                result.push('Not found!');
                            }*/
                        })
                    }
                })
            
            });
        }
        if(result.length){
            this.setQuery(result);
            return true;
        }else{
            return false;
        }
    }
}