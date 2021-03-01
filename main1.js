function colorChange() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
  
    var num = Math.floor(Math.random() * color.length);
    var action = document.getElementById("action");
    action.style.color = color[num];
  }