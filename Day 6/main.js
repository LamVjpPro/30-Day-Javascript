// Iterate 0 to 10 using for loop, do the same using while and do while loop
        // for (let i = 0; i <= 10; i++) {
        //     console.log(i)
        // }

        // let i = 0
        //     do {
        //         console.log(i)
        //         i++
        //     } while (i <= 10)
// Iterate 10 to 0 using for loop, do the same using while and do while loop
        // for (let i = 10; i >= 0; i--) {
        //     console.log(i)
        // }

        // let i = 10
        // do {
        //     console.log(i)
        //     i--
        // } while (i >= 0)
// Iterate 0 to n using for loop
        // let n = 10
        // for(let i = 0; i <= n; i++) {
        //     console.log(i)
        // }
// Write a loop that makes the following pattern using console.log():
                    // #
                    // ##
                    // ###
                    // ####
                    // #####
                    // ######
                    // #######
                    // khong biet lam
// Use loop to print the following pattern:
                // 0 x 0 = 0
                // 1 x 1 = 1
                // 2 x 2 = 4
                // 3 x 3 = 9
                // 4 x 4 = 16
                // 5 x 5 = 25
                // 6 x 6 = 36
                // 7 x 7 = 49
                // 8 x 8 = 64
                // 9 x 9 = 81
                // 10 x 10 = 100
            // for (let i = 0; i <= 10; i++) {
            //     console.log(`${i} * ${i} = ${i * i}`)
            // }
// Using loop print the following pattern

                // 0    0     0
                // 1    1     1
                // 2    4     8
                // 3    9     27
                // 4    16    64
                // 5    25    125
                // 6    36    216
                // 7    49    343
                // 8    64    512
                // 9    81    729
                // 10   100   1000
            // for (let i = 0; i <= 10; i++) {
            //     console.log(`${i}\t${i**2}\t${i**3}`)
            // }
// Use for loop to iterate from 0 to 100 and print only even numbers

            // for (let i = 0; i <= 100; i++) {
            //     if (i % 2 == 0) {
            //         console.log(i)
            //     }
            // }
// Use for loop to iterate from 0 to 100 and print only odd numbers

            // for (let i = 0; i <= 100; i++) {
            //     if (i % 2 == 0) {
                    
            //     } else {
            //         console.log(i)
            //     }
            // }
// Use for loop to iterate from 0 to 100 and print only prime numbers
        // khong biet lam
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

        // let sum = 0
        // for (let i = 0; i <= 100; i++) {
        //     if (true) {
        //         sum += i
        //         console.log(sum)
        //     }
        // }
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

            // let sumC = 0
            // let sumL = 0

        // for (let i = 0; i <= 100; i++) {
        //     if (i % 2 == 0) {
        //         sumC += i
        //     } else {
        //         sumL += i
        //     }
        // }
        // console.log(`Tổng các số chẵn từ 0 đến 100 là: ${sumC}\t Tổng các số lẻ từ 0 đến 100 là: ${sumL}`)
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

        // const arayC = [];

        // for (let i = 0; i <= 100; i++) {
        //     if (i % 2 == 0) {
        //         sumC += i
        //     } else {
        //         sumL += i
        //     }
            
        // }
        
        // arayC.push(sumC, sumL)
        
        // console.log(arayC)
// Develop a small script which generate array of 5 random numbers

    // const ramdomArray = Array(5).fill().map(() => Math.floor(Math.random() * 10));

    // console.log(ramdomArray)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

        // const arr = [];
        // while(arr.length < 5) {
        //     let r = Math.floor(Math.random() * 10);
        //     if(arr.indexOf(r) === -1) {
        //         arr.push(r)
        //     }
        // }
        // console.log(arr);

    //     const arr = [];

    //    for (let i = 0; i <= arr.length; i++) {
    //         let r = Math.floor(Math.random() * 10)
    //         if (arr.indexOf(r) === -1) {
    //             arr.push(r)
    //         }
    //    }

    //    console.log(arr)
// Develop a small script which generate a six characters random id:

        // let random = Math.random().toString(36).substring(7);
        //     console.log(r);