document.addEventListener('click', e => e.preventDefault())

// menu

const btnOpenMenu = document.querySelector('.open-all-option')
const allOptionMenu = document.querySelector('.all-option')
const btnCloseMenu = document.querySelector('.close')


btnOpenMenu.addEventListener('click', () => {
    allOptionMenu.classList.toggle('click-option')
})

btnCloseMenu.addEventListener('click', () => {
    allOptionMenu.classList.toggle('click-option')
})

// count S 

const btnOptionS = document.querySelector('.option-s')
const countSectionS = document.querySelector('.calculator-s')
const firstInputS = document.querySelector('.input-first-s')
const secondInputS = document.querySelector('.input-second-s')
const btnCountS = document.querySelector('.send-s')
const errorTextS = document.querySelector('.error-s')
const countS = document.querySelector('.count-s')
const resultS = document.querySelector('.result-s')
const dataS = document.querySelector('.data-s')

btnOptionS.addEventListener('click', (e) => {
    countSectionS.classList.toggle('click-option')
})

btnCountS.addEventListener('click', () => {
    const valueFirst = firstInputS.value
    const valueSecond = secondInputS.value
    const result = valueFirst * valueSecond

    if(firstInputS.value == '' || secondInputS.value == ''){
        errorTextS.textContent = "Pola nie mogą być puste"
    } else {
        errorTextS.textContent = ''
        // countS.textContent = `U: ${valueFirst}I: ${valueSecond}U = ${valueFirst} * ${valueSecond} = ${result}`
        dataS.innerHTML = `Dane:<br>U: ${valueFirst}<br>I: ${valueSecond}`
        countS.textContent = `U = ${valueFirst} * ${valueSecond} = ${result}`
        resultS.textContent = `U wynosi: ${result}VA`

        setTimeout(() => {
            errorTextS.textContent = ''
            dataS.textContent = ''
            countS.textContent = ''
            resultS.textContent = ''
        }, 20000)
    }
})

// count Q

const btnOptionQ = document.querySelector('.option-q')
const countSectionQ = document.querySelector('.calculator-q')
const firstInputQ = document.querySelector('.input-first-q')
const secondInputQ = document.querySelector('.input-second-q')
const btnCountQ = document.querySelector('.send-q')
const errorTextQ = document.querySelector('.error-q')
const countQ = document.querySelector('.count-q')
const resultQ = document.querySelector('.result-q')
const dataQ = document.querySelector('.data-q')


btnOptionQ.addEventListener('click', () => {
    countSectionQ.classList.toggle('click-option')
})

btnCountQ.addEventListener('click', () => {
    const firstValue = firstInputQ.value
    const secondValue = secondInputQ.value
    const result = Math.sqrt((firstValue * firstValue) - (secondValue * secondValue)).toFixed(2)

    if(firstInputQ.value == '' || secondInputQ.value == ''){
        errorTextQ.textContent = "Coś źle uzupełniłeś"
    } else {
        dataQ.innerHTML = `Dane:<br>S: ${firstValue}<br>P: ${secondValue}`
        countQ.innerHTML = `Q = ^S<sup>2</sup> - P<sup>2</sup> = ^${firstValue}<sup>2</sup> - ${secondValue}<sup>2</sup> = ${result}`
        resultQ.textContent = `Q wynosi ${result}VAr`
    }
})

// count I

const btnOptionI = document.querySelector('.option-i')
const countSectionI = document.querySelector('.calculator-i')
const firstInputI = document.querySelector('.input-first-i')
const secondInputI = document.querySelector('.input-second-i')
const thirstInputI = document.querySelector('.input-thirst-i')
const btnCountI = document.querySelector('.send-i')
const errorTextI = document.querySelector('.error-i')
const countI = document.querySelector('.count-i')
const resultI = document.querySelector('.result-i')
const dataI = document.querySelector('.data-i')

btnOptionI.addEventListener('click', () => {
    countSectionI.classList.toggle('click-option')
})

btnCountI.addEventListener('click', () => {
    const firstValue = firstInputI.value 
    const secondValue = secondInputI.value 
    const thirstValue = thirstInputI.value
    const result = firstValue / (secondValue * thirstValue)

    if(firstInputI.value == '' || secondInputI.value == '' || thirstInputI.value == ''){
        errorTextI.textContent = "Coś źle uzupełniłeś"
    } else {
        dataI.innerHTML = `Dane<br>P: ${firstValue}<br>U: ${secondValue}<br>cosᵠ: ${thirstValue}`
        countI.textContent = `I = P / U * cosᵠ = ${firstValue} / ${secondValue} * ${thirstValue} = ${result.toFixed(2)}A`
        resultI.textContent = `I wynosi: ${result.toFixed(2)}A`
    }
}) 

// count IR


const btnOptionIr = document.querySelector('.option-ir')
const countSectionIr = document.querySelector('.calculator-ir')
const firstInputIr = document.querySelector('.input-first-ir')
const secondInputIr = document.querySelector('.input-second-ir')
const thirstInputIr = document.querySelector('.input-thirst-ir')
const btnCountIr = document.querySelector('.send-ir')
const errorTextIr = document.querySelector('.error-ir')
const countIr = document.querySelector('.count-ir')
const resultIr = document.querySelector('.result-ir')
const dataIr = document.querySelector('.data-ir')

