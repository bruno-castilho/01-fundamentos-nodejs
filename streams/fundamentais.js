

process.stdin.pipe(process.stdout)

import {Readable} from 'node:stream'

class OneToHundreadStream extends Readable {
    index = 1

    _read(){
        const i = this.index++

        setTimeout(()=>{
            if(i > 100){
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundreadStream().pipe(process.stdout)