const boxes = document.querySelectorAll(".box");
const paly = document.querySelector(".paly")
const para = document.querySelector(".para")
let gameover = false;

//useerchoice
boxes.forEach((box) => {
    box.addEventListener("click", () => {
            if (box.innerText === "" && !gameover) {
                box.innerText = "X"
                patterns();
                if(!gameover){
         comchoice();
            }
        }
    });
});
 

//computer chocie 
const comchoice = () => {
        const arr = Array.from(boxes)
        const emptyarr = arr.filter(box => box.innerText === "")
        const random = Math.floor(Math.random() * emptyarr.length)
        const choice = emptyarr[random]

        if(choice) {
          choice.innerText = "O"
          patterns();
        }

    };

    //win outcomes 
    const winchoice = [
        [0,3,6],
        [2,5,8],
        [1,4,7],

        [0,4,8],
        [2,4,6],
        
        [0,1,2],
        [3,4,5],
        [6,7,8],
    ]
    
  

    //comparing 
    const patterns = () => {
         for(let pattern of winchoice ) {
            const [A,B,C] = pattern ;
            if (boxes[A].innerText != "" &&
                boxes[A].innerText === "X" &&
                boxes[A].innerText === boxes[B].innerText &&
                boxes[B].innerText === boxes[C].innerText
            ) {   gameover = true
                paly.innerText = "Play Again";
                paly.addEventListener("click",
                    () => {
                        location.reload();
                    })
                    
                    para.innerText = "Congratrulation! you beat the AI🎊"
                    para.style.color = "green"
            }  else if(
                boxes[A].innerText != "" &&
                boxes[A].innerText === "O" &&
                boxes[A].innerText === boxes[B].innerText &&
                boxes[B].innerText === boxes[C].innerText
            ) {   gameover = true
                paly.innerText = "Play Again";
                paly.addEventListener("click",
                    () => {
                        location.reload();
                    }
                )
                
                para.innerText = "OOPs! YOU LOSE TRY AGAIN 😔"
               para.style.color = "red";
                return;
            } 
            
        }
        const filledbox = Array.from(boxes).every(box =>
    box.innerText !== ""
 )

  if (filledbox === true && !gameover){
    gameover = true
    paly.innerText = "Play Again";
    
    paly.addEventListener("click",
                    () => {
                        location.reload();
                    }
                )
    para.innerText = "game was draw b/w you and AI 🤝"
 }
    }

