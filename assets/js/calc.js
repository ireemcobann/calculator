const sliderInput = document.querySelector(".slider");
console.log(sliderInput);
const body = document.body;

sliderInput.addEventListener("input", function () {
  // body.classList.add("darkTheme");
  body.classList.remove("theme1", "theme2", "theme3");
  console.log(body.value);

  if (sliderInput.value === "1") {
    body.classList.add("theme1");
  } else if (sliderInput.value === "2") {
    body.classList.add("theme2");
  } else if (sliderInput.value === "3") {
    body.classList.add("theme3");
  }
});

const resultText = document.querySelector(".resultText");

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

for (const button of buttons) {
  button.addEventListener("click", numBtn);
}

function numBtn() {
  console.log(this.innerText);
  resultText.innerText += this.innerText;
}

const del = document.querySelector("#delete");
// const topla = document.querySelector('#topla');
// const cikart = document.querySelector('#cikart');
// const carpma = document.querySelector('#carpma');
// const bölme = document.querySelector('#bölme');
// const nokta = document.querySelector('#nokta');
const reset = document.querySelector("#reset");
const esit = document.querySelector("#esit");

reset.addEventListener("click", handleReset);

function handleReset() {
  resultText.innerText = "";
}

del.addEventListener("click", handleDelete);

function handleDelete() {
  resultText.innerText = resultText.innerText.substring(0 , resultText.innerText.length - 1);
}

// EVAL is evil
// eğer hesap makinesi yapmıyorsanız eval den kaçın!!!!!


document.querySelector('.btn-calculate').addEventListener('click' , handleCalculate);

function handleCalculate () {
    try {
        // console.log(resultText.innerText)
        resultText.innerText = eval(resultText.innerText);
    }catch {
        alert('eksik işlem var');
    }
   
}
