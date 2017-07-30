define(['knockout'], function (ko) {
    var anotherViewModel = function(){
      var self = this;

      self.title = "This title comes from another outstanding viewModel";
    };

    return anotherViewModel;
});
