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