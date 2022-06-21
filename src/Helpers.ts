import { WrongAnswer } from "./Errors/Errors";
const input = require('input');

// Importing interfaces
import {IQuestionOptions} from './interfaces';
//


async function question(message: string, options?: IQuestionOptions): Promise<boolean> {
    const response: string = (await input.text(message)).toLocaleLowerCase();
    
    if(typeof options != undefined)
        console.clear();

    if(response === 'y') 
        return true;
    else if(response === 'n')
        return false;
    
    throw new WrongAnswer(`Your answer should be 'Y' or 'N'`);
}

function closeApplication(code: number) {
    process.exit(code)
}

export {input as Input, question, closeApplication};