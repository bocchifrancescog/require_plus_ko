require(["knockout", "src/anotherViewModel"], function(ko, AnotherViewModel){

    function SimpleViewModel(){
      var self = this;
      self.title = ko.observable("How to put togheter Knockout and Require!!!");

      self.anotherVM = new AnotherViewModel();

    }
    ko.applyBindings(new SimpleViewModel(), document.getElementById("app"));
});
