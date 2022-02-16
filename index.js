window.onload = () => {
    main()
}

function main() {
  const bodyColor = document.getElementById("bg-color");
  const btn = document.getElementById("color-btn");

  btn.addEventListener('click', function() {
      const rgbaColorCode = colorGenerator();
      bodyColor.style.backgroundColor = rgbaColorCode;
      const rgbaColorCodeForBtn = colorGeneratorForButton()
      btn.style.backgroundColor = rgbaColorCodeForBtn;
      const rgbaColorCodeForBtnFont = colorGeneratorForButtonFont()
      btn.style.color = rgbaColorCodeForBtnFont;
  })
}

function colorGenerator() {
    const red = Math.floor(Math.random() *  255);
    const green = Math.floor(Math.random() *  255);
    const blue = Math.floor(Math.random() *  255);
    return `rgba(${red}, ${green}, ${blue})`
}

function colorGeneratorForButton() {
    const red = Math.floor(Math.random() *  255);
    const green = Math.floor(Math.random() *  255);
    const blue = Math.floor(Math.random() *  255);
    return `rgba(${red}, ${green}, ${blue})`
}

function colorGeneratorForButtonFont() {
    const red = Math.floor(Math.random() *  255);
    const green = Math.floor(Math.random() *  255);
    const blue = Math.floor(Math.random() *  255);
    return `rgba(${red}, ${green}, ${blue})`
}