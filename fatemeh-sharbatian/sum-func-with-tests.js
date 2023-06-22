function sumNumbers() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;
  }

  return num1 + num2;
}

// Example usage:
//let result = sumNumbers();
//if (result !== undefined) {
//  console.log("Sum:", result);
//}


// Unit test for sumNumbers function
function testSumNumbers() {
  // Test case 1: Valid input
  let result = sumNumbers();
  let expected = 0;
  console.log("Test case 1 - Expected:", expected, "Actual:", result);
  
  // Test case 2: Invalid input (non-numeric)
  let inputStub = {
    prompt: function() {
      return "abc";
    }
  };
  let originalPrompt = window.prompt;
  window.prompt = inputStub.prompt;
  
  result = sumNumbers();
  expected = undefined;
  console.log("Test case 2 - Expected:", expected, "Actual:", result);
  
  window.prompt = originalPrompt;
}

// Run the unit test
//testSumNumbers();
