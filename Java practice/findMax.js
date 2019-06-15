var testArray = [3, 7, 5, 2, 9, 4];

function findMax(testArray){
    var maxElement = testArray[0];
    for (var arrayPosition = 1; arrayPosition < testArray.length; arrayPosition++) 
    {
       if (testArray[arrayPosition] > maxElement)
       {
           max = testArray[arrayPosition];
       }
    }

return max;
