const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const sliderInner=document.querySelector(".slider-inner");
const slider=document.querySelector(".slider");

const slider3= document.getElementById("slider3");
const nexx= document.getElementById("nexx");
const prevv= document.getElementById("prevv");


const slider4=document.getElementsByClassName("slider4")[0];
let sli4=0;
let nindex=0;
let pindex=0
let lete=0;

function nexslider(){
  sli4++;
  slider4.style.transform=`translateX(${-33.3*sli4}vw)`;

  if (sli4==4){ 
    slider4.style.transform="translateX(0)";
    sli4=0;
  }
}
function prevslider4(){
  sli4--;
  


  if (sli4==-1){
    slider4.style.transform="translateX(-133.2vw)";
    sli4=3;
  }
  if (sli4==3){
    slider4.style.transform="translateX(-99.9vw)";
    sli4=3;
  }
  if (sli4==2){
    slider4.style.transform="translateX(-66.6vw)";
    sli4=2;
  }
  if (sli4==1){
    slider4.style.transform="translateX(-33.3vw)";
    sli4=1;
  }
  if (sli4==0){
    slider4.style.transform="translateX(0)";
    sli4=0;
  }
}

function nex() {
   lete++;
  slider3.style.transform=`translateX(${-33.3*lete}vw)`;

  if (lete==4){
    slider3.style.transform="translateX(0)";
    lete=0;
  }

 
  }
function pre(){
  lete--;
  


  if (lete==-1){
    slider3.style.transform="translateX(-133.2vw)";
    lete=3;
  }
  if (lete==3){
    slider3.style.transform="translateX(-99.9vw)";
    lete=3;
  }
  if (lete==2){
    slider3.style.transform="translateX(-66.6vw)";
    lete=2;
  }
  if (lete==1){
    slider3.style.transform="translateX(-33.3vw)";
    lete=1;
  }
  if (lete==0){
    slider3.style.transform="translateX(0)";
    lete=0;
  }

}



next.addEventListener('click',function(){
  nindex++;
  sliderInner.style.transform=`translateX(${-14.5*nindex}em)`;
  if (nindex==4){
nindex=0;
}
  if (nindex!=0){
    prev.style.display="block";
  }
})

prev.addEventListener('click',function(){
  nindex--;
  if (nindex<0){
    nindex=0;
}
  if (nindex!=4){
    next.style.display="block";
  }
  sliderInner.style.transform=`translateX(${-14.5*nindex}em)`

})






// secondlast slider



const nexts=document.querySelector(".nextnextb");
const prevs=document.querySelector(".prevprevb");
const sliderB=document.querySelector(".slider-innerb");
let ni=0;
let pi=0

nexts.addEventListener('click',function(){
  ni++;
  sliderB.style.transform=`translateX(${-56.2*ni}em)`;
  if (ni==5){
    sliderB.style.transform="translateX(0)";
    ni=0;
    // nexts.style.display="none";
  }
  if (ni!=0){
    prevs.style.display="block";
  }
  
})

prevs.addEventListener('click',function(){
  ni--;


  if (ni==-1){
    sliderB.style.transform="translateX(-224.8em)";
    ni=4;
    // prevs.style.display="none";
  }
  if (ni==3){
    sliderB.style.transform="translateX(-168.6em)";
    ni=3;
    // prevs.style.display="none";
  }
  if (ni==2){
    sliderB.style.transform="translateX(-112.4em)";
    ni=2;
    // prevs.style.display="none";
  }
  if (ni==1){
    sliderB.style.transform="translateX(-56.2em)";
    ni=1;
    // prevs.style.display="none";
  }
  if (ni==0){
    sliderB.style.transform="translateX(0)";
    ni=0;
    // prevs.style.display="none";
  }

})




// let pi=0





//  slider





// nex.addEventListener('click',function(){
//   let++;
//   console.log("ma di fuddi");
//   slid.style.transform=`translateX(${-33.3*let}vw)`;
//   if (let==5){
//     slid.style.transform="translateX(0)";
//     let=0;
//     // nexts.style.display="none";
//   }
//   if (let!=0){
//     pre.style.display="block";
//   }
  
// })

// pre.addEventListener('click',function(){
//   let--;
//   console.log("ma di fuddi");


//   if (let==-1){
//     slid.style.transform="translateX(-133.2vw)";
//     let=4;
//     // prevs.style.display="none";
//   }
//   if (let==3){
//     slid.style.transform="translateX(-99.9vw)";
//     let=3;
//     // prevs.style.display="none";
//   }
//   if (let==2){
//     slid.style.transform="translateX(-66.6vw)";
//     let=2;
//     // prevs.style.display="none";
//   }
//   if (let==1){
//     slid.style.transform="translateX(-33.3vw)";
//     let=1;
//     // prevs.style.display="none";
//   }
//   if (let==0){
//     slid.style.transform="translateX(0)";
//     let=0;
//     // prevs.style.display="none";
//   }

// })



