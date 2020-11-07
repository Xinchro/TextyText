console.log('Starting log')

// TODO
// seperate data logic from visual logic

let log = []
let logDOM = document.createElement('ul')
logDOM.classList.add('log-wrapper')

function createEntryDOM() {
  let element = document.createElement('li')

  element.classList.add('log-entry')

  return element
}

function addEntry(message) {
  if(!message) throw 'No message to add to log'

  let entry = createEntryDOM()

  entry.innerText = message

  log.push(message)
  logDOM.append(entry)

  return log
}

function removeEntry(index) {
  if(!index || typeof index !== 'number') throw 'Can\'t remove entry, bad index'

  log.splice(index, 1)

  return log
}

function constructOutput(message) {
  if(!message) throw 'No message to add to log'

  let constructedMessage = `[${nowDate()}] ${message}`

  return constructedMessage
}

function add(message) {
  if(!message) throw 'No message to add to log'
  addEntry(constructOutput(message))
  return log
}

function remove(message) {
  if(!message) throw 'No message to remove from log'
  let index = log.findIndex((entry => entry.includes(message)))
  console.log(message)

  if(index === -1) throw `Could not find correct entry to remove ${message}`

  removeEntry(index)

  return log
}

function nowDate() {
  let now = new Date()
  return `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`
}

function getLog() {
  return log
}

function getLogDOM() {
  return logDOM
}


add('potato1')
add('potato2')
add('potato3')
add('potato4')
add('potato5')
setTimeout(()=>add('potato6'), 2000)

remove('potato3')

// link to other outputs?
// link to enemies in some compendium?