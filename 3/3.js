const input = document.querySelector("input")
const chatArea = document.getElementById("chat-area")
const btn = document.querySelector(".input__btn")
const btnGeo = document.querySelector(".geo__btn")

let websocket = new WebSocket("wss://echo.websocket.org/")
websocket.onopen = function (e) {
    console.log("CONNECTED")
}

websocket.onclose = function (e) {
    console.log("DISCONNECTED")
}

websocket.onmessage = function (e) {
    sendMessage('<span style="color: blue;">RESPONSE: ' + e.data + '</span>')
}

websocket.onerror = function (e) {
    sendMessage('<span style="color: red;">ERROR:</span> ' + e.data)
}

function sendMessage(message) {
    let mes = document.createElement("p")
    mes.style.wordWrap = "break-word"
    mes.innerHTML = message
    chatArea.appendChild(mes)
}

	const error = () => {
		let err = document.createElement("p")
		err.innerHTML = "ERROR"
		chatArea.appendChild(err)
	}
	
	const success = (position) => {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude
		sendMessage(`<a href="https://www.openstreetmap.org/#map=5/${latitude}/${longitude}" target="_blank">Геолокация</a>`);
	}
	
	btn.addEventListener('click', () => {
		const value = document.querySelector('input').value;
		sendMessage("SENT:" + value)
		websocket.send(value)
	})

	btnGeo.addEventListener('click', () => {
		if (!navigator.geolocation) {
			status.textContent = 'Геолокация не поддерживается вашим браузером';
		} else {
			status.textContent = 'Определение местоположения';
		}
	
		navigator.geolocation.getCurrentPosition(success, error)
	})
	