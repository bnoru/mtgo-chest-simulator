function setup() {
  } 
  
  function preload() {
  }

  function openChest() {
    var isPP = floor(random(100));
    var whichPP = floor(random(2201));
    if (isPP < 35) {
      if (whichPP < 450) {
        playPoints = 15;
      } else if (whichPP< 900) {
        playPoints = 20;
      } else if (whichPP< 1350) {
        playPoints = 25;
      } else if (whichPP< 1600) {
        playPoints = 35;
      } else if (whichPP< 1900) {
        playPoints = 45;
      } else if (whichPP< 2100) {
        playPoints = 65;
      } else if (whichPP< 2150) {
        playPoints = 85;
      } else if (whichPP< 2200) {
        playPoints = 125;
      } else {
        playPoints = 1005;
      }}
    else {
      playPoints = 5;
    }
    var cardOne = floor(random(3));
    var cardTwo = floor(random(3));
    var cardThree = floor(random(3));
    console.log(cardOne)
    console.log(cardTwo)
    console.log(cardThree)
    console.log("")
    if (cardOne == 0) {
         document.getElementById("card1").style.backgroundImage = "url(mh1-217-wrenn-and-six.png)";
        } else if (cardOne == 1) {
          document.getElementById("card1").style.backgroundImage = "url(ltr-246-the-one-ring.png)";
        } else if (cardOne == 2) {
          document.getElementById("card1").style.backgroundImage = "url(2x2-50-force-of-negation.png)";
        }
    if (cardTwo == 0) {
          document.getElementById("card2").style.backgroundImage = "url(mh1-217-wrenn-and-six.png)";
         } else if (cardTwo == 1) {
           document.getElementById("card2").style.backgroundImage = "url(ltr-246-the-one-ring.png)";
         } else if (cardTwo == 2) {
           document.getElementById("card2").style.backgroundImage = "url(2x2-50-force-of-negation.png)";
         }
    if (cardThree == 0) {
          document.getElementById("card3").style.backgroundImage = "url(mh1-217-wrenn-and-six.png)";
         } else if (cardThree == 1) {
           document.getElementById("card3").style.backgroundImage = "url(ltr-246-the-one-ring.png)";
         } else if (cardThree == 2) {
           document.getElementById("card3").style.backgroundImage = "url(2x2-50-force-of-negation.png)";
         }
    document.getElementById("playPoints").innerHTML = playPoints;
    document.getElementById("added").style.display = "block";
    var items = playPoints + 3;
    document.getElementById("itemsAdded").innerHTML = items + " new items";
  }

 