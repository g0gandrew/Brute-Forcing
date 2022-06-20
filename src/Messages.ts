// Importing
import Input from './Input'
//

class Message {
    constructor() {
    
    }

    public static alreadyMember(): boolean {
        let userAlreadyRegisterd: boolean = false;
        Input.question(`Are you already registerd? [Y/N]`, (answer: string) => {
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
      

        return userWantsToTryAgain;
    }
}

export default Message;