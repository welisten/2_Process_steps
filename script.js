const   progressEl = document.querySelector("#progress"),
        circleEl   = document.querySelectorAll('.circle'),
        prevBtn    = document.querySelector('#prev'),
        nextBtn    = document.querySelector('#next');

let currentActive = 1

nextBtn.addEventListener('click', () =>{
    currentActive++

    if(currentActive > circleEl.length){
        currentActive = circleEl.length
    }
     
    updateCircles()
})

prevBtn.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    updateCircles()
})

function updateCircles() {


    circleEl.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const activeEl = document.querySelectorAll('.active')
    progressEl.style.width = ((activeEl.length - 1) / (circleEl.length - 1) * 100) + '%'

    if(currentActive === 1){
        prevBtn.disabled = true
    } else if(currentActive === circleEl.length){
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
        prevBtn.disabled = false
    }
}