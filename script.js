let toggle = "off";
let animtimer, bgColor;
let count = 0;
let colArr = [];
let randFntpos = 0;
let currArrpos = colArr.length-1;
let fntArr = ["'Alegreya', serif","'Alegreya Sans', sans-serif","'Merriweather', serif","'Merriweather Sans', sans-serif","'Nunito', sans-serif","'Nunito Sans', sans-serif","'Quattrocento', serif","'Quattrocento Sans', sans-serif","'Roboto', sans-serif","'Roboto Mono', monospace","'Roboto Slab', serif"] 
let fnstrposArr = []
randombg = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  if (x > 220 || y > 220 || z > 220) {
    document.body.style.color = "black";
  } else {
    document.body.style.color = "white";
  }
  bgColor = "rgb(" + x + "," + y + "," + z + ")";
  randFntpos = Math.floor(Math.random() * 11);
  document.body.style.fontFamily = fntArr [randFntpos]
  document.body.style.backgroundColor = bgColor;
  if (colArr.length == 10 && fnstrposArr.length == 10) {
    colArr.shift();
    fnstrposArr.shift();
  }
  colArr.push(bgColor);
  fnstrposArr.push(randFntpos)
};

click2cpy = (myColor,myFontpos) => {
  const el = document.createElement('textarea');
  el.value = `font-family: ${fntArr[myFontpos]}; background-color: ${myColor};`
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Copied:  " + el.value)
}

switchnext = () => {
  if (currArrpos == colArr.length-1) {
      startanim()
  }
  else{
      currArrpos += 1
      document.body.style.backgroundColor = colArr[currArrpos]
      document.body.style.fontFamily = fntArr[fnstrposArr[currArrpos]]
    }
};
switchprev = () => {
    if (toggle === "on"){
        stopanim()
    }
    if (colArr.length > currArrpos) {
    count++;
    currArrpos = (colArr.length-1)-count;
    document.body.style.backgroundColor = colArr[currArrpos];
    document.body.style.fontFamily = fntArr[fnstrposArr[currArrpos]]
  }
}
saver = () => {
  const parent = document.querySelector(".js-saved-container");
  let currentbgCol = document.body.style.backgroundColor;
let currentCol = document.body.style.color;
  parent.insertAdjacentHTML(
    "afterbegin",
    `<span id="color-item" onclick=click2cpy("${bgColor}",${randFntpos}) style="background-color: ${currentbgCol}; color: ${currentCol}; font-family: ${fntArr[randFntpos]};">font-family: ${fntArr[randFntpos]}; background-color: ${currentbgCol};</span>`
  );
};
startanim = () => {
  var btn = document.getElementById("animbtn");
  count = 0
  currArrpos = colArr.length-1
  if (toggle === "off") {
    animtimer = setInterval(randombg, 3000);
    btn.innerText = "Stop Switching";
    toggle = "on";
  } else {
    stopanim()
  }
};

stopanim = () => {
    var btn = document.getElementById("animbtn");
    clearInterval(animtimer);
    btn.innerText = "Start Switching";
    toggle = "off";
}
