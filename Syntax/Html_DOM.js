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

/** DOM Element: Định nghĩa và cách khai báo về DOM Object, cách lấy 1 element trong màn hình
document.getElementById('idRandom') -> Chỉ được truyền duy nhất tên của id và lấy ra duy nhất 1 element

document.getElementsByClassName('randomName') -> Chỉ được truyền duy nhất tên của class, nếu nhiều class cùng tên thì lấy nhiều element

document.querySelector('div ul li.li2') -> Thẻ đến class
document.querySelector('.class1 .class2') -> Class đến class
document.querySelector('div li') ->  Chỉ có thẻ element thì chỉ lấy phần tử đầu tiên
document.querySelector('.li1') ->  Chỉ có 1 class thì chỉ lấy phần tử đầu tiên của class1

document.querySelectorAll -> cũng truyền param giống querySelector nhưng sẽ lấy ra nhiều element nếu trùng thẻ và trùng class
**/

/** DOM Attribute
- document.querySelector('h1').setAttribute('href', 'heading1');
	+ Có thể set mới 1 attribute
	+ Có thể set attribute không thực sự có trong 1 element (ví dụ: href trong thẻ h1)
- document.querySelector('h1').getAttribute('class');
	+ Có thể get giá trị 1 attribute
=> Set và get có thể dùng trong các logic như set và get data (ví dụ: data-item:"")

//Cách gán attribute hợp lệ cho element (DOM CSS)
const getElement1 = document.querySelector('.box-1');
getElement1.style.width = '100px';
getElement1.style.height = '100px';
getElement1.style.backgroundColor = 'red';
 */