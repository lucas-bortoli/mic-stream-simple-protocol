# mic-stream-simple-protocol
Faz stream do microfone padrão do sistema para o app Simple Protocol Player

## Instalação e uso
```
$ git clone https://github.com/pantheonlbs/mic-stream-simple-protocol
$ cd mic-stream-simple-protocol
$ npm install
$ node index.js
```

## Transmitir o áudio do desktop
Essa funcionalidade não é suportada oficialmente, porque a biblioteca `naudiodon` que o projeto depende não suporta gravar o áudio do desktop. No entanto, é possível usar um workaround como o Stereo Mix no Windows, que simula um microfone que transmite o áudio do sistema.

## Uso sobre USB/ADB
É possível enviar o áudio para o smartphone através de um cabo USB usando a funcionalidade de port forwarding do adb. Por exemplo:

```
$ adb reverse tcp:12345 tcp:12345
$ node index.js
```

Aí é só fazer o app Simple Protocol Player conectar no host `localhost:12345`. Esse método resulta na menor latência de áudio possível, além de carregar o smartphone enquanto se escuta, o que é um bônus agradável.
