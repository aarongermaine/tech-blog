const signup = async function (event) {
  event.preventDefault();

  const user = document.querySelector("#username-input-signup");
  const pass = document.querySelector("#password-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: user.value,
      password: pass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dash");
  } else {
    alert("Failed to sign up");
  }
};

document.querySelector("#signup-form").addEventListener("submit", signup);
