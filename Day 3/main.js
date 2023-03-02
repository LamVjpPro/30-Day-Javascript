//  Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
        const firstName = 'Trong'
        const lastName = 'Lam'
        const country = 'Viet Nam'
        const city = 'Bac Giang'
        const age = 20

        console.log(typeof firstName)
        console.log(typeof age)

//  Check if type of '10' is equal to 10

        const a = '10'

        console.log(typeof a)

//  Check if parseInt('9.8') is equal to 10

       const b = parseInt('9.8')

        console.log(b)

//  Boolean value is either true or false.
        // i. Write three JavaScript statement which provide truthy value.
            const c = []
            const d = {}
            const e = '0'
        // ii. Write three JavaScript statement which provide falsy value.
            const f = null
            const g = 0
            const h = false

//  Use the Date object to do the following activities
        // What is the year today?
            const all = new Date()

            console.log(all.getFullYear())
        // What is the month today as a number?
            console.log(all.getMonth() + 1)
        // What is the date today?
            console.log(all.getDate())
        // What is the day today as a number?
            console.log(all.getDay() + 1)
        // What is the hours now?
            console.log(all.getHours())
        // What is the minutes now?
            console.log(all.getMinutes())
        // Find out the numbers of seconds elapsed from January 1, 1970 to now.
            console.log(all.getTime())

// Exercises: Level 2
     
        // Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
        // const baseValue = prompt('Enter the base of a triangle: ');
        // const heightValue = prompt('Enter the height of a triangle: ');
        
        
        // const areaValue = (baseValue * heightValue) / 2;
        
        // console.log(
        //   `The area of the triangle is ${areaValue}`
        // );

        // Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
            // const sideA = prompt('Enter Side A')
            // const sideB = prompt('Enter Side B')
            // // const sideC = prompt('Enter Side C')

            // const tong = sideA + sideB

            // console.log(`Ket Qua La: ${tong}`)