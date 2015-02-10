var TwerkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  twerkArr =[
  'http://img0.joyreactor.com/pics/post/twerking-Deadpool-Marvel-fandoms-1711935.gif',
  'http://new1.fjcdn.com/thumbnails/comments/4772828+_fff72f2093529ddc03255f43d40ee327.gif',
  'http://rs9.pbsrc.com/albums/a63/Mihiru/twerk01.gif~c200',
  'http://media.giphy.com/media/u5dUktnrnehEI/giphy.gif'
  ];
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="' + this.generateImage(twerkArr) + '" class="dancer" />');
  this.$node.css({height: '200px', width: '200px'});
  this.setPosition(top, left);

};

TwerkyDancer.prototype = Object.create(Dancer.prototype);
TwerkyDancer.prototype.constructor = TwerkyDancer;
TwerkyDancer.prototype.oldStep = Dancer.prototype.step;

TwerkyDancer.prototype.step = function(){

  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

};
