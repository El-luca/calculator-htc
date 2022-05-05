const $buttonsNumbers = document.querySelectorAll('.calculator__buttons-nunber')
const $inputCalculate = document.querySelector('.calculate')
const $buttonsOperator = document.querySelectorAll('.calculator__buttons-operators')
const $divison = document.querySelector('.calculator__buttons-operator-divison')
const $result = document.querySelector('.calculator__display-result')
const $equal =  document.querySelector('.calculator__buttons-equal')
const $clean = document.querySelector('.clean')

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

// $divison.addEventListener('click' ,function(){
//     calculate.innerHtml += '/'
// })

$equal.addEventListener('click', function(){
    if(calculate.textContent !== ''){
        $result.textContent = eval(calculate)
    }else{
        $result.textContent = 'NADA PARA CALCULAR'
    }
})

$clean.addEventListener('click', function(){
    document.location.reload()
})