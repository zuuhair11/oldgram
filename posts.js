class Posts {
    constructor() {

    }


    async getPosts() {
        const response = await fetch('posts.json');
        const data     = await response.json();
        
        return data;
    }
}