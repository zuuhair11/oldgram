// Instantiate a new objeect posts
const posts = new Posts();

// Instaniate a new object ui
const ui = new UI();

// When DOM Loaded I want to execute an event
window.addEventListener('DOMContentLoaded', function() {
    renderPosts();
})

function renderPosts() {
    posts.getPosts()
        .then(data => {
            ui.showPosts(data);
        })
}

// Listen to post likes 
// ...