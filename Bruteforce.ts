// Importing
import { handleError } from "./src/Errors/Errors";
import Message from "./src/Messages";
import User from "./src/User"
//

class BruteForce {
    private user: User;
    private operationsMade: number = 0;
    constructor() {
        this.user = new User();
    }

    public async start() {
        let active = true;

        while (active) {
            try {
                await Message.alreadyMember() ? await this.user.authentication() : await this.user.registration();// Displaying session

            } catch (e: any) {
                handleError(e);
                return;
            }
        }
    }

    private async importData() {

    }
}

new BruteForce().start();