let btn = document.querySelector("button");
    btn.addEventListener("click", function () {

      let color = generate();
      let heading = document.querySelector("h1");
      heading.innerText = color;
      heading.style.color = color;

      let div = document.querySelector("div");
      div.style.backgroundColor = color;
    })

    function generate() {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);

      let color = `rgb(${red},${green},${blue})`;

      return color;
    }
