// Faça um algoritmo que leia os dados de 2 vetores de 5 elementos digitados pelo usuário
// pelo front end e faça o produto entre estes vetores.
// Observação: vetor1 * vetor2


let ativarCodeEx07 = document.getElementById('ativarCodeEx07')
let res7 = document.getElementById('res07')
let array = []
let soma = 0
ativarCodeEx07.addEventListener('click', () => {
    let vetor = parseFloat(document.getElementById('inputCode7').value)
    if ((vetor == null) || (vetor == '') || (isNaN(vetor))) {
        alert('Digite um número válido!')
        return
    } else{
    if(array.length < 7){
        array.push(vetor)
    }
    if(array.length < 7){
        res7.innerHTML = `O vetor digitado até agora foi: ${array}`;
    }
    if(array.length > 7){
        array.shift()
    }
    if(array.length == 7){
        array.forEach((item) => {
            soma += item
        })
        res7.innerHTML = `Os vetores digitados foram: ${array}<br>`
        res7.innerHTML += `O total somado é: ${soma} <br>`
    } 
}
})