
const toggleBtn = document.getElementById('btn')
const mobileMenu = document.getElementById('mobile')
const closeBtn = document.getElementById('closeBtn')

toggleBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden')

})
closeBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('hidden')

})
