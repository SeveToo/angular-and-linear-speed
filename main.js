const radius1_inp = document.querySelector('#radius1')
const speed1_inp = document.querySelector('#speed1')
const radius2_inp = document.querySelector('#radius2')

const result__button = document.querySelector('.result__button')
const result__content = document.querySelector('.result__content')

// prevent default
result__button.addEventListener('click', (e) => {
  e.preventDefault()
})

console.log(radius1_inp)

result__button.addEventListener('click', () => {
  const radius1 = radius1_inp.value
  const speed1 = speed1_inp.value
  const radius2 = radius2_inp.value

  const speed2 = (speed1 * radius1) / radius2

  const velocity = radius1 * speed1

  const result = `
  <div class="result__solution">
    <p>ω<sub>2</sub> = ${speed2} 
      <span class="result__unit">1/s</span>
    </p>
    <p>
      v = ${velocity}
      <span class="result__unit">m/s</span>
    </p>
  </div>
  `

  result__content.innerHTML = result
})
