play_btn = document.querySelector(".play-btn");

result = document.querySelector(".result");

dice1_1 = document.querySelector(".dice1-1");
dice1_2 = document.querySelector(".dice1-2");
dice1_3 = document.querySelector(".dice1-3");
dice1_4 = document.querySelector(".dice1-4");
dice1_5 = document.querySelector(".dice1-5");
dice1_6 = document.querySelector(".dice1-6");
dice1_7 = document.querySelector(".dice1-7");
dice1_8 = document.querySelector(".dice1-8");
dice1_9 = document.querySelector(".dice1-9");

dice2_1 = document.querySelector(".dice2-1");
dice2_2 = document.querySelector(".dice2-2");
dice2_3 = document.querySelector(".dice2-3");
dice2_4 = document.querySelector(".dice2-4");
dice2_5 = document.querySelector(".dice2-5");
dice2_6 = document.querySelector(".dice2-6");
dice2_7 = document.querySelector(".dice2-7");
dice2_8 = document.querySelector(".dice2-8");
dice2_9 = document.querySelector(".dice2-9");

play_btn.addEventListener("click", () => {
  const random_val1 = Math.floor(Math.random() * 5);
  const random_val2 = Math.floor(Math.random() * 5);
  if (random_val1 > random_val2) {
    result.innerText = "Player1 Wins!";
    console.log(random_val1+1, random_val2+1);
  } else if (random_val1 < random_val2) {
    result.innerText = "Player2 Wins!";
    console.log(random_val1+1, random_val2+1);
  } else {
    result.innerText = "Draw!";
    console.log(random_val1+1, random_val2+1);
  }
  if (random_val1 == 0) {
    dice1_5.style.visibility = "visible";
    dice1_3.style.visibility = "hidden";
    dice1_7.style.visibility = "hidden";
    dice1_1.style.visibility = "hidden";
    dice1_9.style.visibility = "hidden";
    dice1_4.style.visibility = "hidden";
    dice1_6.style.visibility = "hidden";
  } else if (random_val1 == 1) {
    dice1_5.style.visibility = "hidden";
    dice1_3.style.visibility = "hidden";
    dice1_7.style.visibility = "hidden";
    dice1_1.style.visibility = "visible";
    dice1_9.style.visibility = "visible";
    dice1_4.style.visibility = "hidden";
    dice1_6.style.visibility = "hidden";
  } else if (random_val1 == 2) {
    dice1_5.style.visibility = "visible";
    dice1_3.style.visibility = "hidden";
    dice1_7.style.visibility = "hidden";
    dice1_1.style.visibility = "visible";
    dice1_9.style.visibility = "visible";
    dice1_4.style.visibility = "hidden";
    dice1_6.style.visibility = "hidden";
  } else if (random_val1 == 3) {
    dice1_5.style.visibility = "hidden";
    dice1_3.style.visibility = "visible";
    dice1_7.style.visibility = "visible";
    dice1_1.style.visibility = "visible";
    dice1_9.style.visibility = "visible";
    dice1_4.style.visibility = "hidden";
    dice1_6.style.visibility = "hidden";
  } else if (random_val1 == 4) {
    dice1_5.style.visibility = "visible";
    dice1_3.style.visibility = "visible";
    dice1_7.style.visibility = "visible";
    dice1_1.style.visibility = "visible";
    dice1_9.style.visibility = "visible";
    dice1_4.style.visibility = "hidden";
    dice1_6.style.visibility = "hidden";
  } else if (random_val1 == 5) {
    dice1_5.style.visibility = "hidden";
    dice1_3.style.visibility = "visible";
    dice1_7.style.visibility = "visible";
    dice1_1.style.visibility = "visible";
    dice1_9.style.visibility = "visible";
    dice1_4.style.visibility = "visible";
    dice1_6.style.visibility = "visible";
  }
  if (random_val2 == 0) {
    dice2_5.style.visibility = "visible";
    dice2_3.style.visibility = "hidden";
    dice2_7.style.visibility = "hidden";
    dice2_1.style.visibility = "hidden";
    dice2_9.style.visibility = "hidden";
    dice2_4.style.visibility = "hidden";
    dice2_6.style.visibility = "hidden";
  } else if (random_val2 == 1) {
    dice2_5.style.visibility = "hidden";
    dice2_3.style.visibility = "hidden";
    dice2_7.style.visibility = "hidden";
    dice2_1.style.visibility = "visible";
    dice2_9.style.visibility = "visible";
    dice2_4.style.visibility = "hidden";
    dice2_6.style.visibility = "hidden";
  } else if (random_val2 == 2) {
    dice2_5.style.visibility = "visible";
    dice2_3.style.visibility = "hidden";
    dice2_7.style.visibility = "hidden";
    dice2_1.style.visibility = "visible";
    dice2_9.style.visibility = "visible";
    dice2_4.style.visibility = "hidden";
    dice2_6.style.visibility = "hidden";
  } else if (random_val2 == 3) {
    dice2_5.style.visibility = "hidden";
    dice2_3.style.visibility = "visible";
    dice2_7.style.visibility = "visible";
    dice2_1.style.visibility = "visible";
    dice2_9.style.visibility = "visible";
    dice2_4.style.visibility = "hidden";
    dice2_6.style.visibility = "hidden";
  } else if (random_val2 == 4) {
    dice2_5.style.visibility = "visible";
    dice2_3.style.visibility = "visible";
    dice2_7.style.visibility = "visible";
    dice2_1.style.visibility = "visible";
    dice2_9.style.visibility = "visible";
    dice2_4.style.visibility = "hidden";
    dice2_6.style.visibility = "hidden";
  } else if (random_val2 == 5) {
    dice2_5.style.visibility = "hidden";
    dice2_3.style.visibility = "visible";
    dice2_7.style.visibility = "visible";
    dice2_1.style.visibility = "visible";
    dice2_9.style.visibility = "visible";
    dice2_4.style.visibility = "visible";
    dice2_6.style.visibility = "visible";
  }
});
