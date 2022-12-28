
            
            const billAmountEl = document.querySelector("#bill-amount");
            const cashPaidEl = document.querySelector("#cash-paid");
            const submitEl= document.querySelector("#submit");
            const changeAmountEl = document.querySelector("#change-amount");
            console.log({changeAmountEl})
            const notesCountEl = document.querySelectorAll(".notesCount");
            
            for (let i=0;i<notesCountEl.length;i++){
                console.log("in if loop")
                console.log(notesCountEl)
            }
            //console.log({notesCountEl});
            const denominationsEl = document.querySelectorAll(".denominations");
            console.log({denominationsEl})
            
            submitEl.addEventListener("click",calculateAmount,false);
            function calculateAmount(){
                const userBillAmount = billAmountEl.value;
                const cashPaidByUser = cashPaidEl.value;
                let changeAmount = parseInt(cashPaidByUser) - parseInt(userBillAmount);
                changeAmountEl.innerText = `Please return Rs. ${changeAmount} to the customer`
                const denominations = [2000, 500, 100, 20, 10, 5, 1];
                
                for(let i=0;i<denominations.length;i++){
                    // denominationsEl.innerText[i] = denominations[i];
                    const numberOfNotes = Math.trunc(changeAmount/denominations[i]);
                    console.log({numberOfNotes})
                    console.log({notesCountEl})
                    notesCountEl[i].innerText = numberOfNotes;
                    changeAmount = changeAmount % denominations[i];
                  
                }
                //console.log({numberOfNotes});
                
                

            }
        
    