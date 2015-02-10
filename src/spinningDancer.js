var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;
SpinningDancer.prototype.oldStep = Dancer.prototype.step;

SpinningDancer.prototype.step = function(){

  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.animate({  borderSpacing: -1080 }, {
    step: function(now,fx) {
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:3000
},'linear');
};
