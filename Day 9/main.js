// Explain the difference between forEach, map, filter, and reduce.

// Define a callback function before you use it in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
        const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

        // countries.forEach(country => {
        //     console.log(country)
        // })
// Use forEach to console.log each name in the names array.
        const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

        // names.forEach(name => {
        //     console.log(name)
        // })
// Use forEach to console.log each number in the numbers array.
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        // numbers.forEach(numbers => {
        //     console.log(numbers)
        // })
// Use map to create a new array by changing each country to uppercase in the countries array.

        // const countriesToUpperCase = countries.map(hoa => hoa.toUpperCase())
        // console.log(countriesToUpperCase)
// Use map to create an array of countries length from countries array.

            // const countriesLength = countries.map(dai => countries.length)
            // console.log(countriesLength)
// Use map to create a new array by changing each number to square in the numbers array

// Use map to change to each name to uppercase in the names array
            // const namesToUpperCase = names.map(hoa => hoa.toUpperCase())

            // console.log(namesToUpperCase)
// Use filter to filter out countries containing land.

// Use filter to filter out countries having six character.
            // const countriesLength2 = countries.filter(six => six.length === 6)

            // console.log(countriesLength2)
// Use filter to filter out countries containing six letters and more in the country array.
            // const countriesLength3 = countries.filter(more => more.length > 6)

            // console.log(countriesLength3)
// Use filter to filter out country start with 'E';
            // const startWithE = countries.filter(country => country.startsWith('E'))

            // console.log(startWithE)
// Use filter to filter out only prices with values.

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
           
// Use reduce to sum all the numbers in the numbers array.
            // const sum = numbers.reduce((x, y) => x + y, 0)

            // console.log(sum)
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// Explain the difference between some and every

// Use some to check if some names' length greater than seven in names array
            // const some1 = names.some(hon => hon.length > 7) 

            // console.log(some1)
// Use every to check if all the countries contain the word land
            // const every1 = countries.every(ktr => ktr === 'land')

            // console.log(every1)
// Explain the difference between find and findIndex.

// Use find to find the first country containing only six letters in the countries array
                // const find1 = countries.find(pt => pt.length == 6)

                // console.log(find1)
// Use findIndex to find the position of the first country containing only six letters in the countries array
                // const findIndex1 = countries.findIndex(handler => handler.length < 7 )

                // console.log(findIndex1)
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
            // const handler = countries.findIndex(ktr => ktr == 'Norway')

            // console.log(handler)
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
        //     const handler2 = countries.findIndex(ktr => ktr == 'Russia')

        //     console.log(handler2)


        var grades = [
                {name: 'John', grade: 8, sex: 'M'},
                {name: 'Sarah', grade: 12, sex: 'F'},
                {name: 'Bob', grade: 16, sex: 'M'},
                {name: 'Johnny', grade: 2, sex: 'M'},
                {name: 'Ethan', grade: 4, sex: 'M'},
                {name: 'Paula', grade: 18, sex: 'F'},
                {name: 'Donald', grade: 5, sex: 'M'},
                {name: 'Jennifer', grade: 13, sex: 'F'},
                {name: 'Courtney', grade: 15, sex: 'F'},
                {name: 'Jane', grade: 9, sex: 'F'}
            ]
            
            
        //     Tìm thứ hạng trung bình của cả lớp
        //     Tìm thứ hạng trung bình của nam trong lớp 
        //     Tìm thứ hạng trung bình của Nữ trong lớp 
        //     Tìm thứ hạng cao nhất của Nam trong lớp 
        //     Tìm thứ hạng cao nhất của Nữ trong lớp
        //     Tìm thứ hạng thấp nhất của Nam trong lớp 
        //     Tìm thứ hạng thấp nhất của Nữ trong lớp 
        //     Tìm thứ hạng cao nhất của cả lớp 
        //     Tìm thứ hạng thấp nhất của cả lớp 
            