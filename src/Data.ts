class Data {
    public name: string;
    public data: Array<string> = [];

    getData() {
        return this.data;
    }
    
    setData(rawData: string) {
        const processedData: Array<string> = rawData.split(',');
        this.data = processedData;
    } 

    constructor(name: string) {
        this.name = name;
    }
}


export default Data;