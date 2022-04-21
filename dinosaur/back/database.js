const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'Test', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'Test@gmail.com' },
        { id: 2, username: 'Test1', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa', email: 'Test1@gmail.com' },
    ]
}
const products = [
    {id: 1,productsname:'Apatosaurus',discription:'อะแพโทซอรัส เป็นไดโนเสาร์สายพันธุ์กินพืช สัตว์ยุคหินขนาดใหญ่เท่ารถโรงเรียน 2 คัน น้ำหนัก 35 ตันเทียบเท่าช้างแอฟริกัน 4 ตัว',price: 60,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Apatosaurus.jpg'},
    {id: 2,productsname:'Triceratops',discription:'ไดโนเสาร์สามเขาไม่ดุร้าย แต่เมื่อมีถัยอันตรายก็พร้อมที่จะพุ่งชน สามารถวิ่งด้วยความเร็ว 35 ไมล์/ชั่วโมง',price: 70,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Triceratops.jpg'},
    {id: 3,productsname:'Stegosaurus',discription:' ไดโนเสาร์สายตั้งรับหนัก 5 ตัน มีนิสัยอยู่รวมกันเป็นกลุ่มเพื่อป้องกันภัย สเตโกซอรัส นั้นมีแผงเกล็ด พร้อมด้วยหนามแหลมบริเวณหาง',price: 80,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Stegosaurus.jpg'},
    {id: 4,productsname:'Tyrannosaurus Rex',discription:'ราชาแห่งไดโนเสาร์ขนาด 9 ตัน ยาวขนาด 40 ฟุต น่าเกรงขาม',price: 180,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/TyrannosaurusRex.jpg'},
    {id: 5,productsname:'Ankylosaurus',discription:'ไดโนเสาร์กินพืชที่มีแท่งหนามขนาดใหญ่รอบลำตัวคล้ายกระดองฉายาว่า รถถังที่มีชีวิต/เต่ายุคก่อนประวัติศาสตร์',price: 80,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Ankylosaurus.jpg'},
    {id: 6,productsname:'Pteranodon',discription:'ความกว้างจากปีก 20 ฟุต จัดอยู่ในหมวดกินพืชแต่ก็ล่าปลาเป็นอาหารหลัก แถมนิสัยยังเกรี้ยวกราดดุร้าย',price: 80,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Pteranodon.jpg'},
    {id: 7,productsname:'Velociraptor',discription:'นักล่าขนาดตัวเท่ามนุษย์ที่พร้อมโจมตี ทั้งความเร็วในการวิ่งก็ไม่เป็นสองรองใคร แถมยังฉลาดหลักแหลมจนขึ้นชื่อว่าเป็นนักฆ่าที่น่าเกรงขามอันดับต้น ๆ',price: 90,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Velociraptor.jpg'},
    {id: 8,productsname:'Baryonyx',discription:'ขนาดกระโหลกแคบ รูปกรามที่ยาวของมันเต็มไปด้วยฟันรูปกรวย',price: 80,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Baryonyx.jpg'},
    {id: 9,productsname:'Stygimoloch',discription:'มีขนาดกระโหลกที่ใหญ่ และมีโดมบนหัวนั้นมีขนาดเล็ก',price: 85,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Stygimoloch_1.jpg'},
    {id: 10,productsname:'Carnotaurus',discription:'อสูรร้ายหนัก 2 ตัน มีสองเขาขนาดใหญ่บนหัวและหนามสั้นรอบบริเวณหลัง',price: 80,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Carnotaurus.jpg'},
        ]
let carts = [
    {id: 1,productsname:'Apatosaurus',discription:'อะแพโทซอรัส เป็นไดโนเสาร์สายพันธุ์กินพืช สัตว์ยุคหินขนาดใหญ่เท่ารถโรงเรียน 2 คัน น้ำหนัก 35 ตันเทียบเท่าช้างแอฟริกัน 4 ตัว',price: 60,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/Apatosaurus.jpg',
    amount:3,userid:2},
    {id: 2,productsname:'Tyrannosaurus Rex ',discription:'ราชาแห่งไดโนเสาร์',price: 180,imageurl:'https://img.kapook.com/u/2018/pailin_p/994Movies/TyrannosaurusRex.jpg',
    amount:4,userid:2}

]
const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND
exports.products = products
exports.carts = carts
exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}
