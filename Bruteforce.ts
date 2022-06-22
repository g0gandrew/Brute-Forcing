// Importing
import { handleError } from "./src/Errors/Errors";
import Message from "./src/Messages";
import User from "./src/User"
import Menu from './src/Menu';
import sleep from "thread-sleep";
import Helpers from "./src/Helpers";
//

class BruteForce {
    private user: User;
    constructor() {
        this.user = new User();
    }


    private async menu() {
        console.clear();
        Message.bruteforce();
        const choice: number = parseInt(await Helpers.input(`- Menu - \n Select one option: \n 1. Create Brute Force Config \n 2. Start Brute Force \n Choice: `));
        sleep(5000);
        Helpers.closeApplication(0);
    }

    private displayList() {

    }

    private bruteForce() {
    }

    public async start() {
        let active = true;
        await Message.alreadyMember() ? await this.user.authentication() : await this.user.registration(); // Displaying session
        const menu = new Menu();
        while (active) {
            try {
                if (!menu.closed)
                    await menu.display();
                else
                    await this.menu();
            } catch (e: any) {
                console.log(e)
                handleError(e);
                active = false;
                return;
            }
        }
    }
}

new BruteForce().start();