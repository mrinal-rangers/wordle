const keys = document.querySelectorAll('.key');
console.log(keys);
let s = "";
let length =0 ;
let attempt =1; 

keys.forEach((key)=>{
    key.addEventListener('click',()=>{
        const text = key.innerHTML;
        if(text ==="ENTER"){
            if(length ===5){
                attempt ++;
                s="";
                length = 0;
            }
            return ;
            
        }
        if(length<5){
            length++;
            s+=text;
        }
        const that_row = document.querySelector(`.row${attempt}`);
        for(let index= 0;index<s.length; index++){
            const that_col = that_row.querySelector(`.column${index+1}`);
            that_col.innerHTML = s[index];
            that_col.classList.add('selected');
        }
    })
})