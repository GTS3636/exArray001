let ativarCodeEx06 = document.getElementById('ativarCodeEx06')
let res6 = document.getElementById('res06')
let array16 = []
let array26 = []
let sub = 0
let subArray = []
ativarCodeEx06.addEventListener('click', () => {
    let vetor1 = parseFloat(document.getElementById('inputCode61').value)
    let vetor2 = parseFloat(document.getElementById('inputCode62').value)
    if ((vetor1 == null) || (vetor1 == '') || (isNaN(vetor1)) || (vetor2 == null) || (vetor2 == '') || (isNaN(vetor2))) {
        alert('Digite um número válido!')
        return
    } else{
    if(array16.length < 5){
        array16.push(vetor1)
    }
    if(array26.length < 5){
        array26.push(vetor2)
    }
    if(array16.length < 5 && array26.length < 5){
        res6.innerHTML = `Os vetores digitados até agora foram: ${array16} e ${array26}`;
    }
    if(array16.length > 5){
        array16.shift()
    }
    if(array26.length > 5){
        array26.shift()
    }
    if(array16.length == 5 && array26.length == 5){
        for(let i = 0; i < array16.length; i++){
            sub = array16[i] - array26[i]
            subArray[i] = array16[i] - array26[i]
        } 
        res6.innerHTML = `Os vetores digitados foram: VETOR 1 ${array16} e VETOR 2 ${array26} <br>`
        res6.innerHTML += `O total subtraido é: ${sub} <br>`
        res6.innerHTML += `O total subtraido singurlamente é: ${subArray}`
    } 
}
})