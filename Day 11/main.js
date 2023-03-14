const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Hủy cấu trúc và gán các phần tử của mảng hằng số cho e, pi,gravity, humanBodyTemp, waterBoilingTemp.

        // let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

        // console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// Hủy cấu trúc và gán các phần tử của mảng quốc gia cho fin, est, sw, den, nor

        // let [fin, est, sw, den, nor] = countries

        // console.log(fin, est, sw, den, nor)
// Hủy cấu trúc đối tượng hình chữ nhật bằng các thuộc tính hoặc khóa của nó.

        // let {width, height, area, perimeter} = rectangle

        // console.log(width, height, area, perimeter)

// Exercises: Level 2

// Lặp lại mảng người dùng và lấy tất cả các khóa của đối tượng bằng cách hủy

        // for (const {name, scores, skills, age} of users) {
        //     console.log(`Name: ${name}, Scores: ${scores}, Skills: ${skills}, Age: ${age}`)
        // }

// Tìm những người có ít hơn hai kỹ năng  

        // const twoSkills = users.filter(nguoi => nguoi.skills.length < 2)

        // console.log(twoSkills)

// Exercicses: Level 3

// Destructure the countries object print name, capital, population and languages of all countries

        // const countries = {
        //     Vietnamese: {
        //         name: 'Viet Nam',
        //         capital: 'Ha Noi',
        //         population: 97000000,
        //         languages: ['Tieng Viet'],
        //     },
        //     USA: {
        //       name: 'United States of America',
        //       capital: 'Washington, D.C.',
        //       population: 331449281,
        //       languages: ['English', 'Spanish'],
        //     },
        //     Brazil: {
        //       name: 'Brazil',
        //       capital: 'Brasília',
        //       population: 213993437,
        //       languages: ['Portuguese'],
        //     },
        //   };
        
        //   for (const [key, { name, capital, population, languages }] of Object.entries(countries)) {
        //     console.log(`${key}: Name: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(' - ')}`);
        //   }

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

        const student = {
            name: 'David',
            age: 25,
            skills: {
            frontEnd: [
                { skill: 'HTML', level: 10 },
                { skill: 'CSS', level: 8 },
                { skill: 'JS', level: 8 },
                { skill: 'React', level: 9 }
            ],
            backEnd: [
                { skill: 'Node',level: 7 },
                { skill: 'GraphQL', level: 8 },
            ],
            dataBase:[
                { skill: 'MongoDB', level: 7.5 },
            ],
            dataScience:['Python', 'R', 'D3.js']
            }
        }

        const newStudent = {
            ...student,    
            skills: {
                frontEnd: [
                    { skill: 'HTML', level: 10 },
                    { skill: 'CSS', level: 8 },
                    { skill: 'JS', level: 8 },
                    { skill: 'React', level: 9 },
                    { skill: 'BootStrap', level: 8}
                ],
                backEnd: [
                    { skill: 'Node',level: 7 },
                    { skill: 'GraphQL', level: 8 },
                    {skill: 'Express',level: 9}
                ],
                dataBase:[
                    { skill: 'MongoDB', level: 7.5 },
                    { skill: 'SQL',level: 8}
                ],
                dataScience:['Python', 'R', 'D3.js']
                }
        }

        // const newFontEnd = { skill: 'BootStrap', level: 8 }



        console.log(newStudent)