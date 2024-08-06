
fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
.then(response=>response.json())
.then(data => {
    const newsList = document.getElementById("newsList") 
    data.items.forEach(item=> {
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const h5 = document.createElement('h5')
        const a= document.createElement('a')
        h2.textContent = item.title;
        h5.textContent=item.author;
        a.textContent = "Read More"
        a.href = item.link;
        a.target = '_blank'

        li.appendchild(h2)
        li.appendChild(document.createTextNode(item.description))
        li.appendChild(h5)
        li.appendChild(a)
        newsList.appendChild(li)
    });
});
