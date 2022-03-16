import converter from "./asciiConverter"

const MessageReceiver = (message: string) => {
    let splittedMsg:string[] = message.split(':')
    let command:string = splittedMsg[0]
    let msg:string = splittedMsg[1]
    const regexCommand = new RegExp(/^\![A-Z]{1}[a-z]{3,}!$/)
    const regexMsg = new RegExp(/^\[[ A-Za-z0-9_@./#&+-]{8,}\]$/)

    // console.log('is valid?', regexCommand.test(command), regexMsg.test(msg), msg) <-- check 
    if (regexCommand.test(command) === true && regexMsg.test(msg) === true) {
        // let trimmedCommand = command.trim().replaceAll('!'); <--- no compiler config so I wont be using this for now.
        let trimmedCommand = command.trim().split('!').join('')
        let encryptedMsg = converter(msg)
        return console.log(trimmedCommand, ":", encryptedMsg)
    } else {
        console.log('The message is invalid')
    }
}

export default MessageReceiver;

