function setOs(os: string) {
    return (target: any) => {
        console.log(`${os} = ${target}`)
        return class extends target {
            version = os;
        }
    }
}


@setOs('WebOs 3.0')
class LG {
}

let tvLg = new LG()
console.log(tvLg);

@setOs('Android TV 2.1')
class Sony {
}

let tvSony = new Sony()
console.log(tvSony);


function minSize(size: number) {
    return (target: any, key: any) => {
        let valor = target[key];

        const getter = () => valor;
        const setter = (value: number) => {
            if (value < size) {
                console.log(`O tamanho da tela deve ser maior que ${size} polegadas`);
            } else {
                valor = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class Philips {
    @minSize(32)
    size: number;

    constructor(size: number) {
        this.size = size;
    }
}


let philipsTv = new Philips(20);   
console.log(philipsTv)


//

function delay(timer: number) {
    return (target: any, key:string, descriptor: PropertyDescriptor) => {
        console.log(descriptor;)
        let method = descriptor.value;

        descriptor.value = function(...args: any) {
            setTimeout(() => {
                method.apply(TransitionEvent, args)
            });
        }
    }
};

class Timer {
    @delay(2000)
    newTimer(count: number): number {
        if (count === 0) { 
            return 0;
        }
            return 1;
    }
}
