/** Lý thuyết
1. Mỗi khi .then() thì tức đang gọi 1 new Promise
2. .then() thứ 2 sẽ lấy data của then() đầu tiên nếu then() đầu tiên có data trả về
3. Promise có 3 trạng thái:
    - Pending: Trạng thái ban đầu (Initial state)
    - Fulfilled: Thao tác thành công (operation completed)
    - Reject: Thao tác thất bại (operation failed)
 */

// let a = 3, b = 4;
// const promise = new Promise(function(resolve, reject){
//     if(a + b == 7){
//         resolve("Exactly 1");
//     }
//     else {
//         reject("fail");
//     }
// });

// promise.then(function(){
//     console.log("Exaclty");
// }).catch(function(){
//     console.log("Fail");
// });

// promise.then(x => console.log(x))
//         .catch(x => console.log(x))

/** Ví dụ về 1 API dùng Promise
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy danh sách users");
      resolve([{ id: 1, name: "An" }]);
    }, 1000);
  });
}

function getUserDetail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy chi tiết user");
      resolve({ id: id, name: "An", age: 20 });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Lấy bài viết của user");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

// Promise chain
getUsers()
  .then(users => getUserDetail(users[0].id))
  .then(user => getPosts(user.id))
  .then(posts => console.log("Hoàn tất:", posts))
  .catch(err => console.error("Có lỗi:", err));
**/

const promise1 = new Promise(function(resolve){
    
    resolve(1);
    return 2;
});

const promise2 = new Promise(function(resolve){
    resolve(2);
});

Promise.all([promise1, promise2])
.then(([promise1, promise2]) => console.log(promise1 + promise2));
