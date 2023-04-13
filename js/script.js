particlesJS.load('particles-js', 'configs/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// phone collection

var phonesEnabled = false;

if(document.location.href.endsWith("?phones=true"))
{
  phonesEnabled = true;
  phones.classList.remove("phones-disabled");
}

function togglePhones(){
  var phones = document.getElementById("phones");
  if (phonesEnabled){
    phones.classList.add("phones-disabled");
  }
  else {
    phones.classList.remove("phones-disabled");
  }
  phonesEnabled = !phonesEnabled;
}

//credits

var creditsEnabled = false;

if(document.location.href.endsWith("?credits=true"))
{
  creditsEnabled = true;
  credits.classList.remove("credits-disabled");
}

function toggleCredits(){
  var credits = document.getElementById("credits");
  if (creditsEnabled){
    credits.classList.add("credits-disabled");
  }
  else {
    credits.classList.remove("credits-disabled");
  }
  creditsEnabled = !creditsEnabled;
}

 //specs

var specsEnabled = false;

if(document.location.href.endsWith("?specs=true"))
{
  specsEnabled = true;
  specs.classList.remove("specs-disabled");
}

function toggleSpecs(){
  var specs = document.getElementById("specs");
  if (specsEnabled){
    specs.classList.add("specs-disabled");
  }
  else {
    specs.classList.remove("specs-disabled");
  }
  specsEnabled = !specsEnabled;
}

// peripherals

var periEnabled = false;

if(document.location.href.endsWith("?peri=true"))
{
  periEnabled = true;
  peri.classList.remove("peri-disabled");
}

function togglePeri(){
  var peri = document.getElementById("peri");
  if (periEnabled){
    peri.classList.add("peri-disabled");
  }
  else {
    peri.classList.remove("peri-disabled");
  }
  periEnabled = !periEnabled;
}


window.onload = function () {
  var obamaCounter = 0;

  window.onkeydown = function (gfg) {
    
    // obama
    if (obamaCounter === 0 && gfg.keyCode === 79) { // o
      obamaCounter++;
    }
    else if (obamaCounter === 1 && gfg.keyCode === 66) { // b
      obamaCounter++;
    }
    else if (obamaCounter === 2 && gfg.keyCode === 65) { // a
      obamaCounter++;
    }
    else if (obamaCounter === 3 && gfg.keyCode == 77) { // m
      obamaCounter++;
    }
    else if (obamaCounter === 4 && gfg.keyCode === 65) { // a
      obamaCounter++;

      console.log("obama");
      document.location = "/obama.html";

      obamaCounter = 0;
    }
    
    else{
      obamaCounter = 0;
    }
  };
};

function startmusic() {
  var audio = document.getElementById("audio");
  audio.volume = 0.1;
  audio.play()
}

function unhidecontent() {
    var unhidecontent = document.getElementById("click-container");
    unhidecontent.style.opacity = '0';
    unhidecontent.style.transition = 'visibility 0s 1s, opacity 1s linear';
    setTimeout(() => {
        const box = document.getElementById('click-container');
      
        box.style.display = 'none';
      }, 900);
}