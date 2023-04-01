const allInputs = document.querySelectorAll('input')
// console.log(allInputs)
const originalPrice = document.querySelector('#originalPrice')
const interestRate = document.querySelector('#interestRate')
const loanTenure = document.querySelector('#loanTenure')
const totalAmount = document.querySelector('#totalAmount')
// const en
// console.log(originalPrice.value)
// console.log(interestRate)
// console.log(loanTenure)
// console.log(totalAmount)
// let r = '';
// let p = '';
let n = '';
// let pandRValue = '';
let firstValue = '';
let secondValue = '';
let thirdValue = '';
const btn = document.querySelector('.submit')
console.log(btn)
let EMI = ''
let all  = ''
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(originalPrice.value == '' || interestRate.value =='' || loanTenure.value == ''){
        alert('please enter some value :)')
    }
    // p = originalPrice.value
    // console.log(p)
    // r = Number(interestRate.value)/1200;
    // console.log(r) 
    n = loanTenure.value
    // console.log(n)
    // pandRValue = (p*r)
    // console.log(pandRValue)
    // firstValue = (originalPrice.value*Number(interestRate.value)/1200)
    // console.log(firstValue)
    // secondValue = ((1+Number(interestRate.value)/1200)**n)
    // console.log(secondValue)
    // thirdValue = ((1+(Number(interestRate.value)/1200))**n-1)
    // console.log(thirdValue)
    // EMI = Math.round([(firstValue*secondValue)]/[thirdValue])
    // console.log(EMI)
    all = Math.round([(originalPrice.value*Number(interestRate.value)/1200)*((1+Number(interestRate.value)/1200)**n)]/((1+(Number(interestRate.value)/1200))**n-1))
    // console.log(all)
    totalAmount.value = all
    console.log(totalAmount)



})




