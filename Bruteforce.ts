// Importing
import { handleError } from "./src/Errors/Errors";
import Message from "./src/Messages";
import User from "./src/User"
//

class BruteForce {
    private user: User;
    constructor() {
        this.user = new User();
    }

    public async start() {
        let active = true;

        while (active) {
            try {
                await Message.alreadyMember() ? await this.user.authentication() : await this.user.registration();// Displaying session
                active = false;

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