// Importing
import { WrongAnswer } from "./Errors/Errors";
const input = require('input');
const sleep = require('thread-sleep');
//

// Importing interfaces
import { IQuestionOptions } from './interfaces';
//

class Helpers {
    public static async question(message: string, options?: IQuestionOptions): Promise<boolean> {
        const response: string = (await input.text(message)).toLocaleLowerCase();
        console.log(response)

        if (typeof options != undefined)
            console.clear();

        if (response === 'y')
            return true;
        else if (response === 'n')
            return false;

        throw new WrongAnswer(`Your answer should be 'Y' or 'N'`);
    }
    public static closeApplication(code: number) {
        process.exit(code)
    }

    public static sleep(time: number) {
        return sleep(time);
    }

    public static async input(message: string): Promise<string> {
        return await input.text(message);
    }
}



export default Helpers;