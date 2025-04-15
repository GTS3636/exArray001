// Faça um algoritmo que leia os dados de 2 vetores de 5 elementos digitados pelo usuário
// pelo front end e faça o produto entre estes vetores.
// Observação: vetor1 * vetor2


let ativarCodeEx05 = document.getElementById('ativarCodeEx05')
let res5 = document.getElementById('res05')
let array1 = []
let array2 = []
let multi = 0
let multiArray = []
ativarCodeEx05.addEventListener('click', () => {
    let vetor1 = parseFloat(document.getElementById('inputCode51').value)
    let vetor2 = parseFloat(document.getElementById('inputCode52').value)
    if ((vetor1 == null) || (vetor1 == '') || (isNaN(vetor1)) || (vetor2 == null) || (vetor2 == '') || (isNaN(vetor2))) {
        alert('Digite um número válido!')
        return
    } else{
    if(array1.length < 5){
        array1.push(vetor1)
    }
    if(array2.length < 5){
        array2.push(vetor2)
    }
    if(array1.length < 5 && array2.length < 5){
        res5.innerHTML = `Os vetores digitados até agora foram: ${array1} e ${array2}`;
    }
    if(array1.length > 5){
        array1.shift()
    }
    if(array1.length == 5 && array2.length == 5){
        for(let i = 0; i < array1.length; i++){
            multi = array1[i] * array2[i]
            multiArray[i] = array1[i] * array2[i]
        } 
        res5.innerHTML = `Os vetores digitados foram: VETOR 1 ${array1} e VETOR 2 ${array2} <br>`
        res5.innerHTML += `O total multiplicado é: ${multi} <br>`
        res5.innerHTML += `O total multiplicado singurlamente é: ${multiArray}`
    } 
}
})