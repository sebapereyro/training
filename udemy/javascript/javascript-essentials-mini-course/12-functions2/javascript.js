// New function.
// Gets the value from an <input /> field.
// class_selector is a string for the querySelector function.
function getName(class_selector) {

	// Select the <input /> HTML element
	var nameElement = document.querySelector( class_selector );

	// Get the value of the <input /> HTML element.
	// If you want the value of a regular element, use .innerHTML
	var name = nameElement.value;

	// Replace "Smith" with "Taulien"
	// This is just an example of some string manipulation.
	var newName = name.replace('Smith', 'Taulien');

	// Return the new name. 
	return newName;
} 


// Get the first name from the <input /> field.
// Takes no parameters
function getFirstName() {
	// Run the getName() function with the .name selector
	// This will return "Kalob Taulien" because it replaced 
	// "Smith" with "Taulien"
	var name = getName('.name');

	// Split the full name by its spaces.
	// .split() gives us an array (a list)
	var firstname = name.split(" ");

	// Return the first data point in the list, which is the first name.
	return firstname[0];
}

// Declare a new variable that executes getFirstName();
var firstname = getFirstName();

// Log the result to the browser.
console.log(firstname);

