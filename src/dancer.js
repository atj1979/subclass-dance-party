// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;

  // ZOOM:
  // animate size of object to shrink on mouseover
  // expand on mouse out

  // use jQuery to create an HTML <span> tag

  this.$node = $('<img src="' + this.generateImage() + '" class="dancer" />');
  this.$node.css({height: '200px', width: '200px'});

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();

  if(dancers.length > 5){
    this.goToPartner();
  }
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.goToPartner = function(){

  var pos1 = this.$node.position();
  var partner = {};

  // find nearest partner
  for(var i = 0; i < dancers.length; i++){
    var currentDancer = dancers[i];
    var pos2 = $(currentDancer).position();

    var a = Math.pow((pos2.top - pos1.top), 2);
    var b = Math.pow((pos2.left - pos1.left), 2);
    var c = Math.sqrt(a + b);

    if(c > partner.distance && c > 0){
      partner.distance = c;
      partner.node = currentDancer.$node;
    }
  }

  // go to partner
  this.$node.animate({top: '250px', left: '250px'}, 10000);
  $(partner.node).animate({top:'200px', left: '200px'}, 10000);


};

Dancer.prototype.generateImage = function(arr){
  var images = [
  'https://lh3.ggpht.com/9Y8fCFcTYLbyZ4gllHZIYOMK0h11RNfEZfGln3vTe4hsr46VSfJM1qZj67eqOZt8I76V=w300',
  'http://www.dobhran.com/images/fgarden-lettuce.gif',
  'http://www.theblackdiamondsband.co.uk/images/kazoo.gif',
  'http://i.imgur.com/lXQRYw4.jpg',
  'http://www.cindercrete.com/wp-content/uploads/2013/05/EASYSTACK-STANDARD-TAN-CHARCOAL.png',
  'http://i.imgur.com/GwPVGY2.png',
  'http://25.media.tumblr.com/tumblr_mcqqyayWxa1r4dns9o1_250.gif'];

  return arr !== undefined ? arr[Math.floor(Math.random() * arr.length)] : images[Math.floor(Math.random() * images.length)];
}


