let ativarCodeEx09 = document.getElementById('ativarCodeEx09')
let res9 = document.getElementById('res09')
let array9 = []
let soma9 = 0
let media = 0
ativarCodeEx09.addEventListener('click', () => {
    let vetor = parseFloat(document.getElementById('inputCode9').value)
    if ((vetor == null) || (vetor == '') || (isNaN(vetor)) || (vetor < 0) || (vetor > 10)) {
        alert('Digite um número válido!')
        return
    } else{
    if(array9.length < 7){
        array9.push(vetor)
    }
    if(array9.length < 7){
        res9.innerHTML = `O vetor digitado até agora foi: ${array9}`
    }
    if(array9.length == 7){
        mediaAritmetica()
        res9.innerHTML = `O o vetor ordenado fica: ${media} <br>`
    } 
}
})
function mediaAritmetica(){
    array9.forEach(e => {
        soma9 += e
    })
    media = soma9 / array9.length
}