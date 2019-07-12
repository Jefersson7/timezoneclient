function calculateTime() {
  var resultElement = document.getElementById('calculatedTime')
  var time = document.getElementById('time').value
  var zone = document.getElementById('zone').value
  resultElement.innerHTML = ''

  axios.post(`http://timeutczone.herokuapp.com/?time=${time}&zone=${zone}`, {}).then(res => {
    resultElement.innerHTML = `La hora en UTC es ${res.data.response.time}`
  })
  .catch(err => {
    resultElement.innerHTML = `Algo salió mal, no se pudo obtener la hora convertida`
  })
}
