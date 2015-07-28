
// 4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.

function sortArray(numbers)
  return numbers.sort();
};

  //5. Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you passed in that are larger than 25.


function over25Array(numbers) {
  var largeArray = []
 for (i=0; i < numbers.length; i++);{

    if numbers[i] > 25 {
      largeArray.push(numbers[i]);
    }
  }
  return largeArray; 
};


  //7. Attach an event handler to the button click.
  //8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  // 9. Convert that string of comma-delimited numbers into an array.
  //10. Pass that array into the function that finds numbers higher than 25.
  // 11. The array that is the result of that, pass it into the function that sorts the array.
 //12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).
  //13. Give each <div> a class of "number".
 


$("#target").click(function() { 
  var value = $("#inputed").val();
  var numberArray = value.split(",");
  var largeArray = over25Array(numberArray);
  var sortedArray = sortArray(largeArray);
  
  var output = "";

   for (i=0; i < sortedArray.length; i++){

      output += "<div class = 'number'>" + sortedArray[i] + "</div>";

   };
});
