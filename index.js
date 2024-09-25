const mode = document.getElementById('mode');
const body = document.querySelector('body');
const card = document.querySelector('.card');
const card_span = document.querySelector('.card-status');
mode.addEventListener('click',() =>{
    if(body.style.backgroundColor === 'var(--Yellow)'){
        body.style.backgroundColor = 'var(--Yellow-Dark)';
        body.style.transition = 'ease-in-out 0.5s';
        card.style.transition = 'ease-in-out 0.5s';
        card.style.backgroundColor = 'var(--white-Dark)';
        card_span.style.color = 'var(--White)';
        card_span.style.transition = 'ease-in-out 0.5s'
        card_span.style.backgroundColor = 'var(--Yellow-Dark)';
        mode.textContent = '☀';
        mode.style.transition = 'ease-in-out 0.5s';
    }
    else{
        body.style.backgroundColor = 'var(--Yellow)';
        card.style.backgroundColor = 'var(--White)';
        card_span.style.color = 'var(--Gray-950)';
        card_span.style.backgroundColor = 'var(--Yellow)';
        mode.textContent = '🌙';
    }
})