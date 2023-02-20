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

