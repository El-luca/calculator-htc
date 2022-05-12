const $buttonsNumbers = document.querySelectorAll('.calculator__buttons-nunber')
const $inputCalculate = document.querySelector('.calculate')
const $buttonsOperator = document.querySelectorAll('.calculator__buttons-operators')
const $divison = document.querySelector('.calculator__buttons-operator-division')
const $multiplication = document.querySelector('.multiplication')
const $result = document.querySelector('.calculator__display-result')
const $equal =  document.querySelector('.calculator__buttons-equal')
const $clean = document.querySelector('.clean')
const $negativePositive = document.querySelector('.button-negative-or-positive')

let calculate = ''
const clean = ''


$buttonsNumbers.forEach(function($button){
    $button.addEventListener('click', function(){
        calculate = calculate + $button.textContent 
        $inputCalculate.value = calculate.replaceAll(' ', '')
    })
})

$buttonsOperator.forEach(function($button){
    $button.addEventListener('click', function(){
        calculate = calculate + $button.textContent
        $inputCalculate.value = calculate.replaceAll(' ', '')
    })
})

$divison.addEventListener('click', function(){
    calculate = calculate + '/'
    $inputCalculate.value = calculate
})

$multiplication.addEventListener('click', function(){
    calculate = calculate + '*'
    $inputCalculate.value = calculate
})

$equal.addEventListener('click', function(){
    if(calculate !== ''){
        $result.textContent = eval(calculate)
    }else{
        $result.textContent = 'NADA PARA CALCULAR'
    }
})

$negativePositive.addEventListener('click', function(){
    $inputCalculate.value = $inputCalculate.value != '-' ? '-' +  $inputCalculate.value : $inputCalculate.value
    console.log($inputCalculate.value)
})

$clean.addEventListener('click', function(){
    $inputCalculate.value = ''
    $result.innerHTML = ''
    $equal.textContent = ''
    document.location.reload()
})