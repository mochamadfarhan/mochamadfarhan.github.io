function SendEmail() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_74yu73q", "template_a667x57", params).then(function (res) {
    alert("Sent!");
  });
}
