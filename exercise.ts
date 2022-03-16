import MessageReceiver from "./src/receiver";

let sample = [
    '!Send!:[IvanisHere]',
    '*Time@:[Itis5amAlready]',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]

const execute = (arr: string[]) => {
    arr.forEach((word: string) => {
        MessageReceiver(word)
    })
}

execute(sample);