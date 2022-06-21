// Importing
import Data from './Data';
import {closeApplication, Input, question} from './Helpers';
import DataList from './DataList'
import { IDisplayList } from './interfaces';
//

class Menu {
    private dataList: DataList = new DataList();

    public async display() {
        // Clearing console
        console.clear();
        //

        const choice: number = parseInt(await Input.text(`- Menu - \n Select one option: \n 1. Display Variables list \n 2. Create Variables list \n 3. Modify Variables List \n 4. Delete Variables list  \n 5. Start Brute Forcing \n Choice: `));
        await this.menu(choice)
    }

    private async menu(choice: number): Promise<void> {
        switch(choice) {
            case 1: {
                await this.displayList({deelay: true});
                break; 
            }
            case 2: {
                await this.createList();
                break;
            }
            case 3: {
                await this.modifyList();
                break;
            }
            case 4: {
                this.deleteList();
                break;
            }
            case 5: {
                this.bruteforce();
                break;
            }
            default: {
                if(await question('Wrong choice! Would you like to try again? [Y/N]: ', {clearConsole: true}))
                    await this.display();
                else
                    closeApplication(0);
            }
        }
    }

    private async displayList(options?: IDisplayList): Promise<void> {
        if(this.dataList.getList().length) 
            this.dataList.getList().forEach((e, i) => {
                console.clear() // clearing console
                console.log(`List[${i}]: e`);
                if(typeof options != undefined && options?.deelay === true)
                    setTimeout(() => {
                        this.display();
                    }, 5000)
                else
                    this.display();                    
            })
        else 
            if(await question(`No list created! Would you like to create one? [Y/N]: `), {clearConsole: true}) 
                await this.menu(2);
            else    
                await this.display();
    }

    private async createList() {
        let noLists: number = await Input.text(`How many fields do you want to create?: `);

        for(let i = 1; i <= noLists; ++i) {
            // Getting data && info from user
            const fieldName: string = await Input.text(`[${i}] Insert the field name: `);
            const listData: string = await Input.text(`[${i}] Insert the data: `);
            //

            // Creating and inserting the data
            const data = new Data(fieldName);
            data.setData(listData);
            this.dataList.insertData(data);
            //
        }

        await this.display();
    }
    
    private async modifyList() {
        if(this.dataList.getList().length) 
            this.displayList();
        else
            if(await question(`No list created! Would you like to create one? [Y/N]: `), {clearConsole: true}) 
                await this.menu(2);
            else    
                await this.display();
    }

    private async deleteList() {
        if(this.dataList.getList().length)
            this.dataList.clean();
        else    
        {
            if(await question(`No list created! Would you like to create one? [Y/N]: `), {clearConsole: true}) 
                await this.menu(2);
            else    
                await this.display();
        }
    }

    private bruteforce(){
        // save in DB
    }
}



export default Menu;