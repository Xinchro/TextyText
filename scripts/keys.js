console.log("Starting keys")

let keyNames = [
  {
    'text': '1',
    'code': 'Digit1',
    'callback': function () { tempKeyPressed('1') }
  },
  {
    'text': '2',
    'code': 'Digit2',
    'callback': function () { tempKeyPressed('2') }
  },
  {
    'text': '3',
    'code': 'Digit3',
    'callback': function () { tempKeyPressed('3') }
  },
  {
    'text': 'q',
    'code': 'KeyQ',
    'callback': function () { tempKeyPressed('q') }
  },
  {
    'text': 'w',
    'code': 'KeyW',
    'callback': function () { tempKeyPressed('w') }
  },
  {
    'text': 'e',
    'code': 'KeyE',
    'callback': function () { tempKeyPressed('e') }
  },
  {
    'text': 'a',
    'code': 'KeyA',
    'callback': function () { tempKeyPressed('a') }
  },
  {
    'text': 's',
    'code': 'KeyS',
    'callback': function () { tempKeyPressed('s') }
  },
  {
    'text': 'd',
    'code': 'KeyD',
    'callback': function () { tempKeyPressed('d') }
  },
  {
    'text': 'z',
    'code': 'KeyZ',
    'callback': function () { tempKeyPressed('z') }
  },
  {
    'text': 'x',
    'code': 'KeyX',
    'callback': function () { tempKeyPressed('x') }
  },
  {
    'text': 'c',
    'code': 'KeyC',
    'callback': function () { tempKeyPressed('c') }
  },
  {
    'text': 'control',
    'code': 'ControlLeft',
    'callback': function () { tempKeyPressed('ctrl') }
  },
  {
    'text': 'shift',
    'code': 'ShiftLeft',
    'callback': function () { tempKeyPressed('shift') }
  },
  {
    'text': 'space',
    'code': 'Space',
    'callback': function () { tempKeyPressed('space') }
  },
]

function tempKeyPressed(text) {
  addMessage(`${text} pressed!`)
}

document.addEventListener('keyup', keyboardHandler)
function keyboardHandler(event) {
  let keyPressed = keyNames.find((key) => {
    return event.code === key.code
  })
  keyPressed && keyPressed.callback()
}

function createKeyGridDOM(){
  let keyGridDOM = document.createElement('div')
  keyGridDOM.classList = 'key-grid'

  for (let i = 0; i < keyNames.length; i++) {
    const key = keyNames[i];
    keyGridDOM.append(createKeyDOM(key.text, key.callback))
  }

  return keyGridDOM
}

function createKeyDOM(text, callback) {
  let key = document.createElement('button')

  key.innerText = text
  key.classList = 'interaction-key'
  key.onclick = callback

  return key
}