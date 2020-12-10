const subjects = [
  "Ajuda com Software",
  "Ajuda com Hardware",
  "Ajuda com Impressoras",
  "Ajuda com Webcam",
  "Formatação",
  "Programação",
  "Educação",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubjects(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function convertHoursToMinutes(time) {
  const [ hour, minutes ] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubjects,
  convertHoursToMinutes
}