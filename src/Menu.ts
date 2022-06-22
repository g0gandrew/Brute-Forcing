// Importing
import Data from './Data';
import Helpers, { } from './Helpers';
import DataList from './DataList'
import { IDisplayList } from './interfaces';
import Message from './Messages';
import sleep from 'thread-sleep';
//

class Menu {
    private dataList: DataList = new DataList();

    public async display() {
        // Clearing console
        console.clear();
        //
        const choice: number = parseInt(await Helpers.input(`- Menu - \n Select one option: \n 1. Display Variables list \n 2. Create Variables list \n 3. Modify Variables List \n 4. Delete Variables list  \n 5. Start Brute Forcing \n Choice: `));
        await this.menu(choice)
    }

    private async menu(choice: number): Promise<void> {
        switch (choice) {
            case 1: {
                await this.displayList({ deelay: true, time: 5000 });
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
                await this.deleteList();
                break;
            }
            case 5: {
                this.bruteforce();
                break;
            }
            default: {
                if (await Helpers.question('Wrong choice! Would you like to try again? [Y/N]: ', { clearConsole: true }))
                    await this.display();
                else
                    Helpers.closeApplication(0);
            }
        }
    }

    private async displayList(options?: IDisplayList): Promise<void> {
        const dataList: Array<Data> = this.dataList.getList();
        if (dataList.length) {
            let setDeelay: boolean = false;
            let deelayTime: number = 3000; // default sleep time
            console.clear()

            if (options != undefined && options.deelay)
                setDeelay = true;
            if (options != undefined && options.time)
                deelayTime = options.time;

            dataList.forEach((data, i) => {
                console.log(`[${i + 1}] Name: ${data.name}\n[${i + 1}] Data: ${data.data}\n`)
            })

            if (setDeelay)
                sleep(deelayTime);
        }
        else
            if (await Helpers.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
                await this.menu(2);
    }


    private async createList(): Promise<void> {
        if (this.dataList.getList().length) {
            console.clear();
            console.log(`You already have a list! You can modify or delete it anytime!`);
            sleep(3000);
            return;
        }

        let noLists: number = parseInt(await Helpers.input(`How many fields do you want to create?: `));

        for (let i = 1; i <= noLists; ++i) {

            // Getting data && info from user
            const fieldName: string = await Helpers.input(`[${i}] Insert the field name: `);
            const listData: string = await Helpers.input(`[${i}] Insert the data: `);
            //

            // Creating and inserting the data
            const data = new Data(fieldName);
            data.setData(listData);
            this.dataList.insertData(data);
            //
        }

    }

    private async modifyList(): Promise<void> {
        if (this.dataList.getList().length) {
            await this.displayList({ deelay: true, time: 2000 });
            const elementsName: Array<string> = (await Helpers.input(`Enter the fields names that you want to modify (Separated by comma): `)).split(",");
            await this.modifyListData(elementsName);
            console.log(`List was modified!`);
            sleep(1500);
        }
        else
            if (await Helpers.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
                await this.menu(2);
    }

    private deleteElements(names: Array<string>): void {
        names.forEach(name => {
            this.dataList.data.forEach((e, i, array) => {
                if (e.name === name)
                    array.splice(i, 1);
            })
        })
    }

    private async modifyListData(elementsName: Array<string>): Promise<void> {
        for (let elementName of elementsName) {
            for (let data of this.dataList.data) {
                if (data.name === elementName) {
                    const newName: string = await Helpers.input(`Enter element new name: `);
                    const newData: string = await Helpers.input(`Enter new data as array separated by comma: `);
                    data.name = newName;
                    data.setData(newData);
                }
            }
        }
    }

    private async deleteList(): Promise<void> {
        if (this.dataList.getList().length) {
            if (await Helpers.question(`Do you want to delete the entire list? [Y/N]: `))
                this.dataList.clean();
            else {
                await this.displayList({ deelay: true, time: 3000 });
                const elementsToBeDeleted: Array<string> = [];
                const noDeletedElements: number = parseInt(await Helpers.input(`How many elements are you going to delete?: `));
                for (let i = 1; i <= noDeletedElements; ++i) {
                    elementsToBeDeleted.push(await Helpers.input(`Delete field with name: `));
                }
                this.deleteElements(elementsToBeDeleted);
                console.log(`Items deleted!`);
                sleep(1500)
            }
        }
        else
            if (await Helpers.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
                await this.menu(2);
    }

    private bruteforce() {
        Message.bruteforce();
    }
}



export default Menu;