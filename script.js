const keys = document.querySelectorAll('.key');
console.log(keys);
let s = "";
let length =0 ;
let attempt =1; 
let word = "LIGHT"

keys.forEach((key)=>{
    key.addEventListener('click',()=>{
        const text = key.innerHTML;
        const that_row = document.querySelector(`.row${attempt}`);
        if(text ==="ENTER"){
            if(length ===5 ){
                for(let i= 0;i<5;i++){
                    const that_col = that_row.querySelector(`.column${i+1}`);
                    that_col.classList.add('gray'); 
                    if(s[i]===word[i]){
                        that_col.classList.add('green');
                    }
                    keys.forEach((key1)=>{
                        if(key1.innerHTML===s[i]){
                            key1.classList.add('kgray');
                            if(s[i]===word[i]){
                                key1.classList.add('kgreen');
                            }
                        }
                    })
                }
                for(let i= 0;i<5;i++){
                    for(let j=0;j<5;j++){
                        if(i===j)continue;
                        const that_col = that_row.querySelector(`.column${i+1}`);
                        if(s[i]===word[j] && s[j]!==word[j]){
                        that_col.classList.add('yellow'); 
                        keys.forEach((key1)=>{
                            if(key1.innerHTML===s[i]){
                                key1.classList.add('kyellow');
                            }
                        })
                        }
                    }
                }
                if(s===word){
                    setTimeout(()=>{
                        alert("Congrats , You Won");
                    },500)
                }


                attempt ++;
                s="";
                length = 0;
                if(attempt === 7){
                    setTimeout(()=>{
                        alert(`The word was : ${word} , Try Again `);
                    },500)
                    setTimeout(()=>{
                        keys.forEach((key1)=>{
                            key1.classList.remove('kgray', 'kyellow', 'kgreen'); 
                        })
                        for(let i=1;i<=6;i++){
                            const that_row1 = document.querySelector(`.row${i}`);
                            for(let j=1;j<=5;j++){
                                const that_col1 = that_row1.querySelector(`.column${j}`);
                                that_col1.classList.remove('gray', 'yellow','green');
                                that_col1.innerHTML="";
                            }
                        }
                        attempt = 0;
                    },600)
                    
                }
                
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
        for(let index= 0;index<5; index++){
            const that_col = that_row.querySelector(`.column${index+1}`);
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