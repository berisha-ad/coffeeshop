async function getPosts() {
    try {
        const res = await fetch('./json/dummy.json');
        const data = await res.json();
        console.log(data);
        data.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("blog-card");
            const grid = document.getElementById("blogGrid");
            grid.appendChild(div);
            const shorterText = element.text.split(' ').slice(0, 40).join(' ') + '...';
            div.innerHTML += ` <img class="blog-image border" src="${element.img}" alt="${element.title}">
                    <h3 class="blog-heading">${element.title}</h3>
                    <p>${shorterText}</p> `
        });
    } catch (error) {
        console.error(error);
    }
}

getPosts();