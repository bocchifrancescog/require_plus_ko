require(["knockout", "jquery", "src/anotherViewModel", "src/normalClass"],
  function(ko, $, AnotherViewModel, NormalClass){

    function SimpleViewModel(){
      var self = this;
      console.log($);
      // Basic observable
      self.title = ko.observable("How to put togheter Knockout and Require!!!");

      // Using another ViewModel
      self.anotherVM = new AnotherViewModel();

      // Observable Array
      self.myArray = ko.observableArray();
      self.myArray.push({'firstName': 'Nikola', 'lastName': 'Tesla'});


      self.scientistBucket = [
        {'firstName': 'Nikola', 'lastName': 'Tesla'},
        {'firstName': 'Enrico', 'lastName': 'Fermi'},
        {'firstName': 'Albert', 'lastName': 'Einstein'},
      ];

      //onClick callback
      self.addScientist = function(event){
        var max = self.scientistBucket.length;
        var newScientist = self.scientistBucket[getRandom(0, max)]
        self.myArray.push(newScientist);

        // Let's try to use a normal Class
        objFromNormalClass = new NormalClass(newScientist.firstName);
        objFromNormalClass.sayMyName();
      }

    }
    ko.applyBindings(new SimpleViewModel(), document.getElementById("app"));
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
