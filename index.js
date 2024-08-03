//base by Giddy Tennor 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @GiddyTennor
//Instagram: giddy_tennor
//Telegram: t.me/GiddyTennor
//GitHub: @Tennormodz
//WhatsApp: +254104245659
//want more free bot scripts? https://youtube.com/@gideonowino-gc2ry?si=5zCh-IZzv_JBMUyp

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
