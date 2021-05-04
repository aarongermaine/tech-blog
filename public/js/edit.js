const post = document.querySelector('input[name="post-id"]').value;
const title = document.querySelector('input[name="post-title"]').value;
const body = document.querySelector('textarea[name="post-body"]').value;

const edit = async (event) => {
  event.preventDefault();

  await fetch(`/api/post/${post}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const deletePost = async () => {
  await fetch(`/api/post/${post}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#edit-post-form").addEventListener("submit", edit);
document.querySelector("#delete-btn").addEventListener("click", deletePost);
