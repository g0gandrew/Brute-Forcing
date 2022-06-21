// Importing
import { FailedIntro } from './Errors/Errors';
import {question} from './Helpers'
//

class Message {
    constructor() {

    }

    public static async alreadyMember(): Promise<boolean> {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
        const answer: boolean = await question('Are you already registerd? [Y/N]')
        return answer;
    }

    public static registration(): void {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
    }

    public static sucessfulAuthenticated(): void {
        console.log('Welcome to Brute Force Application @ Gog Andrei');
    }

    
}

export default Message;