// Declare customerName globally and set it to 'bob'
var customerName = "bob";

// Function to uppercase the customerName variable.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer as a global variable.
var bestCustomer;

// Function to set bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite bestCustomer with 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant for the least favorite customer.
const leastFavoriteCustomer = "sue";

// Function that attempts (and fails) to reassign the least favorite customer.
function changeLeastFavoriteCustomer() {
  // This line will throw an error because leastFavoriteCustomer is a constant.
  leastFavoriteCustomer = "maybe sue";
}

// Export the variables and functions for testing.
module.exports = {
  customerName,
  upperCaseCustomerName,
  bestCustomer,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};
