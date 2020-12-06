const right = document.querySelector(".right");
const left = document.querySelector(".left")
let index = 1;
const phone = document.querySelector(".dynamic__img");
let heading = document.querySelector(".dynamic__heading");
let par = document.querySelector(".dynamic__paragraph");





right.addEventListener("click",  function(){
      if(index == 9){
        index = 1;

        if(index == 1){
            phone.setAttribute("src" , "../img/phone/1.png");
         }else if(index == 2){
             phone.setAttribute("src" , "../img/phone/2.png");
         }else if(index ==3){
             phone.setAttribute("src" , "../img/phone/3.png");
         }else if(index ==4){
             phone.setAttribute("src" , "../img/phone/4.png");
         }else if(index ==5){
             phone.setAttribute("src" , "../img/phone/5.png");
         }else if(index ==6){
             phone.setAttribute("src" , "../img/phone/6.png");
         }else if(index ==7){
             phone.setAttribute("src" , "../img/phone/7.png");
         }else if(index ==8){
             phone.setAttribute("src" , "../img/phone/8.png");
         }else if(index ==9){
             phone.setAttribute("src" , "../img/phone/9.png");
         }
      }else{
          index++;

          if(index == 1){
            phone.setAttribute("src" , "../img/phone/1.png");
         }else if(index == 2){
             phone.setAttribute("src" , "../img/phone/2.png");
         }else if(index ==3){
             phone.setAttribute("src" , "../img/phone/3.png");
         }else if(index ==4){
             phone.setAttribute("src" , "../img/phone/4.png");
         }else if(index ==5){
             phone.setAttribute("src" , "../img/phone/5.png");
         }else if(index ==6){
             phone.setAttribute("src" , "../img/phone/6.png");
         }else if(index ==7){
             phone.setAttribute("src" , "../img/phone/7.png");
         }else if(index ==8){
             phone.setAttribute("src" , "../img/phone/8.png");
         }else if(index ==9){
             phone.setAttribute("src" , "../img/phone/9.png");
         }
      }
});


left.addEventListener("click" ,function(){
   if(index == 1){
       index = 9;

       if(index == 1){
        phone.setAttribute("src" , "../img/phone/1.png");
     }else if(index == 2){
         phone.setAttribute("src" , "../img/phone/2.png");
     }else if(index ==3){
         phone.setAttribute("src" , "../img/phone/3.png");
     }else if(index ==4){
         phone.setAttribute("src" , "../img/phone/4.png");
     }else if(index ==5){
         phone.setAttribute("src" , "../img/phone/5.png");
     }else if(index ==6){
         phone.setAttribute("src" , "../img/phone/6.png");
     }else if(index ==7){
         phone.setAttribute("src" , "../img/phone/7.png");
     }else if(index ==8){
         phone.setAttribute("src" , "../img/phone/8.png");
     }else if(index ==9){
         phone.setAttribute("src" , "../img/phone/9.png");
     }
   }else{
       index--;
       if(index == 1){
        phone.setAttribute("src" , "../img/phone/1.png");
     }else if(index == 2){
         phone.setAttribute("src" , "../img/phone/2.png");
     }else if(index ==3){
         phone.setAttribute("src" , "../img/phone/3.png");
     }else if(index ==4){
         phone.setAttribute("src" , "../img/phone/4.png");
     }else if(index ==5){
         phone.setAttribute("src" , "../img/phone/5.png");
     }else if(index ==6){
         phone.setAttribute("src" , "../img/phone/6.png");
     }else if(index ==7){
         phone.setAttribute("src" , "../img/phone/7.png");
     }else if(index ==8){
         phone.setAttribute("src" , "../img/phone/8.png");
     }else if(index ==9){
         phone.setAttribute("src" , "../img/phone/9.png");
     }

   }
});






