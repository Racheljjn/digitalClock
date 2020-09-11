
function rotate (hours,minutes,seconds) {
  const secondHand = document.querySelector('.secondHand')
  const minuteHand = document.querySelector('.minuteHand')
  const hourHand = document.querySelector('.hourHand')

 
 secondHand.style.transform = `rotate(${seconds * 6}deg)`
 minuteHand.style.transform = `rotate(${minutes * 6}deg)`
 hourHand.style.transform = `rotate(${hours * 30}deg)`
 
}

function timer () {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  

  if (seconds % 60 < 10) {
    seconds = '0' + seconds
  }
  if (minutes % 60 < 10) {
    minutes = '0' + minutes
  }
  if (hours % 24 < 10) {
    hours = '0' + hours
  }

  const clock = document.querySelector('.current')
  clock.innerHTML = hours + ':' + minutes + ':' + seconds
  rotate(hours,minutes,seconds)

  
}

setInterval(timer, 1000)
