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

// rendering the posts to the page


function renderPost(){
const feed = document.getElementById("feed");
feed.innerHTML = "";

posts.forEach(function(post){
    feed.innerHTML += `   
    <section class="post" id="post">

                <div class="post-id">
                    <img class="avatar-account" src="${post.avatar}" alt="avatar-account">
                <div class="post-info">
                        <h2>${post.name}</h2>
                        <p>${post.location}</p>
                </div>
                </div>
            
                <div class="post-image">
                    <img src="${post.post}" alt="post-image">

            <div class="social-actions">
                    <img class="icon" id="like-btn" src="./images/icon-heart.png" alt="heart">
                    <img class="icon" id="comment-btn" src="./images/icon-comment.png" alt="comment-icon">
                    <img class="icon" id="dm-btn" src="./images/icon-dm.png" alt="share-icon">
            
            </div>
         <div >
                 <p class="likes">${post.likes}</p>
         </div>
         <div class="comment-section">
            <p class="username">${post.username}</p>
            <p class="comment">${post.comment}</p>
         </div>
            </div>
        
        
                
            </section>
`
 
})

}
renderPost();



// buttons 

const likeBtn = document.getElementById("like-btn")
const commentBtn = document.getElementById("comment-btn")
const dmBtn = document.getElementById("dm-btn")

const section = document.getElementById("post")



// event listeners


