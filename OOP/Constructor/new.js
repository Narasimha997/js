class student{
    constructor(id,name,standard,fees){
        this.ID=id
        this.Name=name                       //"this" keyword is a ponter pointing to the current object inside of the class.
        this.standard=standard               // Outside of the class is object
        this.fees=fees                              //[note: We cannot write return keyword inside of the class]
    }                                           // "this" keyword is to access the class members
}
module.exports=student                        //exports and imports:- The objective of the exports and imports is getting modular apporach