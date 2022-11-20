const email = document.querySelector("#email")
const form = document.querySelector("#form")

form.addEventListener('submit', (e) =>{
    if(!email.value.includes('@') && email.value ===''){
        alert('email invalido')
        e.preventDefault()
    }
    else{
        alert('check')
    }
})


