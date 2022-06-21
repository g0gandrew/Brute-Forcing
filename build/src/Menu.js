"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing
const Data_1 = require("./Data");
const Helpers_1 = require("./Helpers");
const DataList_1 = require("./DataList");
//
class Menu {
    constructor() {
        this.dataList = new DataList_1.default();
    }
    async display() {
        // Clearing console
        console.clear();
        //
        const choice = parseInt(await Helpers_1.Input.text(`- Menu - \n Select one option: \n 1. Display Variables list \n 2. Create Variables list \n 3. Modify Variables List \n 4. Delete Variables list  \n 5. Start Brute Forcing \n Choice: `));
        await this.menu(choice);
    }
    async menu(choice) {
        switch (choice) {
            case 1: {
                await this.displayList({ deelay: true });
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
                if (await (0, Helpers_1.question)('Wrong choice! Would you like to try again? [Y/N]: ', { clearConsole: true }))
                    await this.display();
                else
                    (0, Helpers_1.closeApplication)(0);
            }
        }
    }
    async displayList(options) {
        if (this.dataList.getList().length)
            this.dataList.getList().forEach((e, i) => {
                console.clear(); // clearing console
                console.log(`List[${i}]: e`);
                if (typeof options != undefined && (options === null || options === void 0 ? void 0 : options.deelay) === true)
                    setTimeout(() => {
                        this.display();
                    }, 5000);
                else
                    this.display();
            });
        else if (await (0, Helpers_1.question)(`No list created! Would you like to create one? [Y/N]: `), { clearConsole: true })
            await this.menu(2);
        else
            await this.display();
    }
    async createList() {
        let noLists = await Helpers_1.Input.text(`How many fields do you want to create?: `);
        for (let i = 1; i <= noLists; ++i) {
            // Getting data && info from user
            const fieldName = await Helpers_1.Input.text(`[${i}] Insert the field name: `);
            const listData = await Helpers_1.Input.text(`[${i}] Insert the data: `);
            //
            // Creating and inserting the data
            const data = new Data_1.default(fieldName);
            data.setData(listData);
            this.dataList.insertData(data);
            //
        }
        await this.display();
    }
    async modifyList() {
        if (this.dataList.getList().length)
            this.displayList();
        else if (await (0, Helpers_1.question)(`No list created! Would you like to create one? [Y/N]: `), { clearConsole: true })
            await this.menu(2);
        else
            await this.display();
    }
    async deleteList() {
        if (this.dataList.getList().length)
            this.dataList.clean();
        else {
            if (await (0, Helpers_1.question)(`No list created! Would you like to create one? [Y/N]: `), { clearConsole: true })
                await this.menu(2);
            else
                await this.display();
        }
    }
    bruteforce() {
        // save in DB
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map