console.log("Game start")

console.log(getLog())
ui.log.innerHTML = ''
ui.log.append(getLogDOM())

ui.keys.innerHTML = ''
ui.keys.append(createKeyGridDOM())
