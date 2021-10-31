let button = document.getElementById('btn-email')

button.addEventListener('click', ()=>{
    let email = document.getElementById('email')
    let container = document.getElementById('input-container')
    let imgError = document.getElementById('img-error')
    let textError = document.getElementById('error-msg')
    let regex = /\S+@\S+\.\S+/


        if(email.value.trim() === '' || !regex.test(email.value.trim())){
            container.style.borderColor = 'red'
            imgError.style.display = 'inline-block'
            textError.style.display = 'block'
        }else{
            container.style.borderColor = 'var(--var-Desaturated-Red)'
            imgError.style.display = 'none'
            textError.style.display = 'none'
        }

})