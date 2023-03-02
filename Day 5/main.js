// Declare an empty array;
    const array = [];
// Declare an array with more than 5 number of elements
    const array2 = [
        'Ngoc Rong Online',
        'Pubg Mobile',
        'Lien Quan Mobile',
        'Toc Chien',
        'Ban Sac Ninja'
    ];
// Find the length of your array
    const length = array2.length

    // console.log(length)
// Get the first item, the middle item and the last item of the array
    const firstItem = array2[0]
    const middleItem = array2[2]
    const lastItem = array2[4]

    // console.log(firstItem + ', ',middleItem + ', ',lastItem)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    const mixedDataTypes = [
        'JavaScript',
        0,
        null,
        {},
        function () {

        },
        undefined
    ]

    // console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    const itCompanies = [
        'FaceBook',
        'Google',
        'Microsoft',
        'Apple',
        'IBM',
        'Oracle',
        'Amazon'
    ];
// Print the array using console.log()
    console.log(itCompanies)
// Print the number of companies in the array
    console.log(itCompanies.length)
// Print the first company, middle and last company
    const first = itCompanies[0]
    const middle = itCompanies[3]
    const last = itCompanies[6]
// Print out each company
    // itCompanies.forEach((element) => {
    //     console.log(element)
    // })
// Change each company name to uppercase one by one and print them out
        itCompanies.forEach((element) => {
            console.log(element.toUpperCase())
        });
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
        const toString = itCompanies.toString()

        console.log(toString + ' ' + 'are big IT companies')
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
        if ('Apple') {
            console.log('Android')
        }
// Sort the array using sort() method
        // const arrange = itCompanies.sort()

        // console.log(arrange)
// Reverse the array using reverse() method
        // const reverse = itCompanies.reverse()

        // console.log(reverse)
// Slice out the first 3 companies from the array
        // console.log(itCompanies.splice(0, 3))
// Slice out the last 3 companies from the array
        // console.log(itCompanies.slice(1))
// Remove the first IT company from the array
        // const removeFirstIt = itCompanies.shift()

        // console.log(itCompanies)
// Remove the last IT company from the array
        // const removeLastIt = itCompanies.pop()

        // console.log(itCompanies)
// Remove all IT companies
        const removeAll = itCompanies.splice(0, 0)

        console.log(removeAll)

        