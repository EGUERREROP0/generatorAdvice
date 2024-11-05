(() => {
    window.addEventListener('DOMContentLoaded', startApp)
    function startApp() {
        const card = document.querySelector('.card')
        const url = 'https://api.adviceslip.com/advice'

        fetch(url)
            .then(data => data.json())
            .then(response => showAdvice(response.slip))

        function showAdvice(response) {
            console.log(response)

            const div = document.createElement('DIV')
            div.classList.add('result')

            const h5 = document.createElement('H5')
            h5.textContent = `ADVICE # ${response.id}`

            const p = document.createElement('P')
            p.textContent = `"${response.advice}"`

            //Button
            const divImg = document.createElement('DIV')
            divImg.classList.add("btn-img")

            const img = document.createElement('IMG')
            img.classList.add('img')
            img.src = "./images/icon-dice.svg"
            img.onclick = () => refresh()

            divImg.appendChild(img)

            div.appendChild(h5)
            div.appendChild(p)
            div.appendChild(divImg)
            card.appendChild(div)
        }

        function refresh() {
            window.location.href = 'index.html'
        }
    }

})()