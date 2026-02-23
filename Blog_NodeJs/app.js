/**
 * Nếu đã dùng 'require'(commonjs) thì không dùng 'import'(ES Module) và ngược lại
 */

const express = require('express'); //import express
const path = require('path');
const app = express();
const { engine } = require('express-handlebars'); //import express-handlebars

app.use(express.static(path.join(__dirname, 'public'))); //Hiển thị ảnh

// Tạo engine
app.engine('hbs', engine({ extname: '.hbs' })); //Cho phép đổi đuôi file từ .handleBars(đuôi default) thành .hbs
// Sử dụng engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\views')); //Trỏ đến folder views


app.get('/', (req, res) => {
  res.render('home')
});

app.get('/news', (req, res) => {
  res.render('news')
});

app.listen(3000, () => {
  console.log("My website: http://localhost:3000/")
});