// Declare a function fullName and it print out your full name.
        // function fullName() {
        //     let firstName = 'Le Trong'
        //     let lastName = 'Lam'
        //     let fullName = firstName + ' ' + lastName
        //     console.log(fullName)
        // }

        // fullName()
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
        // function fullName(firstName, lastName) {
        //     console.log(firstName)
        //     console.log(lastName)
        // }

        // fullName('Le Trong', 'Lam')
// Declare a function addNumbers and it takes two two parameters and it returns sum.

        // function addNumbers(x, y) {
        //     return x + y
        // }

        // console.log(addNumbers(12, 2))
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

        // function areaOfRectangle(length, width) {
        //      return length * width
        // }

        // console.log(areaOfRectangle(5, 5))
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

        // function perimeterOfRectangle(length, width) {
        //     let perimeter = 2 * (length + width)
        //     return perimeter;
        // }

        // console.log(perimeterOfRectangle(3, 3))
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

        // const volumeOfRectPrism = (length, width, height) => {
        //     let volume = length * width * height
        //     return volume;
        // }

        // console.log(volumeOfRectPrism(3, 3, 3))
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

        // const areaOfCircle = (n, r) => {
        //     let area = n * r * r
        //     return area;
        // }

        // console.log(areaOfCircle(2, 1))
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

        // const circleOfCircle = (n, r) => {
        //     let circumference = 2 * (n * r);
        //     return circumference;
        // }

        // console.log(circleOfCircle(2, 2))
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

        // const caculate = (mass, volume) => {
        //     let density = mass / volume;
        //     return density;
        // }

        // console.log(caculate(10, 2))
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
            // function caculates(distance, time) {
            //     let count = distance / time;
            //     return count;
            // }

            // console.log(caculates(20, 2))
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

            // let total = (mass, gravity) => {
            //     let weight = mass * gravity;
            //     return weight;
            // }

            // console.log(total(5, 5))
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

        // let convertCelsiusToFahrenheit = oC => {
        //     let oF = (oC * 9/5) + 32;
        //     return oF;
        // }

        // console.log(convertCelsiusToFahrenheit(20))
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
            // The same groups apply to both men and women.
            // Underweight: BMI is less than 18.5
            // Normal weight: BMI is 18.5 to 24.9
            // Overweight: BMI is 25 to 29.9
            // Obese: BMI is 30 or more

        
        // let check = (weight, height) => {
        //     let bmi = weight / (height * height);
        //     return bmi;
        // }

        // console.log(check(65, 1.75))
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
        // let getSeason = month => {

        //     if (3 <= month && month <= 5) {
        //     return 'spring';
        //     }

        //     if (6 <= month && month <= 8) {
        //     return 'summer';
        //     }

        //     if (9 <= month && month <= 11) {
        //     return 'autumn';
        //     }

        //     return 'winter';
        // }

        // console.log(getSeason(7))
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

    
