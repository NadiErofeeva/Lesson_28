const auto = document.getElementById('auto')
const result = document.querySelector('.result')

const getData = () => fetch('cars.json')
    .then(response => response.json())
    .then(response => addCars(response.cars))
    .catch(error => console.log(error))

const addCars = (cars) => {
    cars.forEach((e) => {
        console.log(e)
        const newEl = document.createElement('option');
        newEl.textContent = e['brand']
        newEl.value = `авто ${e['brand']} ${e['model']} <br>
            цена: ${e['price']}`
        console.log(newEl.textContent)
        console.log(newEl.value)
        auto.append(newEl)
    })

}
auto.addEventListener('change', (e) => {
    result.innerHTML = auto.value;
})

getData();