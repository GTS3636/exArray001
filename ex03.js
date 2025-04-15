// Faça um algoritmo que faça a soma do escalar 4 de todos os elementos do vetor
// empregando a lógica do laço “for”, dado o vetor1 = [ 1, 2, 3, 4, 5 ] e apresente na tela para o
// usuário. Os dados serão inseridos diretamente no código pelo programador, ou seja, não
// haverá entrada de dados por parte do usuário.
// Observação: vetor1 + 4
let res03 = document.getElementById("res03")
let iniciarEx03 = document.getElementById('iniciarEx03')
iniciarEx03.addEventListener('click', () => {
    let vetor3 = [ 1, 2, 3, 4, 5 ]
    for(let i = 0; i < vetor3.length; i++) {
        vetor3[i] = vetor3[i] + 4
    }
    res03.innerHTML = `<br>A soma escalar do vetor = [ 1, 2, 3, 4, 5 ] é: ${vetor3}`
})