 screen = document.getElementById('screen1');
 buttons = document.querySelectorAll('button');
 let screenValue = " "
 for(item of buttons){
     item.addEventListener('click', (e)=>{
         buttonText = e.target.innerText;
         console.log('button text is', buttonText )
         if(buttonText == 'X'){
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue;
         }else if(buttonText == 'CE'){
            screenValue = ""
            screen.value = screenValue;
         }else if(buttonText == '='){
            screen.value = eval(screenValue )
         }else if(buttonText == '+/-'){
            screenValue =-screenValue-1
            screen.value = screenValue
         }
         else if(buttonText == 'C'){
           num = screen.value.length-1
           screenValue = screen.value.substring(0, num);
           screen.value = screenValue
         }
         else{
            screenValue += buttonText;
            screen.value = screenValue
         }

     })  
 } 