let form = document.forms.main
let inputs = form.querySelectorAll('#label_inputs input')
let load = document.querySelector('.load')
let cont = document.querySelector('.cont')
let success = document.querySelector('#top')
let err = document.querySelector('#bort')



form.onsubmit = (event) => {
    event.preventDefault();


    let pattern = {
        name: /^[a-z ,.'-]+$/i,
        age: /^(1[89]|[2-9]\d)$/gm,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        about:/^[a-z0-9]+$/i,
        opinion: /^[a-z0-9]+$/i ,
        
    }
    
    
    
    
    
    function validate(regex, field) {
    
    
        if (regex.test(field.value)) {
            field.classList.add('valid')
            field.classList.remove('invalid')
        }
        else {
            field.classList.add('invalid')
            field.classList.remove('valid')
        }
    
    
    }
    
    
    inputs.forEach(input => {
        input.onkeyup = () => {
            validate(pattern [input.name],input)
            
        let img = input.parentElement
        let rasm = img.querySelector('img')
        let text_two = img.querySelector('span p')
        let text_one = img.querySelector('p')
    
    
        if (input.classList.contains('invalid')) {
            input.style.border = "solid 2px red "
            rasm.style.opacity = '1'
            text_two.style.color = 'red'
            text_one.style.color = 'red'
            
    
    
    
    
        }
    
        else {
    
            input.style.border = "solid 2px #2ecc71 "
            rasm.style.opacity = '0'
            text_two.style.color = '#2ecc71'
            text_one.style.color = '#2ecc71'
            
            
        }
    
    
        
    
    
        }
        if (input.classList.contains('valid')){
            
            submit()
        }
    })
    





    let one = 8

    let error = false
    inputs.forEach(inp => {

        let img = inp.parentElement
        let rasm = img.querySelector('img')
        let text_two = img.querySelector('span p')
        let text_one = img.querySelector('p')


        if (inp.value === '') {
            inp.style.border = "solid 2px red "
            rasm.style.opacity = '1'
            text_two.style.color = 'red'
            text_one.style.color = 'red'
            error = true

        }

        
       




    })
}
function submit(params) {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    });
    console.log(user);

}
function set() {

    cont.style.opacity = '1'
    load.style.display = 'none'

}
setTimeout(set, 1500)

function led() {

    cont.style.opacity = '0'
    load.style.display = 'flex'
    setTimeout(led, 1500)
}