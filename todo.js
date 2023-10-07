const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const btn = document.getElementById('btn-add')

btn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('mi ban gri')
    } else {
        const li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.append(li)
        const span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.append(span)
    }
    inputBox.value = ''
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
})