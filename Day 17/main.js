// Lưu trữ tên, họ, tuổi, quốc gia, thành phố của bạn trong localStorage của trình duyệt.
        // localStorage.setItem('fisrtName', 'Lam')
        // localStorage.setItem('lastName', 'Le Trong')
        // localStorage.setItem('age', 20)
        // localStorage.setItem('country', 'Viet Nam')
        // localStorage.setItem('city', 'Bac Giang')

        // const ten = localStorage.getItem('firtsName')
        // const ho = localStorage.getItem('lastName')
        // const tuoi = localStorage.getItem('age')
        // const quocgia = localStorage.getItem('country')
        // const thanhpho = localStorage.getItem('city')


        // console.log(`Tên của bạn là ${ten}, Họ của bạn là ${ho}, Tuổi của bạn là ${tuoi}, Quốc gia bạn đang ở là ${quocgia}, Thành phố bạn đang ở là ${thanhpho}`)

// Level 2:

// Tạo một đối tượng sinh viên. Đối tượng sinh viên sẽ có tên, họ, tuổi, kỹ năng, quốc gia, khóa đã đăng ký và giá trị cho khóa. Lưu trữ đối tượng sinh viên trong localStorage trình duyệt của bạn.

        const student = {
            firtsName: 'Lam',
            lastName: 'Le Trong',
            age: 20,
            skills: ['HTML', 'CSS', 'Javascript'],
            country: 'Viet Nam'
        }

        const studentJSON = JSON.stringify(student)

        localStorage.setItem('student', studentJSON)

        console.log(localStorage)