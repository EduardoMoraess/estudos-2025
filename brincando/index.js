const button = document.getElementById('fugitivo')
const container = document.querySelector('.container')

button.addEventListener('mousermouve', ()=>{
    const containerRect = container.getBoundingClientReact()
    const buttonRect = button.getBoundingClientRect()

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

})