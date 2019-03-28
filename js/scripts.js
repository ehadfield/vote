/*prompt for age

/*branch

$(document).ready() {

};*/

$(document).ready(function(){
  $(".form-group").submit(function(event){
    console.log("clicked submit");
  var num = parseInt($("#personAge.form-control").val());
console.log(num);
  if (num >= 18){

    $("div .col-lg.ofAge").show();
} else{
    $("div .col-lg.minors").show();
  }
event.preventDefault();

  });
    });
