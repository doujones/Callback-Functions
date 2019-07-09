const posts = [
  { title: "post one", body: "this is one post" },
  { title: "post two", body: "this is two post" }
];

function createPost() {
  setTimeout(function() {
    posts.push(post);
  }, 3000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" });

getPosts();
