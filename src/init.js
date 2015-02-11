$(document).ready(function(){
  window.dancers = [];
  var backgroundArr =[
      'http://p1.pichost.me/i/53/1770974.jpg',
      'http://www.hollywoodballroomdc.com/wp-content/uploads/2012/02/ballrom-windows-empty-A.jpg'
  ];

  var background = Dancer.prototype.generateImage(backgroundArr);
  console.log(background);
  $('body').css({background : 'url('+background+') no-repeat center center fixed'});

  //find a close pair

  //dancer1pos = $(window.dancers[i]).position()
  //dancer1pos.left
  //dancer1.top
  //dancer2....
  //
  //Math.hypot(dancer1pos.left-dancer2pos.left, dancer1pos.top-dancer2pos.top);
  //
  $(".lineup").on("click", function (event){

    for (var i = 0; i < window.dancers.length; i++){
        var left = $(document).width() / window.dancers.length;
        left = left * i;
        $(window.dancers[i]).animate({top: '500px', left : left+'px'});
    }
  });


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 5000
    );
    window.dancers.push(dancer.$node);
    // pseudo-classical"
    // var blinkyDancer = new BlinkyDancer(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 5000
    // );

    $('body').append(dancer.$node);

    $('.dancer').hover(
        function(){
            $(this).animate({
            height: '50px',
            width: '50px'},
            'fast')},

        function (){
            $(this).animate({
            height: '200px',
            width: '200px'},
            'slow')}
    );


});
});
