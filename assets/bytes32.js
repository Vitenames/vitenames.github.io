const asciiToHex = function (str) {
	if (!str) return '0x00'

	let hex = ''
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i)
		const n = code.toString(16)
		hex += n.length < 2 ? '0' + n : n
	}

	return '0x' + hex
}

const hexToAscii = function (hex) {
	let str = ''
	let i = 0

	if (hex.substring(0, 2) === '0x') {
		i = 2
	}

	for (; i < hex.length; i += 2) {
		const code = parseInt(hex.substr(i, 2), 16)
		str += String.fromCharCode(code)
	}
  
	return str
}
