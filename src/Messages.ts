// Importing
import { FailedIntro } from './Errors/Errors';
import Input from './Input'
//

class Message {
    constructor() {

    }

    public static async alreadyMember(): Promise<boolean> {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        const userAlreadyRegisterd: string = await Input.text(`Are you already registerd? [Y/N]`);

        if (userAlreadyRegisterd.toLocaleLowerCase() === 'y')
            return true;
        else if (userAlreadyRegisterd.toLocaleLowerCase() === 'n')
            return false;

        throw new FailedIntro('You entered a wrong choice')
    }

    public static registration(): void {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
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