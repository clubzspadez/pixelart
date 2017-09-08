

//Grab DOM elements
var canvas = $('#pixel_canvas');
const widthInput = $('#input_width');
const heightInput = $('#input_height');

//eventlistener on submit for input
$('#sizePicker').on('submit',function (){
	//create variables to store those values
	let widthIn = $('#input_width').val();
	let heightIn = $('#input_height').val();
	//Remove all child nodes from table
	$('table').empty();
	//call function and pass variables
	makeGrid(widthIn, heightIn);
	//prevents refresh
	event.preventDefault();

});

//makeGrid function with parameters passing width and height
function makeGrid(width, height) {

// loop through height
for(var x = 0; x < height; x++){
	$('table').append("<tr></tr>");
	}
// loop  through width
for( var y = 0; y < width; y++){
		$('tr').append("<td></td>");
		}
}

//Place color in table data
$('table').on('click', 'td', function() {
    const colour = $("#colorPicker").val();
    $(this).css('backgroundColor', colour);
});