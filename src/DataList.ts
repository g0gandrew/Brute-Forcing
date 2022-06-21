// Importing
import Data from './Data';
//

class DataList {
    public lists: Array<Data> = [];

    public getList() {
        return this.lists;
    }

    public insertData(data: Data) {
        this.lists.push(data);
    }

    public clean() {
        this.lists = [];
    }
}

export default DataList;