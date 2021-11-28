const fs = require('fs')
const path = require('path')

//File System
// fs.mkdir(path.join(__dirname, 'notes'), err => { //создание папки
//     if (err) throw err

//     console.log('Папка была создана')
// })

// fs.writeFile( //создание файла в указанной папке
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')

//         fs.appendFile( //добавление данных в файл
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')

//             fs.readFile( 
//                 path.join(__dirname, 'notes', 'mynotes.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err
//                     console.log(data)
//                 }
//               )
//             }
//         )
//     }
// )

// fs.rename( //переименование указанного файла
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err

//         console.log('Файл переименован')
//     }
// )

// fs.mkdir(path.join(__dirname, 'test'), err => { //создание папки
//         if (err) throw err
    
//         console.log('Папка test была создана')
//     })

// fs.writeFile( //создание файла в указанной папке
//         path.join(__dirname, 'test', 'test.txt'),
//         'SKTVp20',
//         (err) => {
//                 if (err) throw err
//                 console.log('Файл test был создан')

// fs.appendFile( //добавление данных в файл
//             path.join(__dirname, 'test', 'test.txt'),
//             ' 2021',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')

//             fs.readFile( 
//                 path.join(__dirname, 'test', 'test.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err
//                     console.log(data)
//                 }
//               )
//             }
//         )
//     }
// )

fs.rename( //переименование указанного файла
        path.join(__dirname, 'test', 'test.txt'),
        path.join(__dirname, 'test', 'SKTVp20.txt'),
        err => {
            if (err) throw err
    
            console.log('Файл переименован')
        }
    )
