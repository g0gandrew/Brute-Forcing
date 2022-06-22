"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Data_1 = require("./Data");
const Helpers_1 = require("./Helpers");
const DataList_1 = require("./DataList");
const thread_sleep_1 = require("thread-sleep");
//
class Menu {
    constructor() {
        this.dataList = new DataList_1.default();
        this.closed = false;
    }
    async display() {
        // Clearing console
        console.clear();
        //
        const choice = parseInt(await Helpers_1.default.input(`- Menu - \n Select one option: \n 1. Display Variables list \n 2. Create Variables list \n 3. Modify Variables List \n 4. Delete Variables list  \n 5. Brute Force Menu  \n Choice: `));
        await this.menu(choice);
    }
    async menu(choice) {
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
                this.exit();
                break;
            }
            default: {
                if (await Helpers_1.default.question('Wrong choice! Would you like to try again? [Y/N]: ', { clearConsole: true }))
                    await this.display();
                else
                    Helpers_1.default.closeApplication(0);
            }
        }
    }
    async displayList(options) {
        const dataList = this.dataList.getList();
        if (dataList.length) {
            let setDeelay = false;
            let deelayTime = 3000; // default sleep time
            console.clear();
            if (options != undefined && options.deelay)
                setDeelay = true;
            if (options != undefined && options.time)
                deelayTime = options.time;
            dataList.forEach((data, i) => {
                console.log(`[${i + 1}] Name: ${data.name}\n[${i + 1}] Data: ${data.data}\n`);
            });
            if (setDeelay)
                (0, thread_sleep_1.default)(deelayTime);
        }
        else if (await Helpers_1.default.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
            await this.menu(2);
    }
    async createList() {
        if (this.dataList.getList().length) {
            console.clear();
            console.log(`You already have a list! You can modify or delete it anytime!`);
            (0, thread_sleep_1.default)(3000);
            return;
        }
        let noLists = parseInt(await Helpers_1.default.input(`How many fields do you want to create?: `));
        for (let i = 1; i <= noLists; ++i) {
            // Getting data && info from user
            const fieldName = await Helpers_1.default.input(`[${i}] Insert the field name: `);
            const listData = await Helpers_1.default.input(`[${i}] Insert the data: `);
            //
            // Creating and inserting the data
            const data = new Data_1.default(fieldName);
            data.setData(listData);
            this.dataList.insertData(data);
            //
        }
    }
    async modifyList() {
        if (this.dataList.getList().length) {
            await this.displayList({ deelay: true, time: 2000 });
            const elementsName = (await Helpers_1.default.input(`Enter the fields names that you want to modify (Separated by comma): `)).split(",");
            await this.modifyListData(elementsName);
            console.log(`List was modified!`);
            (0, thread_sleep_1.default)(1500);
        }
        else if (await Helpers_1.default.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
            await this.menu(2);
    }
    deleteElements(names) {
        names.forEach(name => {
            this.dataList.data.forEach((e, i, array) => {
                if (e.name === name)
                    array.splice(i, 1);
            });
        });
    }
    async modifyListData(elementsName) {
        for (let elementName of elementsName) {
            for (let data of this.dataList.data) {
                if (data.name === elementName) {
                    const newName = await Helpers_1.default.input(`Enter element new name: `);
                    const newData = await Helpers_1.default.input(`Enter new data as array separated by comma: `);
                    data.name = newName;
                    data.setData(newData);
                }
            }
        }
    }
    async deleteList() {
        if (this.dataList.getList().length) {
            if (await Helpers_1.default.question(`Do you want to delete the entire list? [Y/N]: `))
                this.dataList.clean();
            else {
                await this.displayList({ deelay: true, time: 3000 });
                const elementsToBeDeleted = [];
                const noDeletedElements = parseInt(await Helpers_1.default.input(`How many elements are you going to delete?: `));
                for (let i = 1; i <= noDeletedElements; ++i) {
                    elementsToBeDeleted.push(await Helpers_1.default.input(`Delete field with name: `));
                }
                this.deleteElements(elementsToBeDeleted);
                console.log(`Items deleted!`);
                (0, thread_sleep_1.default)(1500);
            }
        }
        else if (await Helpers_1.default.question(`No list created! Would you like to create one? [Y/N]: `, { clearConsole: true }))
            await this.menu(2);
    }
    exit() {
        this.closed = true;
        return;
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map