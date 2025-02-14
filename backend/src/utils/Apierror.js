class Apierror extends Error{
    constructor(statuscode,message="Error"){
        super(message);
        this.statuscode = statuscode;
        this.message = message;
        console.log(statuscode,message);
        return      ;
    }
}
   
export {Apierror};