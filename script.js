console.log('hello');
console.log($('#xvalue').val(), $('#yvalue').val());


var forward = function () {
  
  var id = Number($('.here').attr('id')) + 1;
  if (id === 17) {
    id = 1;
  }
  $('.here').removeClass('here');
  $('#' + id).addClass('here');
  
}
// right function
var right = function () {
  var id = Number($('.here').attr('id')) + 4;
  if (id === 17) {
    id = 1;
  } else if (id === 18) {
    id = 2;
  } else if (id === 19) {
    id = 3;
  } else if (id === 20) {
    id = 4;
  }
  $('.here').removeClass('here');
  $('#' + id).addClass('here');
  console.log('right');
}



$('button').on('click', function(){
  if($(this).hasClass('forward')){
    forward();

  } else if ($(this).hasClass('backward')){
    var id = Number($('.here').attr('id')) - 1;
    if (id === 0) {
      id = 16;
    }
    $('.here').removeClass('here');
    $('#' + id).addClass('here');
    

  } else if ($(this).hasClass('right')){
    right();

  } else if ($(this).hasClass('left')){
    var id = Number($('.here').attr('id')) - 4;
    if (id === -3) {
      id = 13;
    } else if (id === -2) {
      id = 14;
    } else if (id === -1) {
      id = 15;
    } else if (id === 0) {
      id = 16;
    }
    $('.here').removeClass('here');
    $('#' + id).addClass('here');
    

  } else if ($(this).hasClass('submit')){
    $('#1').addClass('here');
    var xValue = $('#xvalue').val();
    var yValue = $('#yvalue').val();
    for (i=1; i< xValue; i++){
      forward();
    }
    for (q=1; q < yValue; q++){
      right();
    }
  }
  
});