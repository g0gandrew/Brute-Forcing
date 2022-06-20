import { ReadLine } from "readline";

class Message {
    private static readline: ReadLine;

    constructor() {
        Message.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    public static alreadyMember(): boolean {
        let userAlreadyRegisterd: boolean = false;
        this.readline.question(`Are you already registerd? [Y/N]`, (answer: string) => {
            userAlreadyRegisterd = answer === 'Y' ? true : false;
        })

        return userAlreadyRegisterd;
    }

    public static registration(): void {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        console.log('Before we start, we must register you in our database, for legal purposes!');
    }

    public static sucessfulAuthenticated(): void {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
    }
    public static userWantsToTryAgain(): boolean {
        let userWantsToTryAgain: boolean = false;
        console.log(`Incorrect authentication data!`);
        this.readline.question(`Would you like to try again? [Y/N]`, (answer: string) => {
            userWantsToTryAgain = answer === 'Y' ? true : false;
        })

        return userWantsToTryAgain;
    }
}

export default Message;