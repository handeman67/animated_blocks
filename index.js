const __ = (elm) => document.querySelectorAll(elm);
const _ = (elm) => document.querySelector(elm);
const boxcount = [],
  list = [],
  side = [],
  Main = _(".mainWrap"),
  navcount = 10;

const create = (a, b, c, d) => {
  let ab = document.createElement(a);
  ab.classList.add(b);
  ab.id = c;
  ab.type = null || d;
  return ab;
};

// ?for creating element templates
function template(temp, mod, dd) {
  !dd ? (dd = "elm") : (dd = dd);
  temp = create("template", "template", `temp${dd}`, "template");
  !mod ? (mod = `<div></div>`) : (mod = mod);
  temp.innerHTML = mod;
  document.body.append(temp);
}
const nn = `<li><label><input type="radio" id="" class="radioInput"></label> </li>`;
template("", nn, "item");

// get computed style of clicked object
function getcompstyle(a) {
  return window.getComputedStyle(a);
}
//create a new object
const isOdd = function (num) {
  return num % 2;
};
// create a nav bar to control elements styles
class navi {
  constructor(a, b) {
    this.nav = _(a);
    this.ul = create("ul", "list", "Mainlist", "ul");
    this.w = _("#navigation");
    this.rinput = b;
  }

  buildList() {
    for (let i = 0; i <= navcount; i++) {
      let li = _("#tempitem").content.cloneNode(true);
      this.ul.append(li);
      this.nav.append(this.ul);
    }
    __("li").forEach((l, index) => {
      l.id = `item${index}`;

      __(".radioInput").forEach((radio, index) => {
        radio.id = `radio${index}`;

        if (!isOdd(index - navcount)) {
          radio.name = `group${1}`;
        } else {
          radio.name = `group${2}`;
        }

        __("label").forEach((la, index) => {
          la.id = `label${index}`;
          la.htmlFor = `radio${index}`;
        });
      });
    });
    return;
  }
}

const nav = () => {
  return new navi("nav");
};
// load nav elements
function loading() {
  nav().buildList();
  return nav();
}
_("nav").addEventListener("loaded", loading());

temp = template("", "", "box");
// BUILDING CUBE
class cube {
  constructor() {
    this.Front = `width: 6rem;height: 6rem;transform:translate3d(0, 0, 0.5rem)rotate3d(0, 0, 0, 0deg);background: hsla(100, 80%, 60%, 1);transform-style: preserve-3d;`;
    this.Bottom = `width: 6rem;height: 1rem;transform:translate3d(0, 5.5rem, 0rem)rotate3d(1, 0, 0, 90deg);background: hsla(100, 60%, 60%, 1);transform-style: preserve-3d;`;
    this.Top = `width: 6rem;height: 1rem;transform:translate3d(0,  -0.5rem, 0rem)rotate3d(1, 0, 0, -90deg);background: hsla(240, 60%, 60%, 1);transform-style: preserve-3d;`;
    this.Right = ` width: 1rem;height: 6rem;transform:translate3d(5.5rem, 0, 0rem)rotate3d(0, 1, 0, 90deg);background: hsla(150, 60%, 60%, 1);transform-style: preserve-3d;`;
    this.Left = `width: 1rem;height: 6rem;transform:translate3d(-0.5rem, 0, 0rem)rotate3d(0, 1, 0, -90deg);background: hsla(210, 60%, 60%, 1);transform-style: preserve-3d;`;
    this.Back = `width: 6rem;height: 6rem;transform:translate3d(0, 0, -0.5rem)rotate3d(1, 0, 0, 0deg);background: hsla(0, 60%, 60%, 1);transform-style: preserve-3d;`;
    this.Sd = {
      front: "front",
      back: "back",
      left: "left",
      right: "right",
      top: "top",
      bottom: "bottom"
    };
    this.props = {
      front: this.Front,
      bottom: this.Bottom,
      top: this.Top,
      right: this.Right,
      left: this.Left,
      back: this.Back
    };
  }
  buildcube() {
    let wrap = create("div", "wrap", `w`, "div");
    let count=0;
    Main.append(wrap);
    let ssd = Object.keys(this.props);
    for (let i of ssd) {
      let Side = create("div", "side", `${i}`);
      Side.setAttribute("style", this.props[i]);
      side.push(Side);
    }
    side.forEach((sde, index) => {
      wrap.appendChild(sde);
    });
    boxcount.push(wrap);
    wrap.style=`animation_delay=${count*100}ms`;
    update();
  }

