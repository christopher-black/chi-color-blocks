$(document).ready(function() {
  console.log("jQuery sourced");

  $('#blockContainer').on('click', '.block', function(){
    // Access data-color of the div element
    var color = $(this).data('color');
    // Combine strings. If the color is red, it will be $('#redCount')
    var currentCount = parseInt($('#' + color + 'Count').text());
    currentCount--;
    $('#' + color + 'Count').text(currentCount);
    $(this).remove();
  });

  // Optimized code

  $('.nav-container').on('click', 'button', function(){
    console.log('i got here');
    // Using 'cat' as an example, this varible can have any name.
    var color = $(this).data('cat');
    // Add data-color and color class to the block
    $('#blockContainer').append("<div data-color='" + color + "' class='block " + color + "-block'></div>")
    // Access html of the span and convert it to an int
    var currentCount = parseInt($('#' + color + 'Count').text());
    // Increase the count
    currentCount++;
    // Set the text of the span to the new count
    $('#' + color + 'Count').text(currentCount);
  });

  // Previous code

  // $('#redButton').on('click', function(){
  //   $('#blockContainer').append("<div class='block red-block'></div>")
  //   redCount++;
  //   console.log(redCount);
  //   $('#redCount').text('Red: ' + redCount);
  // });
  // $('#yellowButton').on('click', function(){
  //   $('#blockContainer').append("<div class='block yellow-block'></div>")
  //   yellowCount++;
  //   $('#yellowCount').text('Yellow: ' + yellowCount);
  // });
  // $('#blueButton').on('click', function(){
  //   $('#blockContainer').append("<div class='block blue-block'></div>")
  //   blueCount++;
  //   $('#blueCount').text('Blue: ' + blueCount);
  // });
  // $('#greenButton').on('click', function(){
  //   $('#blockContainer').append("<div class='block green-block'></div>")
  //   greenCount++;
  //   $('#greenCount').text('Green: ' + greenCount);
  // });
});
