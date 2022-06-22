// Importing
import Helpers from './Helpers'
//

class Message {

    public static async alreadyMember(): Promise<boolean> {
        this.bruteforce();
        const answer: boolean = await Helpers.question('Are you already registerd? [Y/N]')
        return answer;
    }

    public static menu(): void {
        console.log(`- Menu - \n Select one option: \n 1. Create Variables list \n 2. Delete list  \n 3. Start Brute Forcing \n Choice: `);
    }

    public static bruteforce() {
        console.log(`
            ██╗░░██╗████████╗████████╗██████╗░  ██████╗░░█████╗░░██████╗███████╗██████╗░
            ██║░░██║╚══██╔══╝╚══██╔══╝██╔══██╗  ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
            ███████║░░░██║░░░░░░██║░░░██████╔╝  ██████╦╝███████║╚█████╗░█████╗░░██║░░██║
            ██╔══██║░░░██║░░░░░░██║░░░██╔═══╝░  ██╔══██╗██╔══██║░╚═══██╗██╔══╝░░██║░░██║
            ██║░░██║░░░██║░░░░░░██║░░░██║░░░░░  ██████╦╝██║░░██║██████╔╝███████╗██████╔╝
            ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝╚═════╝░

        ██████╗░██████╗░██╗░░░██╗████████╗███████╗  ███████╗░█████╗░██████╗░░█████╗░███████╗
        ██╔══██╗██╔══██╗██║░░░██║╚══██╔══╝██╔════╝  ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝
        ██████╦╝██████╔╝██║░░░██║░░░██║░░░█████╗░░  █████╗░░██║░░██║██████╔╝██║░░╚═╝█████╗░░
        ██╔══██╗██╔══██╗██║░░░██║░░░██║░░░██╔══╝░░  ██╔══╝░░██║░░██║██╔══██╗██║░░██╗██╔══╝░░
        ██████╦╝██║░░██║╚██████╔╝░░░██║░░░███████╗  ██║░░░░░╚█████╔╝██║░░██║╚█████╔╝███████╗
        ╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚══════╝  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░╚════╝░╚══════╝
        
                        █▄▄ █▄█   █▀▀ █▀█ █▀▀   ▄▀█ █▄░█ █▀▄ █▀█ █▀▀ █
                        █▄█ ░█░   █▄█ █▄█ █▄█   █▀█ █░▀█ █▄▀ █▀▄ ██▄ █
        `);
    }

    public static registration(): void {
        console.log('Your account data will be stored in our database among your actions - for legal purposes!');
    }

    public static sucessfulAuthenticated(): void {
        console.log(`Successfully connected! Enjoy `)
        Helpers.sleep(2500)
    }
}

export default Message;