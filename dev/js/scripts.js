//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";


//register Plugins
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);



//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline();
  let PERC = {num:0};
  let PERC_num = document.querySelector("#mile tspan");
  


  console.log(PERC_num);

  function initLogoTL(){
    let tl = gsap.timeline();
    tl.from("#ghost1",{scale:.5, alpha:0, duration:1, transformOrigin:"center"})
    .from("#redNo1",{x:-1000, duration:.5})
    .to("#logo1",{alpha:0, delay:1})
    ;

    return tl;
  }
gsap.set("#lightblue",{scale:1.1, transformOrigin:"center"});
gsap.set("#darkblue",{scale:1.1, transformOrigin:"center"});



  function flashTL(){
    let tl = gsap.timeline();
    tl.to("#lightblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#darkblue",{fill:"#2E69FF", duration:.05})
    .to("#lightblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#darkblue",{fill:"#2E69FF", duration:.05})
    .to("#lightblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#darkblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#darkblue",{fill:"#2E69FF", duration:.05})
    .to("#lightblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#2E69FF", duration:.05})
    .to("#darkblue",{fill:"#55B5FF", duration:.05})
    .to("#lightblue",{fill:"#55B5FF", duration:.05})
    .to("#darkblue",{fill:"#2E69FF", duration:.05})
    .to("#flash",{alpha:0})

    ;

    return tl;
 
  }

  function dashboardTL(){
    let tl = gsap.timeline();
    tl.from("#speedometer", {alpha:0})
    .from("#speedLine", {drawSVG:"0%", duration:1, ease:"expo"})
    .from("#slimer", {alpha:0})
    .from("#PRNDL", {alpha:0})
    //fuel
    .from("#fuel", {alpha:0})
    .from("#redlight", {fill:"none", duration:.25})
    .from("#orangelight", {fill:"none", duration:.25})
    .from("#yellowlight", {fill:"none", duration:.25})
    .from("#greenlight1", {fill:"none", duration:.35})
    .from("#greenlight2", {fill:"none", duration:.35})
    .from("#fuelLine", {rotation:70, transformOrigin:"center", duration:1},"-=1")
    .from("#gps", {alpha:0})

    .from("#radio", {alpha:0})
    .from("#weather", {alpha:0})
    .to("#rightTurn", {duration:1.5, rotation:200, transformOrigin:"center"},"volume")
    .to("#volume2", {fill:"#AECA2F"},"volume")
    .to("#volume3", {fill:"#AECA2F", delay:.5},"volume")
    .to("#volume4", {fill:"#AECA2F", delay:.75},"volume")
    // .to("#ghostbusters", {alpha:0, duration:1})

    // .to(MUSIC, {alpha:0, duration:2})
  
    ;

    return tl;
  }

  function countUpNumbers(){
    var tl = gsap.timeline();
    tl.to(PERC, {duration:2, num:"+=60", roundProps:"num", onUpdate:percentHandler, ease:"expo"},"drive")
    .from("#speedFill", {alpha:0, duration:2, ease:"expo"},"drive")
    .to(PERC, {duration:2, num:"-=60", roundProps:"num", onUpdate:percentHandler, ease:"expo"},"slow")
    .to("#speedFill", {alpha:0, duration:2.5},"slow")
    .from("#ALERT", {alpha:0, duration:.5, repeat:8, scale:1.1, transformOrigin:"center"},"drive")
    .to("#car", {duration:4, transformOrigin:"center",
      motionPath:{
      path:"#pathCar",
      align:"self",
      alignOrgin:[-10, -30],
      autoRotate:90} },"drive")

    ;

    return tl;

  }
   function percentHandler(){

     PERC_num.textContent=PERC.num;
   }

  //  function musicHandler(){

  //   MUSIC_num.textContent=MUSIC.num;
  // }

  //1. set initial properties
 init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
 mainTL.add(initLogoTL())
 .add(flashTL(),"-=1")
 .add(dashboardTL())
 .add(countUpNumbers())
 .add(percentHandler())





;//tl END





});
