
            
            const billAmountEl = document.querySelector("#bill-amount");
            const cashPaidEl = document.querySelector("#cash-paid");
            const submitEl= document.querySelector("#submit");
            const changeAmountEl = document.querySelector("#change-amount");
            console.log({changeAmountEl})
            const notesCountEl = document.querySelectorAll(".notesCount");
            const denominationsEl = document.querySelectorAll(".denominations");
            console.log({denominationsEl})
            
            submitEl.addEventListener("click",calculateAmount,false);
            function calculateAmount(){
                const userBillAmount = billAmountEl.value;
                const cashPaidByUser = cashPaidEl.value;
                const denominations = [2000, 500, 100, 50, 20, 10, 5, 1];
                let changeAmount = parseInt(cashPaidByUser) - parseInt(userBillAmount);
                if (changeAmount < 0){
                    changeAmountEl.innerText = `Insufficient money!!`
                }

                else{
                    changeAmountEl.innerText = `Please return Rs. ${changeAmount} to the customer`
                               
                     for(let i=0;i<denominations.length;i++){
                    // denominationsEl.innerText[i] = denominations[i];
                        const numberOfNotes = Math.trunc(changeAmount/denominations[i]);
                        notesCountEl[i].innerText = numberOfNotes;
                        changeAmount = changeAmount % denominations[i];
                  
                }
                
                }
                //console.log({numberOfNotes});
                
                

            }
        
    