  // trouble shoot function creates htlm object
}
// function update(a, b, c, d) {
//   let thick = 1.8;
//   let sz = 0.999;
//   let skw = 0;
//   let hgt = 1;
//   let skewy = 0.5 || a;
//   let skewscale = 0.00005;
//   let stretch = 0;
//   let rotates = 1;
//   this.b = 0 || b;
//   this.c = -90 || c;
//   this.d = 0.5 || d;
//   let tranz = 1.2;
//   let tranx = -90;
//   let trany = 0.8;
//   let tran3dx = 0;
//   let tran3dy = 0;
//   let tran3dz = 190;
//   let rotx = -90;
//   let roty = 0;
//   let rotz = 50;
function update(a, b, c, d) {
  this.a = -90 || a;
  this.b = 1.2 || b;
  this.c = 33 || c;
  this.d = 40 || d;
  __(".wrap").forEach((w, index) => {
    w.id = `wp${index}`;
    w.style = `      
	    width: 8rem;
	    height: 8rem;  
      transform:rotate3d(0, 0, 1, 120deg)
      rotatez(40deg)
      rotatex(0deg)
      rotatey(90deg)
      translatex(0px)
      translatey(0rem)
      translatez(0px)
      translate3d(0%,0px,0px)
      scale(0.85)
      ;animation-delay: ${index*100}ms;`;
    
     
  });
}

//  rng.innerHTML=range.value;
//   _("#target2").append(range);
//   _("#range").min=0.1;
//   _("#range").max=10;
//   let val=("#range").value;
//   console.log(val);

// let range=create("input","range","range","range");
// let rng=create("label","rangelabel","rangelabel","label");
// rng.htmlFor="range";
// rng.value=range.value;

// end of cube algo

// window.addEventListener("click", (event) => {
//   let targetElement = event.target;
//   let style = window.getComputedStyle(targetElement);

//   // console.log(event.target.id, style.animation);
//   // console.log(this.Count);
// });

// _("nav").addEventListener("input", changeBlock);

window.addEventListener("load", () => {
  let cb = new cube();
  cb.buildcube();
  let box = Main.innerHTML;
  _("#tempbox").innerHTML = box;
  loadingfirst();
});

Main.addEventListener("click", () => {
  let temp = _("#tempbox").content.cloneNode(true);
  Main.append(temp);
  update();
});

function loadingfirst() {
  for (let i = 0; i < 20; i++) {
    let temp = _("#tempbox").content.cloneNode(true);
    Main.append(temp);
    update();
  }

  return;
}
addEventListener("change", () => {
  update();
  let de = document.documentElement.style;
  de.setProperty("--thisa", `${-90}deg`);
  de.setProperty("--thisb", `${1.2}rem`);
  de.setProperty("--thisc", `${-90}deg`);
  de.setProperty("--thisd", `${40}deg`);
  de.setProperty("--one", `${30}deg`);
  de.setProperty("--two", `${-33}deg`);
  return de;
});

addEventListener("click", () => {
  let b = window.getcompstyle(event.target);

  _(
    "#target"
  ).innerHTML = `Element Id: ${event.target.id}<br>Element name:${event.target.name}`;
  if (event.target.name === "group1") {
    event.target.parentElement.parentElement.style.border = "2px solid red; ";
    console.log(event.target.parentElement);
  }
  for (let i = 0; i < b.length; i++) {
    let span = create("span", "span", `span${i}`, "span");
    span.innerHTML += ` ${b[i]}:${b[b[i]]}`;
    _("#target2").append(span);
  }

  return;
});
//aniwrap= new KeyframeEffect(
//   _(".wrap"),
//   [
//     { transform: "translateY(0%)" }, // keyframe
//     { transform: "translateY(100%)" } // keyframe
//   ],
//   { duration: 3000, fill: "forwards" } // keyframe options
// );

//  let de = document.documentElement.style;
//   de.setProperty("--y", `${1.2 * index}rem`);
//   de.setProperty("--tm", 0.5 * index);
