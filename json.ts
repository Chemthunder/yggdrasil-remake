class JsonHelper {

    static createJson(x1?: any, x2?: any, x3?: any) {
        return {
            first: x1,
            second: x2,
            third: x3
        }
    }
}

let a = JsonHelper.createJson("a", "b", "c");