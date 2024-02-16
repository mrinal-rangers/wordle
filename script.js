const keys = document.querySelectorAll('.key');
console.log(keys);
let s = "";
let length =0 ;
let attempt =1; 

keys.forEach((key)=>{
    key.addEventListener('click',()=>{
        const text = key.innerHTML;
        if(text ==="ENTER"){
            if(length ===5 ){
                attempt ++;
                s="";
                length = 0;
            }
            return ;  
        }
        else if(text === "CLEAR"){
           if(length!=0){
            length--;
            s = s.slice(0, -1); 
            }
        }    
        else if(length<5){
            length++;
            s+=text;
        }
        const that_row = document.querySelector(`.row${attempt}`);
        console.log(that_row);
        for(let index= 0;index<5; index++){
            const that_col = that_row.querySelector(`.column${index+1}`);
            console.log(that_col);
            if (index < length) {
                that_col.innerHTML = s[index];
                that_col.classList.add('selected'); 
            } else {
                that_col.innerHTML = "";
                that_col.classList.remove('selected'); 
            }

        }
    })
})