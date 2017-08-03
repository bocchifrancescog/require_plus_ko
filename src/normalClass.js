define(function(){
  var a = class NormalClass{
    constructor(name){
      this.name = name;
    }
    sayMyName(){
      console.log("Your name is "+this.name+"!!!")
    }
  }
  return a;

});
