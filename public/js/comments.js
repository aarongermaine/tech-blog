function addPost() {
  const post = document.querySelector('input[name="post"]').value;

  const body = document.querySelector('textarea[name="comment-body"]').value;

  return { body, post };
}

const commentPost = async function (event) {
  event.preventDefault();

  const { body, post } = addPost();

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post,
        body,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentPost);
