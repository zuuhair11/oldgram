class UI {
    constructor() {
        this.main = document.querySelector('main')
    }

    showPosts(posts) {
        let postsResult = '';
        posts.forEach(function(post, index) {
            postsResult += `
                    <section class="header-section">
                        <img class="avatar-user" src="${post.avatar}" alt="">
                        <div>
                            <h2>${post.name}</h2>
                            <p>${post.location}</p>
                        </div>
                    </section>
                    
                    <article class="post">
                        <img class="post-img" src="${post.post}" alt="">
                    </article>
                    
                    <section class="section-icons">
                        <span id="post${index+1}"><img class="icon heart" src="images/icon-heart.png" alt=""></span>
                        <span><img class="icon" src="images/icon-comment.png" alt=""></span>
                        <span><img class="icon" src="images/icon-dm.png" alt=""></span>
                    </section>
                    <section class="likes-section">
                        <p class="likes"><span class="number-likes">${post.likes}</span> likes</p>
                    </section>
                    <section class="comments-section">
                        <p><span class="user-comment">${post.username} </span>${post.comment}</p>
                    </section>
                    <footer></footer>
            `;
        })
        this.main.innerHTML = postsResult;

        
        
    }
}