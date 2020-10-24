const opts = {
	PORT: 12345,
	HOST: '0.0.0.0',
	SAMPLE_RATE: 44100,
	CHANNELS: 2
}

const stream = require('stream')
const net = require('net')
const portAudio = require('naudiodon')

const apis = portAudio.getHostAPIs()
const deviceID = apis.HostAPIs[apis.defaultHostAPI].defaultInput

const audioStream = new portAudio.AudioIO({
	inOptions: {
		channelCount: opts.CHANNELS,
		sampleFormat: portAudio.SampleFormat16Bit,
		sampleRate: opts.SAMPLE_RATE,
		deviceId: deviceID,
		closeOnError: true
	}
})

let outputSocket = null

const server = net.createServer(socket => {
	if (outputSocket)
		outputSocket.destroy()
	
	outputSocket = socket
	console.log(`Socket conectado`)
})

audioStream.on('data', buffer => {
	if (outputSocket)
		outputSocket.write(buffer)
})

audioStream.start()
server.listen(opts.PORT, opts.HOST)