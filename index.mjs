import fs from 'fs'

fs.appendFile('my-file.txt', 'Файл создан Node.js', (err) => {
    if (err) throw err
    console.log('Файл сохранён успешно!')
})

setTimeout(() => console.log('Конец программы!'), 30000)
