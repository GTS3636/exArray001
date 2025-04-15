let ativarCodeEx02 = document.getElementById('ativarCodeEx02')
let res2 = document.getElementById('res02')
ativarCodeEx02.addEventListener('click', () => {
    let vetor2 = [ 1, 2, 3, 4, 5 ]
    let num2 = parseFloat(document.getElementById('inputCode2').value)
    for (let i = 0; i < vetor2.length; i++) {
        vetor2[i] *= Number(num2)
    }
    if ((num2 == null) || (num2 == '') || (isNaN(num2))) {
        alert('Digite um número válido!')
        res2.innerHTML = ''
        return
    } else {
        res2.innerHTML = `O vetor multiplicado por ${num2} é: ${vetor2}`;
        console.log(vetor2)
    }
});