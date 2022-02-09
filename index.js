if (localStorage.length > 0) divSuccessShow(localStorage.username);
else $("#btn-login").click(login);

function login() {
  const username = $("#input-username").val();
  const password = $("#input-password").val();

  if (username === "") {
    $("#input-username").css("border-color", "rgb(255, 0, 0)");
  } else if (password === "") {
    $("#input-password").css("border-color", "rgb(255, 0, 0)");
  } else {
    if (!checkUser(username, password)) {
      error("you user name or password is incorect");
    } else {
      divSuccessShow(username);
      localStorage.username = username;
    }
  }
}

function checkUser(username, password) {
  const users = {
    aron: "1234",
  };
  return users[username] === password;
}

function divSuccessShow(text) {
  $("#div-login").css("display", "none");
  $("#div-success").css("display", "block");
  $("#p-username").text("welcome for " + text);
}

function error(text) {
  $("#error").text(text);
}
