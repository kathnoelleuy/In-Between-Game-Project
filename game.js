var count = 1;
var score = 0;

const random_number = () => {
  //function that will randomize card 1 and card 2 values
  return Math.floor(1 + Math.random() * (20 - 1));
};

var card1 = (document.getElementById("card1").innerHTML = random_number());
var card2 = (document.getElementById("card2").innerHTML = random_number());
var card3 = (document.getElementById("card3").innerHTML = "?");
var rounds = document.getElementById("round");
var scores = document.getElementById("score");
var result = document.getElementById("status");
var deal = document.getElementById("deal");
var nodeal = document.getElementById("nodeal");
var higher = document.getElementById("higher");
var lower = document.getElementById("lower");
var next_round = document.getElementById("next_round");
var try_again = document.getElementById("try_again");
next_round.disabled = true;

const minusOne = () => {
  if (score == 0) {
    //if score is 0 then most likely it should not - 1 since its already 0
    scores.innerHTML = "Score: " + score;
  } else {
    scores.innerHTML = "Score: " + (score -=1); //else it will - 1 the score
  }
};

const minusOneHalf = () => {

  if (score == 0) {
    //if score is 0 then most likely it should not - 0.5 since its already 0
    scores.innerHTML = "Score: " + score;
  } else {
    scores.innerHTML = "Score: " + (score -= 0.5); //else it will - 0.5 the score
  }
};

if (card1 === card2) {
  deal.style.display = "none";
  nodeal.style.display = "none";
  lower.style.display = "inline-block";
  higher.style.display = "inline-block";
} else {
  deal.style.display = "inline-block";
  nodeal.style.display = "inline-block";
  lower.style.display = "none";
  higher.style.display = "none";
}

deal.onclick = () => {
  console.log("deal triggered");
  //function for onclick so when the user clicks the button deal this will run
  card3 = random_number();
  document.getElementById("card3").innerHTML = card3;

  if (card3 < card1 && card3 > card2) {
    result.innerHTML = `Nice! You won.The third card is: ${card3}`;
    scores.innerHTML = "Score: " + (score += 1);
  } else if (card3 < card2 && card3 > card1) {
    result.innerHTML = `Nice! You won. The third card is: ${card3}`;
    scores.innerHTML = "Score: " + (score += 1);
  } else {
    result.innerHTML = `Oh no! You lost. The third card is: ${card3}`;
    minusOne();
  }

  deal.style.display = "none";
  nodeal.style.display = "none";
  next_round.disabled = false;
};

nodeal.onclick = () => {
  console.log("nodeal triggered");

  card3 = random_number();
  document.getElementById("card3").innerHTML = card3;
  minusOneHalf();
  result.innerHTML = `No Deal! The third card is: ${card3}`;

  deal.style.display = "none";
  nodeal.style.display = "none";
  next_round.disabled = false;
};

  higher.onclick = () => {
  console.log("higher triggered");

  card3 = random_number();
  document.getElementById("card3").innerHTML = card3;

  if (card3 > card1 && card3 > card2) {
    result.innerHTML = `Nice! You won.The third card is: ${card3}`;
    scores.innerHTML = "Score: " + (score += 1);
  } else if (card3 == card1 && card3 == card2) {
    result.innerHTML = `Oh no! You lost. The third card is: ${card3}`;
    minusOne();
  } else {
    result.innerHTML = `Oh no! You lost. The third card is: ${card3}`;
    minusOne();
  }
  lower.style.display = "none";
  higher.style.display = "none";
  next_round.disabled = false;
};

lower.onclick = () => {
  console.log("lower triggered");

  card3 = random_number();
  document.getElementById("card3").innerHTML = card3;

  if (card3 < card1 && card3 < card2) {
    result.innerHTML = `Nice! You won.The third card is: ${card3}`;
    scores.innerHTML = "Score: " + (score += 1);
  } else if (card3 == card1 && card3 == card2) {
    result.innerHTML = `Oh no! You lost. The third card is: ${card3}`;
    minusOne();
  } else {
    result.innerHTML = `Oh no! You lost. The third card is: ${card3}`;
    minusOne();
  }
  lower.style.display = "none";
  higher.style.display = "none";
  next_round.disabled = false;
};

//Next Button
next_round.onclick = () => {
  console.log("next triggered");
  console.log(count);

  if (count == 5) {
    next_round.style.display = "none";
  } else {
    card1 = random_number();
    card2 = random_number();
    document.getElementById("card1").innerHTML = card1;
    document.getElementById("card2").innerHTML = card2;
    document.getElementById("card3").innerHTML = "?";

    if (card1 === card2) {
      deal.style.display = "none";
      nodeal.style.display = "none";
      lower.style.display = "inline-block";
      higher.style.display = "inline-block";
    } else {
      deal.style.display = "inline-block";
      nodeal.style.display = "inline-block";
      lower.style.display = "none";
      higher.style.display = "none";
    }
    next_round.disabled = true;
    result.innerHTML = "";
    count++;
    rounds.innerHTML = "Round: " + count;
  }
};

//Try_Again 
try_again.onclick = () => {
  score = 0;
  count = 1;
  rounds.innerHTML = "Round: " + count;
  scores.innerHTML = "Score: " + score;
  next_round.disabled = true;
  next_round.style.display = "inline-block";
  result.innerHTML = "";
  card1 = random_number();
  card2 = random_number();
  document.getElementById("card1").innerHTML = card1;
  document.getElementById("card2").innerHTML = card2;
  document.getElementById("card3").innerHTML = "?";
  if (card1 === card2) {
    deal.style.display = "none";
    nodeal.style.display = "none";
    lower.style.display = "inline-block";
    higher.style.display = "inline-block";
  } else {
    deal.style.display = "inline-block";
    nodeal.style.display = "inline-block";
    lower.style.display = "none";
    higher.style.display = "none";
  }
}