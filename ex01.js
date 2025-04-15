// Faça um algoritmo que faça o produto por 5 de todos os elementos do vetor
// empregando a lógica do laço “for”, dado o vetor1 = [ 1, 2, 3, 4, 5 ] e apresente na tela para o
// usuário. Os dados serão inseridos diretamente no código pelo programador, ou seja, não
// haverá entrada de dados por parte do usuário.
// Observação: vetor1 * 5
let res01 = document.getElementById("res01")
let iniciarEx01 = document.getElementById('iniciarEx01')
iniciarEx01.addEventListener('click', () => {
    let vetor1 = [ 1, 2, 3, 4, 5 ]
    for(let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] * 5
    }
    res01.innerHTML = `<br>O produto do vetor = [ 1, 2, 3, 4, 5 ] foi: ${vetor1}`
})