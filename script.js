let form = document.getElementById("parent-form")
    let CityName = document.getElementById("City-Name")
    let CityTemp = document.getElementById("City-Temp")
    let apikey = "aa91d9338bd666a334beabb564632a43"
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        CityTemp.innerHTML=""
        // console.log("city name is",CityName.value)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName.value}&appId=${apikey}&units=metric`
        fetch(url)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((res) => {
                console.log(res)
                if (res.cod === '404') {
                    alert('City name not found')

                }
                else {
                    let { main, name, sys } = res
                    let div = document.createElement('div')
                    div.classList.add('city')
                    const result = `
                            <h1>${name}</h1>
                            <p>
                                Temp:${main.temp} <sup>0</sup>C <br>
                                Country:${sys.country}
                            </p>
            `
                    div.innerHTML = result
                    CityTemp.appendChild(div)

                }

            })

    })