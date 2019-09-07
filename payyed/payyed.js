const changer = document.querySelectorAll("p a")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box1Headind = document.querySelector(".box1 h1")
const box1P = document.querySelector(".box1 p")


changer[0].addEventListener("click",()=>{
       
            box2.style.display = "none"
            box3.style.display = "block"
                        box1Headind.textContent = "Welcome back!"
            box1P.textContent = "We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide"

    })

    changer[1].addEventListener("click",()=>{
       
            box3.style.display = "none"
            box2.style.display = "block"
            box1Headind.textContent = "Get Verified!"
            box1P.textContent = "Every day, Payyed makes thousands of customers happy."

    })
