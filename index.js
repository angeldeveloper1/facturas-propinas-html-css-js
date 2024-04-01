window.addEventListener("keyup", (event) => {
  var dollars = document.getElementById("dollars").value;
  var percent = document.getElementById("percent").value / 100;

  document.getElementById("tips").value = "$"+dollars * percent;
  document.getElementById("total-tips").value = "$" + (parseFloat(dollars) + (dollars * percent));
});






