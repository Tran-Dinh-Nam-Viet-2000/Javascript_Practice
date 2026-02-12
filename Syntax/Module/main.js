/**
 * 1. Nếu ở export là "export default myFunction;" thì ở import chỉ được khai báo "import myFunction from "./math.js";", không được thêm {} chỗ myFunction
 * 2. Nếu ở export khai báo 1 const (export const AGE = 4;) thì ở import sẽ nhận dữ liệu đó trong dấu { } (Ví dụ: {AGE, MY_NAME})
 * 3. Ở import có thể đổi tên function default của export, không được đổi tên 1 const hoặc 1 function không phải default
 * 4. Ở export khai báo trong dấu {} thì import cũng phải trong {}, trừ export default thôi
 * 5. Ở import thì đổi tên bằng alias của const được (import {AGE as MY_AGE} from...)
 * 6. Ở export thì đổi tên bằng alias của const được (export {AGE as MY_AGE, NAME};) nhưng ở import phải trỏ đến alias của export chứ nếu trỏ đến AGE là lỗi
 */

import {MY_AGE, NAME as MY_NAME} from "./math.js";
import showMessage2 from "./math.js";
import {showName} from "./math.js";

showMessage2(1,2);
showName("Viet");

console.log(MY_AGE);
console.log(MY_NAME);