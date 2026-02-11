/**
 * Fetch dùng để call API từ backend
 * Fetch sẽ tạo ra 1 promise
 */

// const { error } = require("node:console");

/** Ví dụ 1: Lấy 1 API fake và hiển thị thông tin lên màn hình
const responseApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(responseApi)
    .then(response => response.json())
    .then(datas => {
        var htmls = datas.map(function(data, index) {
            if (index < 5) {
                return `<li>
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                </li>`;
            }

        });

        document.getElementById('posts-title').innerHTML = htmls;
    });
 */

/** Ví dụ 2: CRUD with car (using json-server)
 // Trỏ vào path db.json và chạy lệnh "json-server --watch db.json"
 
 */
const responseApi = 'http://localhost:3000/cars';

function Start(){
    getCars(renderData);
}

Start();

function getCars(callback){
    fetch(responseApi).then(function(response) {
        return response.json();
    }).then(callback)
    .catch(error => alert(error));
}

function renderData(cars){
    var htmls = cars.map(function(element){
            return `<li> ${element.name} : ${element.price}
                <button onclick="UpdateCar(${element.id},'${element.name}', ${element.price})">Update</button>
                <button onclick="DeleteCar(${element.id})">Delete</button>
            </li>
            <br>`;
        });
    document.getElementById('list-cars').innerHTML = htmls.join('');
}

function CreateCar(){
    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', function(){
        const valueName = document.querySelector('#input-name').value;
        const valuePrice = document.querySelector('#input-price').value;
        const formData = {
            name: valueName,
            price: valuePrice,
        }
        const option = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }
        fetch(responseApi, option).then(response => { return response.json(); })
        .then(function() { getCars(renderData) });
    });
}
CreateCar();

function DeleteCar(id){
    const responseApiDelete = `http://localhost:3000/cars/${id}`;
    const option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    }
    fetch(responseApiDelete, option).then(function(response) {return response.json()})
    .then(function(){ getCars(renderData) });
}

let updateId;

function UpdateCar(id, name, price){
    updateId = id;
    console.log(updateId);
    document.querySelector('#input-name').value = name;
    document.querySelector('#input-price').value = price;
    document.querySelector('#btn-save-update').style.display = 'block';
    document.querySelector('#btn-submit').style.display = 'none';
}

function SaveUpdate(){
    if(updateId === undefined) return alert('Not found car!!');
    const responseApiDelete = `http://localhost:3000/cars/${updateId}`;
    const newName = document.querySelector('#input-name').value;
    const newPrice = document.querySelector('#input-price').value;
    const updateData = {
        name: newName,
        price: newPrice
    };
    const option = {
        method: 'PUT',
        headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(updateData)
    }
    fetch(responseApiDelete, option)
    .then(response => {return response.json()})
    .then(function() {getCars(renderData)});
}