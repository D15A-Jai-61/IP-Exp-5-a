// Custom iterator for squaring numbers in an array
function* squareIterator(arr) {
  for (let num of arr) {
    yield num * num;
  }
}

// Function to display results on the page
function displayResults(results, title) {
  const outputDiv = document.getElementById('output');
  const resultHTML = `
    <h2>${title}</h2>
    <p>${results.join(', ')}</p>
  `;
  outputDiv.innerHTML += resultHTML;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Display original array of numbers
displayResults(numbers, "Array of numbers:");

// Using the iterator with spread operator to create array of squares
const squaresArray = [...squareIterator(numbers)];
displayResults(squaresArray, "Array of squares:");
