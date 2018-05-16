
// Forward Function
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
  }



$('button').on('click', function(){
  if($(this).hasClass('forward')){
    forward();
  } 
  else if ($(this).hasClass('backward')){
    var id = Number($('.here').attr('id')) - 1;
    if (id === 0) {
      id = 16;
    }
    $('.here').removeClass('here');
    $('#' + id).addClass('here');
  } 
  else if ($(this).hasClass('right')){
    right();
  } 
  else if ($(this).hasClass('left')){
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
  } 
  else if ($(this).hasClass('submit')){
    var xValue = $('#xvalue').val();
    var yValue = $('#yvalue').val();
    if ((xValue > 4) || (yValue > 4)){
      alert('x and y values can only be 1-4');
    }
    else{
      $('#1').addClass('here');
      for (i = 1; i < xValue; i++) {
        forward();
      }
      for (q = 1; q < yValue; q++) {
        right();
      }
    }
  }
  
});