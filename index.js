
$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  //修改密码请改此处
  if (userName == "蔡仁慧" && pwd == "You will get better") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "https://cryandlove.github.io/crh1/";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
