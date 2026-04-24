class JsonHelper {
    static createBasicJson(x1?: any, x2?: any, x3?: any) {
        return {
            first: x1,
            second: x2,
            third: x3
        }; 
    }

    static createComplexJson(values: any[]) {
        return {
            values: values
        };
    }

    static convertToJson(value: any): any {
        return {
            value: value
        }
    }
}