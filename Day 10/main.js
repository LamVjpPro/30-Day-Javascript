// create an empty set
        const set = new Set()

        // console.log(set)
// Create a set containing 0 to 10 using loop
        for (let i = 0; i <= 10; i++) {
            set.add(i)
        }

        console.log(set)
// Remove an element from a set
        // set.delete(4)
// Clear a set
        // set.clear()
// Create a set of 5 string elements from array

// Create a map of countries and number of characters of a country
        
const countries = ['Viet Nam', 'USA', 'Korea', 'Brazil', 'Japan'];

const countryLengthMap = new Map();

for (let country of countries) {
  countryLengthMap.set(country, country.length);
}

console.log(countryLengthMap);