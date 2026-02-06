/** Bài tập về in lên màn hình 1 list khóa học từ 1 list data truyền vào
    const courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
    function render(courses){
        const getElement = document.querySelector('.courses-list');
        courses.forEach((value) => {
            getElement.innerHTML += `<li>${value}</li>`
        })
        const getElement = document.querySelector('.courses-list');
        const newCourse = courses.map((acc, currentValue) => {
            getElement.innerHTML += `<li>${acc}</li>`
        });

    }
    render(courses);
**/

/** DOM ELEMENT: ĐỊNH NGHĨA VÀ CÁCH KHAI BÁO VỀ DOM OBJECT, CÁCH LẤY 1 ELEMENT TRONG MÀN HÌNH
document.getElementById('idRandom') -> Chỉ được truyền duy nhất tên của id và lấy ra duy nhất 1 element

document.getElementsByClassName('randomName') -> Chỉ được truyền duy nhất tên của class, nếu nhiều class cùng tên thì lấy nhiều element

document.querySelector('div ul li.li2') -> Thẻ đến class
document.querySelector('.class1 .class2') -> Class đến class
document.querySelector('div li') ->  Chỉ có thẻ element thì chỉ lấy phần tử đầu tiên
document.querySelector('.li1') ->  Chỉ có 1 class thì chỉ lấy phần tử đầu tiên của class1

document.querySelectorAll -> cũng truyền param giống querySelector nhưng sẽ lấy ra nhiều element nếu trùng thẻ và trùng class
**/

/** DOM ATTRIBUTE
- document.querySelector('h1').setAttribute('href', 'heading1');
	+ Có thể set mới 1 attribute
	+ Có thể set attribute không thực sự có trong 1 element (ví dụ: href trong thẻ h1)
- document.querySelector('h1').getAttribute('class');
	+ Có thể get giá trị 1 attribute
=> Set và get có thể dùng trong các logic như set và get data (ví dụ: data-item:"")

//CÁCH GÁN ATTRIBUTE HỢP LỆ CHO ELEMENT (DOM CSS)
const getElement1 = document.querySelector('.box-1');
getElement1.style.width = '100px';
getElement1.style.height = '100px';
getElement1.style.backgroundColor = 'red';
 */

/** CLASSLIST IN ELEMENT
const getElement1 = document.querySelector('h1');
getElement1.classList.add('color_red'); //Add class
getElement1.classList.remove('color_red'); //Remove class
getElement1.classList.contains('color_red'); //Check contains class in element
getElement1.classList.replace('oldClass', 'newClass'); //Thay thế class cũ thành mới
setInterval(() => {
    getElement1.classList.toggle('color_red'); //Không có class thì thêm, đã có thì xóa class
}, 500);
 */

/**DOM EVENT
const buttons = document.querySelectorAll('button');
const pElement = document.querySelector('.text-p');
buttons.forEach((element, index) =>
{
    element.onclick = function(){
        pElement.setAttribute('class', `color${index + 1}`);
        pElement.textContent = `heading ${index + 1}`;
    }
});

// Có 2 cách cho sự kiện click vào button và đổi màu chữ button
// var button = document.querySelector('button');
// button.onclick = function(){
//     button.style.color = '#fff';
// };
// button.addEventListener('click', function(e){
//     e.target.style.color = '#fff';
// })

// Event onchange example
// const inputElement = document.querySelector("input[type='text']");
// inputElement.addEventListener('change', function(e){
//     console.log(e.target.value);
// })
// inputElement.onchange = function(){
//     console.log(inputElement.value)
// }

//Event oninput example (nhập đến đâu thì hiển thị value đến đó)
// const inputElement = document.querySelector("input[type='text']");
// inputElement.oninput = function(){
//     console.log(inputElement.value)
// }

//Event onchange example with checkbox
// const checkboxElement = document.querySelector("input[type='checkbox']");
// checkboxElement.addEventListener('change', function(e){
//     console.log(e.target.checked);
// });

//Event key up / key down / key press example
const inputElement = document.querySelector("input[type='text']");
// OnKeyUp là nhấc phím lên sẽ ăn value
// inputElement.onkeyup = function(e){
//     console.log(e.target.value);
// }
// inputElement.addEventListener('keyup', function(e){
//     console.log(e.target.value);
// })
// OnKeyDown là ấn phím xuống sẽ ăn value
// inputElement.onkeydown = function(e){
//     console.log(e.target.value);
// }
// OnKeyPress là giữ miết 1 nút thì sẽ hiển thị gấp bội value đó
// inputElement.onkeypress = function(e){
//     console.log(e.target.value);
// }
// Bài tập về khi nhấn nút "Escape" hoặc "Enter" thì sẽ hiển thị tương ứng
// inputElement.onkeyup = function(e){
//     switch(e.key){
//         case "Escape":
//             console.log("EXIT PROGRAMS");
//             break;
//         case "Enter":
//             console.log("SEND CHAT");
//             break;
//     }
// }
// document.onkeyup = function(e){
//     if(e.key == "Escape")
//     console.log("EXIT PROGRAMS");
// }

// Event preventDefault(); ngăn chặn hành vi mặc định của một thẻ, kiểu như thẻ "<a>" là dẫn đến 1 link nhưng mình không muốn dẫn đến link đó
// var aElements = document.links;
// for(let i = 0; i < aElements.length; i++){
//     aElements[i].addEventListener('click', function(e){
//         if(!aElements[i].href.startsWith("https://google.com.vn")){
//             e.preventDefault();
//         }
//     });
// }

// Event stopPropagation(); ngăn chặn hành vi nổi bọt, kiểu thẻ con nằm trong thẻ cha thì khi bấm vào thẻ con thì không hiển thị sự kiện thẻ cha
const divElement = document.querySelector('.testSubmit');
const buttonElement = document.querySelector('.testBtn');
divElement.onclick = function(e){
    console.log('Submit');
};
buttonElement.onclick = function(e){
    e.stopPropagation(); //Click là thẻ con của thẻ Submit, nên muốn click vào button thì chỉ hiển thị chữ "Click"
    console.log('Click');
}
*/