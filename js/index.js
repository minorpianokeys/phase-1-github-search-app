document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('github-form');
    const listContainer = document.querySelector('#user-list')
      
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    
        const input = e.target.search.value
        
        fetch(`https://api.github.com/search/users?q=${input}`, {
            headers: {
                "Accept": "application/vnd.github.v3+json" 
            }
        })
        .then(res => res.json())
        .then(function (data) {
            const users = data.items;
            for (i in users) {
                const username = users[i].login;
                const avatar = users[i].avatar_url;
                const link = users[i].html_url;
                const li = document.createElement('li')
                li.innerHTML = `
                <img src=${avatar}> <b id=user>${username}</b>: <a href=${link}>Visit Site</a>
                `
                listContainer.appendChild(li)

                
            }
            if (document.querySelector("#user")) {
                const user = document.querySelectorAll("#user")
                console.log(user[0])
                user[0].addEventListener('click', function () {
                    console.log(user[0].innerHTML)
                })
            }
        })







    })











})
