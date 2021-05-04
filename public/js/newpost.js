const title = document.querySelector('input[name="post-title"]').value;
const body = document.querySelector('textarea[name="post-body"]').value;

const newPost = async (event) => {
  event.preventDefault();

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document.querySelector("#new-post-form").addEventListener("submit", newPost);
