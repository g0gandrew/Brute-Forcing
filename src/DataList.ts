// Importing
import Data from './Data';
//

class DataList {
    public data: Array<Data> = [];

    public getList() {
        return this.data;
    }

    public insertData(data: Data) {
        this.data.push(data);
    }

    public clean() {
        this.data = [];
    }
}

export default DataList;