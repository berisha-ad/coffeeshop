async function getPosts() {
    try {
        const res = await fetch('./json/dummy.json');
        const data = await res.json();
        renderPosts(data);
    } catch (error) {
        throw new Error("Blogposts konnten nicht geladen werden");
    }
}


function renderPosts(data) {
    const grid = document.getElementById("blogGrid");
    data.forEach(element => {
        newText = trimText(element.text);
        grid.innerHTML += ` <div class="blog-card"><img class="blog-image border" src="${element.img}" alt="${element.title}">
                <h3 class="blog-heading">${element.title}</h3>
                <p>${newText}</p> </div> `
    });
}

function trimText(text) {
    textLength = 40;
    if (text.length > textLength){
        return text.split(' ').slice(0, textLength).join(' ') + '...';
    } else {
        return text;
    }
} 

getPosts();
