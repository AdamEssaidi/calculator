$(document).ready(function(){
    $(".number").click(function(){
      var value1 = $( this ).html();
    //   var value2 = $( "input" ).val();
      $( "input" ).val( /*value2+*/value1);
      console.log(value1);
    });
});