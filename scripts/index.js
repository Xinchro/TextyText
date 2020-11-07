document.querySelector('#game').innerText = ''

function addScript(filepath) {
  let newScript = document.createElement("script")
  newScript.src = `/scripts/${filepath}.js`
  document.head.append(newScript)
}

addScript("main")
addScript("ui")

addScript("log")
addScript("keys")
addScript("phone")
