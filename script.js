

function banner_change(){
         if(banner==1){
             banner_img.src='img/banner1.jpg';
         }
         else if(banner==2){
             banner_img.src='img/banner2.jpg';
         }
         else if(banner==3){
             banner_img.src='img/banner3.jpg';
         }
         else if(banner==4){
             banner_img.src='img/banner4.jpg';
         }
         else if(banner==5){
             banner_img.src='img/banner5.jpg';
         }
         else if(banner==6){
             banner_img.src='img/banner6.jpg';
         }
         else if(banner==7){
             banner_img.src='img/banner7.jpg';
         }
    

  
         if(banner<7){
             banner++;
         }
         else{
             banner=1;
         }
}

function flicker_effect(){
    let H=document.getElementById('H');
    let A=document.getElementById('A');
    let U=document.getElementById('U');
    let N=document.getElementById('N');
    let T=document.getElementById('T');
    let E=document.getElementById('E');
    let D=document.getElementById('D');

    
    let number=Math.ceil(Math.random()*40);
    if(number==1){
        H.classList.add('light-effect1');

    }
    if(number==2){
        H.classList.add('light-effect1');
    }
    if(number==3){
        A.classList.add('light-effect1');
    }
    if(number==4){
        U.classList.add('light-effect1');
    }
    if(number==5){
        N.classList.add('light-effect1');
    }
    if(number==6){
        T.classList.add('light-effect1');
    }
    if(number==7){
        E.classList.add('light-effect1');
    }
    if(number==8){
        D.classList.add('light-effect1');
    }
    if(number==9){
        H.classList.add('light-effect2');
    }
    if(number==10){
        A.classList.add('light-effect2');
    }
    if(number==11){
        U.classList.add('light-effect2');
        
    }
    if(number==12){
        N.classList.add('light-effect2');
        
    }   
    if(number==13){
        T.classList.add('light-effect2');
        
    }
    if(number==14){
        E.classList.add('light-effect2');
        
    }
    if(number==15){
        D.classList.add('light-effect2');
        
    }
    if(number>=16 && number<=20){
        D.classList.add('light-effect1');
        T.classList.add('light-effect1');
        
    }
    if(number>=20 && number<=23){
        T.classList.add('light-effect1');
        A.classList.add('light-effect1');   
    }

    if(number>=23 && number <=25){
        H.classList.add('light-effect1');
        U.classList.add('light-effect1');

        
    }
    if(number>=25 && number <=28){
        N.classList.add('light-effect1');
        A.classList.add('light-effect1');

        
    }
    if(number>=29 && number <=32){
        H.classList.add('light-effect2');
        A.classList.add('light-effect2');
        U.classList.add('light-effect2');
        N.classList.add('light-effect2');
        T.classList.add('light-effect2');
        E.classList.add('light-effect2');
        D.classList.add('light-effect2');


    }
    if(number>=33 && number <=36){
        H.classList.add('light-effect1');
        A.classList.add('light-effect1');
        U.classList.add('light-effect1');
        N.classList.add('light-effect1');
        T.classList.add('light-effect1');
        E.classList.add('light-effect1');
        D.classList.add('light-effect1');
1
    }
    

    setTimeout(() => {
        H.classList.remove('light-effect1');
        A.classList.remove('light-effect1');
        U.classList.remove('light-effect1');
        N.classList.remove('light-effect1');
        T.classList.remove('light-effect1');
        E.classList.remove('light-effect1');
        D.classList.remove('light-effect1');
        H.classList.remove('light-effect2');
        A.classList.remove('light-effect2');
        U.classList.remove('light-effect2');
        N.classList.remove('light-effect2');
        T.classList.remove('light-effect2');
        E.classList.remove('light-effect2');
        D.classList.remove('light-effect2');

    }, 1000);
    
}



let flag1=0;
let banner_switch_speed=7000;
let flickerInterval;
let bannerInterval;
let banner_img=document.getElementById('banner-img');
let banner=1;
let music=new Audio('audio/bk_music.mp3');
let button1=document.getElementById('btn1');
let button2=document.getElementById('btn2');
let container1=document.getElementById('container1');
let container2=document.getElementById('container2');
let button3=document.getElementById('btn3');
let button4=document.getElementById('btn4');



// button1 (Twinkle Twinkle)

button1.onclick=function(){
    if(flag1==1)
    return;
    flag1=1;
    music.play();
    music.loop=true; 
    
 bannerInterval= setInterval(() => {
        banner_change();
    }, banner_switch_speed);
    
 flickerInterval=setInterval(() => {
        flicker_effect();
    }, 2000);

}

button1.ondblclick=function(){
    music.pause();
    clearInterval(bannerInterval);
    clearInterval(flickerInterval);
    flag1=0;
}

// button2 (page 2)

button2.onclick=function(){
 container1.style.display='none';
 container2.style.display='block';
  music.pause();
  clearInterval(bannerInterval);
  clearInterval(flickerInterval);
  flag1=0;
}






//button4 (page 1)
button4.onclick=function(){
    container1.style.display='block';
    container2.style.display='none';

   }






