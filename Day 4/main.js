// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

    // let birthday = prompt('hãy nhập số tuổi của bạn')
    // let age = 18

    // if (birthday >= 18 ) {
    //     console.log('Bạn đã đủ tuổi học bằng lái')
    // } else {
    //     console.log('Bạn chưa đủ tuổi học bằng lái')
    // }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    let myAge = prompt('Nhap Tuoi Cua Minh: ');
    let yourAge = prompt('Nhap Tuoi Cua Ban: ');

    if (myAge > yourAge) {
        console.log('Toi hon tuoi ban')
    } else {
        console.log('Ban hon tuoi toi')
    }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    let a = 4
    let b = 3

    if (a > b) {
        console.log(`${a} lớn hơn ${b}`)
    } else {
        console.log(`${a} bé hơn ${b}`)
    }


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    // let number = prompt("Enter a number: ");


    if(number % 2 == 0) {
        console.log(`${number} Là số chẵn`);
    } else {
        console.log(`${number} Là số lẻ`);
    }
   