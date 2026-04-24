abstract class Refiner<T> {
    protected _objects: T[];

    public constructor() {
        this._objects = [];
    }

    private get objects(): T[] {
        return this._objects;
    }

    public register(created: T): T {
        this.objects.push(created);
        return created;
    }

    public getObjects(): T[] {
        return this._objects;
    }

    public attach(element: T) {
        this.register(element);
    }

    public attachList(elements: T[]) {
        for (let el of elements) {
            this.register(el);
        }
    }
}

class SpriteRefiner extends Refiner<Sprite> {
    public create(img: Image, kind?: number): Sprite {
        return this.register(sprites.create(img, kind));
    }
}