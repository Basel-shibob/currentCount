const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

function plusCount() {
    let currentCount = Number(document.getElementById('count').innerText)   
    currentCount += 1
    document.getElementById('count').innerHTML = `<h1>${currentCount}</h1>`
}

function minusCount() {
    let currentCount = Number(document.getElementById('count').innerText)   
    currentCount -= 1
    document.getElementById('count').innerHTML = `<h1>${currentCount}</h1>`
}

plus.onclick = () => plusCount()
minus.onclick = () => minusCount()