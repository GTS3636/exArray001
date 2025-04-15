let array10 = []
let res10 = document.getElementById("res10")
let iniciarEx10 = document.getElementById('iniciarEx10')
iniciarEx10.addEventListener('click', () => {
    for(let i = 0; i< 5; i++){
        array10[i] = gerarAleatorio(9, 0)
    }
    res10.innerHTML = `<br>O vetor criado foi: ${array10} <br>`
    ordenarCrescente(array10)
    res10.innerHTML += `O vetor ordenado de forma crescente fica: ${array10} <br>`
    ordenarDecrescente(array10)
    res10.innerHTML += `O vetor ordenado de forma decrescente fica: ${array10} <br>`
})
function gerarAleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function ordenarCrescente(array10){
    let valor_atual = 0
        for(i=1;i<array10.length;i++){
            let j = i - 1
            valor_atual = array10[i]
            while(j>=0 && valor_atual < array10[j]){
                array10[j+1]=array10[j]
                j--
            }
            array10[j+1]=valor_atual
        }
}
function ordenarDecrescente(array10){
    let valor_atual = 0
        for(i=1;i<array10.length;i++){
            let j = i - 1
            valor_atual = array10[i]
            while(j>=0 && valor_atual > array10[j]){
                array10[j+1]=array10[j]
                j--
            }
            array10[j+1]=valor_atual
        }
}