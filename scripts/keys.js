console.log("Starting keys")

let keyNames = [
  {
    'text': '1',
    'callback': function () { tempKeyPressed('1') }
  },
  {
    'text': '2',
    'callback': function () { tempKeyPressed('2') }
  },
  {
    'text': '3',
    'callback': function () { tempKeyPressed('3') }
  },
  {
    'text': 'q',
    'callback': function () { tempKeyPressed('q') }
  },
  {
    'text': 'w',
    'callback': function () { tempKeyPressed('w') }
  },
  {
    'text': 'e',
    'callback': function () { tempKeyPressed('e') }
  },
  {
    'text': 'a',
    'callback': function () { tempKeyPressed('a') }
  },
  {
    'text': 's',
    'callback': function () { tempKeyPressed('s') }
  },
  {
    'text': 'd',
    'callback': function () { tempKeyPressed('d') }
  },
  {
    'text': 'z',
    'callback': function () { tempKeyPressed('z') }
  },
  {
    'text': 'x',
    'callback': function () { tempKeyPressed('x') }
  },
  {
    'text': 'c',
    'callback': function () { tempKeyPressed('c') }
  },
  {
    'text': 'ctrl',
    'callback': function () { tempKeyPressed('ctrl') }
  },
  {
    'text': 'shift',
    'callback': function () { tempKeyPressed('shift') }
  },
  {
    'text': 'space',
    'callback': function () { tempKeyPressed('space') }
  },
]

function tempKeyPressed(text) {
  addMessage(`${text} pressed!`)
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