class BlogPost {
    title: string;
    content:string;

    constructor(title:string, content: string) {
        this.title = title;
        this.content = content;
    }
}

let blogPosts: BlogPost[] = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-post");
    let info = form["blogger-title"].value;
    let postBox = form["blogger-post"].value;

    blogPosts.push(new BlogPost(info, postBox));
    logPosts();
};

function logPosts() {

    var newTitle = document.createElement("h2");
    var newContent = document.createElement("p");
    var newDate = document.createElement("p");
    var dateFunc = new Date();
    var newDiv = document.createElement("div");
    var umbrellaElement = document.getElementsByClassName("container")[0];
        
        blogPosts.forEach(element => {

        var newContainer = umbrellaElement.appendChild(newDiv);

        newDate.innerHTML = dateFunc.toString();
        newContainer.insertBefore(newDate, newContainer.childNodes[0]);

        newContent.innerHTML=element.content;
        newContainer.insertBefore(newContent, newContainer.childNodes[0]);

        newTitle.innerHTML=element.title;
        newContainer.insertBefore(newTitle, newContainer.childNodes[0]);
    });
}