const slides = document.querySelector(".slides")

let i = 2;

function next() {

  resetAnimation();

  
  console.log(i);

  document.querySelector(`img:nth-child(${i})`).style.opacity = 0;
  if (i == 4) {
    i = 0;
  }
  console.log(i);
  i++;
  arr.push(i);
  if (arr.length > 2) arr.shift();

  console.log(i);

  document.querySelector(`img:nth-child(${i})`).style.opacity = 1;

  slides.classList.add("switch")
}

function previous() {

  resetAnimation();

  document.querySelector(`img:nth-child(${i})`).style.opacity = 0;
  if (i == 1) i = 5;
  i -= 1;
  arr.push(i)
  if (arr.length > 2) arr.shift();
  document.querySelector(`img:nth-child(${i})`).style.opacity = 1;

  slides.classList.add("switch")
}

const previousButton = document.querySelector("#previous")
const nextButton = document.querySelector("#next")

previousButton.addEventListener("click", () => {
  previous();

  document.getElementById(`${i}`).checked = true;
})

nextButton.addEventListener("click",  () => {
  next();

  console.log(i);
  document.getElementById(`${i}`).checked = true;
})

const arr = ["2"]

const radio = document.querySelectorAll(".radio")
radio.forEach(radio => {
  radio.addEventListener("click", () => {

    resetAnimation();

    console.log({i});
    console.log(radio.id)
    i = radio.id
    arr.push(radio.id)
    if (arr.length > 2) arr.shift();

    document.querySelector(`img:nth-child(${radio.id})`).style.opacity = 1;

    console.log(arr)
    document.querySelector(`img:nth-child(${arr[0]})`).style.opacity = 0;

    slides.classList.add("switch")
   
  })
})


function resetAnimation() {
  var el = document.querySelector(".slides");
  
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null; 
}






















