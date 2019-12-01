function encryptMessage(message) {
	let encryptedMessage = '';

	let encryptionKey = [
		[],
		[]
	];

	for(let i = 0; i < message.length; i++) {
		encryptionKey[0][i] = i + 1;
	}

	let counterToThree = 1;

	for(let i = 0; i < message.length; i++) {
		switch(counterToThree) {
			case 1:
				encryptionKey[1][i] = i + 2;
				encryptedMessage = encryptedMessage + message[i + 1];
				break;
			case 2:
				encryptionKey[1][i] = i + 2;
				encryptedMessage = encryptedMessage + message[i + 1];
				break;
			case 3:
				encryptionKey[1][i] = i - 1;
				encryptedMessage = encryptedMessage + message[i - 2];
				break;
		}

		if(counterToThree == 3) {
			counterToThree = 1;
		}
		else {
			counterToThree++;
		}
	}

	let result = [encryptedMessage, encryptionKey];

	return result;
}

function decryptMessage(encryptedMessage, encryptionKey) {
	let decryptedMessage = '';

	let counterToThree = 1;

	for(let i = 0; i < encryptedMessage.length; i++) {
		switch(counterToThree) {
			case 1:
				decryptedMessage = decryptedMessage + encryptedMessage[encryptionKey[1][i + 1] - 1];
				break;
			case 2:
				decryptedMessage = decryptedMessage + encryptedMessage[encryptionKey[1][i + 1] - 1];
				break;
			case 3:
				decryptedMessage = decryptedMessage + encryptedMessage[encryptionKey[1][i - 2] - 1];
				break;
		}

		if(counterToThree == 3) {
			counterToThree = 1;
		}
		else {
			counterToThree++;
		}
	}

	return decryptedMessage;
}

let message = "Сообщение";

let result = encryptMessage(message);

message = null;

let encryptedMessage = result[0];

let encryptionKey = result[1];

let decryptedMessage = decryptMessage(encryptedMessage, encryptionKey);

console.log('Зашифрованное сообщение ↓');
console.log(encryptedMessage);
console.log('Ключ шифрования ↓');
console.log(encryptionKey);
console.log('Расшифрованное сообщение ↓');
console.log(decryptedMessage);