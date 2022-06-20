// Importing
import Input from './Input';
import Data from './Data'
//

class Menu {
    private lists: Array<Data>;
    public display() {
        Input.question(`- Menu - \n Select one option: \n 1. Create Variables list \n 2. Delete list 3. \n Start Brute Forcing`, (choice: number) => {
            switch(choice) {
                case 1: {
                    this.createList();
                    break; 
                }
                case 2: {
                    this.deleteList();
                    break;
                }
                case 3: {
                    this.bruteforce();
                    break;
                }
            }
        });
    }

    private createList() {
        let noLists: number = 0;
        Input.question('How many fields do you want to create?: ', (listsAmount: number) => {
            noLists = listsAmount;
        });

        for(let i = 1; i <= noLists; ++i) {
            let listFieldData: Data;
            Input.question('(1) Field name: ', (fieldName: string) => {
                listFieldData = new Data(fieldName);
             });
            Input.question('Enter array values list: ', (values: string) => {
                listFieldData.setData(values);
            });
        }
    }

    private deleteList() {
        
    }

    private bruteforce(){

    }
}



export default Menu;