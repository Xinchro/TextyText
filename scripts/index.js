document.querySelector('#game').innerText = ''

// TODO
// seperate data logic from visual logic

function addScript(filepath) {
  let newScript = document.createElement("script")
  newScript.src = `/scripts/${filepath}.js`
  document.head.append(newScript)
}
// helpers
addScript("ui")

// add UI functionality
addScript("log")
addScript("keys")
addScript("phone")

// main game loops
addScript("main")
