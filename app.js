window.addEventListener('scroll', (e)=>{
    if (scrollY > 1000) {
        document.querySelector('.up').style.display = "block"
    }else{
        document.querySelector('.up').style.display = "none"
    }
})

document.querySelector('.up').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

document.querySelector('.search-icon').addEventListener('click', ()=>{
    document.querySelector('.mob-search-form').classList.toggle('mystyle')
})