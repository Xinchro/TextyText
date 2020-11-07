let ui = {
  game: document.querySelector('#game')
}

function addUI(element, parent) {
  if(parent) {
    parent.append(element)
  } else {
    ui.game.append(element)
  }
  if(element.id) ui[element.id] = document.querySelector(`#${element.id}`)
}

function createElement(dataObj) {
  if(!dataObj.type) throw "No element type"

  // create the element and delete the type
  let element = document.createElement(dataObj.type)
  delete dataObj['type']

  // add all the keys and their respective values
  Object.keys(dataObj).forEach((key) => {
    element[key] = dataObj[key]
  })

  return element
}

addUI(createElement({
  type: 'div',
  id: 'log',
  classList: 'log',
  innerText: 'This is the log',
}), ui.game)

addUI(createElement({
  type: 'div',
  id: 'keys',
  classList: 'keys',
  innerText: 'These are the keys',
}), ui.game)

addUI(createElement({
  type: 'div',
  id: 'phone',
  classList: 'phone',
  innerText: 'This is the phone',
}), ui.game)
