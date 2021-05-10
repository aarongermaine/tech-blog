const username = document.querySelector("#username-input-login");
const password = document.querySelector("#password-input-login");

const login = async function (event) {
  event.preventDefault();

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dash");
  } else {
    alert("Failed to login");
  }
};

document.querySelector("#login-form").addEventListener("submit", login);
