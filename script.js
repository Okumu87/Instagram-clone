const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container")

for (let i = 0; i < posts.length; i++) {
    container.innerHTML += `
    <section>
            <div class="user-info">
                <img class="user-avatar" src="${posts[i].avatar}">
                <div>
                    <p class="user-name">${posts[i].name}</p>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}">
            <div class="post-info">
                <div class="post-icons">
                    <img class="icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <p class="post-likes">${posts[i].likes} likes</p>
                <p class="post-comment"><span class="user-name">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </section>
    `
}

console.log(posts.length);