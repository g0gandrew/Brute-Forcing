// Importing
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
            Message.alreadyMember() ? this.user.registration() : this.user.authentication();
            try {
                this.user.registration(); // Displaying registration session
            } catch (e: any) {
                console.log(e.message);
            }
        }
    }
}

new BruteForce().start();