btnOptionIr.addEventListener('click', () => {
    countSectionIr.classList.toggle('click-option')
})

btnCountIr.addEventListener('click', () => {
    const firstValue = firstInputIr.value 
    const secondValue = secondInputIr.value 
    const result = firstValue * secondValue

    if(firstInputIr.value == '' || secondInputIr.value == ''){
        errorTextIr.textContent = "Coś źle uzupełniłeś"
    } else {
        dataIr.innerHTML = `Dane:<br>cosᵠ: ${firstValue}<br>I: ${secondValue}`
        countIr.innerHTML = `I<span>R<span> = cosᵠ * I = ${firstValue} * ${secondValue} = ${result.toFixed(2)}A`
        resultIr.innerHTML = `I<span>R wynosi: ${result.toFixed(2)
        }A`
    }
})


// count IL

const btnOptionIl = document.querySelector('.option-il')
const countSectionIl = document.querySelector('.calculator-il')
const firstInputIl = document.querySelector('.input-first-il')
const secondInputIl = document.querySelector('.input-second-il')
const thirstInputIl = document.querySelector('.input-thirst-il')
const btnCountIl = document.querySelector('.send-il')
const errorTextIl = document.querySelector('.error-il')
const countIl = document.querySelector('.count-il')
const resultIl = document.querySelector('.result-il')
const dataIl = document.querySelector('.data-il')

btnOptionIl.addEventListener('click', () => {
    countSectionIl.classList.toggle('click-option')
})

btnCountIl.addEventListener('click', () => {
    const firstValue = firstInputIl.value 
    const secondValue = secondInputIl.value 
    const result = Math.sqrt((firstValue * firstValue) - (secondValue * secondValue))

    if(firstInputIl.value == '' || secondInputIl.value == ''){
        errorTextIl.textContent = 'Coś źle uzupełniłeś'
    } else {
        dataIl.innerHTML = `Dane<br>I: ${firstValue}<br>I<span>R</span>: ${secondValue}`
        countIl.innerHTML = `I<span>L</span> = ^I<sup>2</sup> - I<span>R<span><sup>2</sup> = ^${firstValue}<sup>2</sup> - ${secondValue}<sup>2</sup> = ${result.toFixed(2)}A`
        resultIl.innerHTML = `I<span>L</span> wynosi: ${result.toFixed(2)}A`
    }
})

// Count Xc 

// const btnOptionXc = document.querySelector('.option-xc')
// const countSectionXc = document.querySelector('.calculator-xc')
// const firstInputXc = document.querySelector('.input-first-xc')
// const secondInputXc = document.querySelector('.input-second-xc')
// const btnCountXc = document.querySelector('.send-xc')
// const errorTextXc = document.querySelector('.error-xc')
// const countXc = document.querySelector('.count-xc')
// const resultXc = document.querySelector('.result-xc')
// const dataXc = document.querySelector('.data-xc')

// btnOptionXc.addEventListener('click', () => {
//     countSectionXc.classList.toggle('click-option')
// })

// btnCountXc.addEventListener('click', () => {
//     const firstValue = firstInputXc.value
//     const secondValue = secondInputXc.value
//     const result = Math.sqrt((firstValue * firstValue) - (secondValue * secondValue)).toFixed(2)

//     if(firstInputXc.value == '' || secondInputXc.value == ''){
//         errorTextXc.textContent = "Coś źle uzupełniłeś"
//     } else {
//         dataXc.innerHTML = `Dane:<br>Z: ${firstValue}<br>R: ${secondValue}`
//         countXc.innerHTML = `X<span>C</span> = ^Z<sup>2</sup> - R<sup>2</sup> = ^${firstValue}<sup>2</sup> - ${secondValue}<sup>2</sup> = ${result}`
//         resultXc.innerHTML = `X<span>C</span> wynosi ${result}VAr`
//     }
// })




// 

btnOptionS.addEventListener('click', () => {
    countSectionQ.classList.remove('click-option')
    countSectionI.classList.remove('click-option')
    countSectionIr.classList.remove('click-option')
    countSectionIl.classList.remove('click-option')
})

btnOptionQ.addEventListener('click', () => {
    countSectionS.classList.remove('click-option')
    countSectionI.classList.remove('click-option')
    countSectionIr.classList.remove('click-option')
    countSectionIl.classList.remove('click-option')
})

btnOptionI.addEventListener('click', () => {
    countSectionQ.classList.remove('click-option')
    countSectionS.classList.remove('click-option')
    countSectionIr.classList.remove('click-option')
    countSectionIl.classList.remove('click-option')
})

btnOptionIr.addEventListener('click', () => {
    countSectionQ.classList.remove('click-option')
    countSectionI.classList.remove('click-option')
    countSectionS.classList.remove('click-option')
    countSectionIl.classList.remove('click-option')
})

btnOptionIl.addEventListener('click', () => {
    countSectionQ.classList.remove('click-option')
    countSectionI.classList.remove('click-option')
    countSectionIr.classList.remove('click-option')
    countSectionS.classList.remove('click-option')
})

