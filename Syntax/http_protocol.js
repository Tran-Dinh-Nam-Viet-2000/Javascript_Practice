/**
 * HTTP là HypeText Transfer Protocol (Giao thức chuyển giao siêu văn bản, nghĩa là request 1 URL đến back-end và hiển thị thông tin,link lên website)
 * HTTP gồm có các thành phần như Status-Line, Headers, Body (Đối với GET, DELETE thì không cần truyền Body vì DELETE truyền ID qua URL rồi)
 * Các lỗi trong HTTP:
 *      + 1xx: Request đã được nhận và đang xử lý
 *      + 2xx: Thành công
 *      + 3xx: Sự điều hướng lại (Nó nghĩa là hoạt động phải được thực hiện để hoàn thành yêu cầu)
 *      + 4xx: Lỗi phía client (1 request trên máy tính, điện thoại không hợp lệ)
 *      + 5xx: Lỗi ở server (Database, máy server)
 *      - Các lỗi phổ biến:
            200 OK
            201 Created
            204 No Content
            400 Bad Request
            401 Unauthorized
            403 Forbidden
            404 Not Found
            500 Internal Server Error

 * Ví dụ 1 HTTP:
        //Status-line
        POST /users HTTP/1.1 -> POST là method, /users là endpoint, HTTP/1.1 là version của giao thức
        //Headers
        Host: localhost:3000 -> Cho server biết domain là gì, hay còn gọi là URL của website
        Content-Type: application/json -> Gửi cho server biết body là json
        Content-Length: 27 -> Server biết đọc bao nhiêu byte
        Authorization: Bearer abc123 -> Token để xác thực
        //Body
        {"name":"Viet","age":25}

 * Ví dụ 1 HTTP khi dùng fetch:
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: "Viet", age: 25 })
        })
 */