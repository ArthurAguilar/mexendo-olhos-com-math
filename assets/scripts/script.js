olhos = document.querySelectorAll('.olho')

let posX;
let posY;

window.addEventListener('mousemove', (event)=>{
    posX = event.clientX
    posY = event.clientY

    

    olhos.forEach((olho) => {
        const olhoX = olho.getBoundingClientRect().left + olho.offsetWidth / 2;
        const olhoY = olho.getBoundingClientRect().top + olho.offsetHeight / 2;

        const deltaX = posX - olhoX;
        const deltaY = posY - olhoY;
        
        const rotation = Math.atan2(deltaY, deltaX) * 180 / Math.PI

        olho.style.transform = `rotate(${rotation}deg)`
    })
})
