var testArray = [0, 1, 1, "1", 3, "311"];

for (var arrayPosition = 0;
    arrayPosition < testArray.length - 1; arrayPosition++)
    {
        var currentElement = testArray[arrayPosition];
        var nextElement = testArray[arrayPosition + 1];

        console.log("testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));

        console.log("testing "  + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));
    
        if (currentElement == nextElement)
        {
            console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
            if (currentElement !== nextElement) 
            {
                // We can use the typeof() function of JavaScript to identify the type of an element
                console.log(currentElement + " is " + typeof(currentElement)); 
                console.log(nextElement  + " is " +  typeof(nextElement));
            }
        } else 
        {
            console.log("Testing " + currentElement + " and " + nextElement + "(equal to): false");
    
        }
    }