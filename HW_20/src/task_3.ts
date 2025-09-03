class Vehicle{
    make: string;
    model: string;
    constructor(make: string, model: string){
        this.make = make;
        this.model = model;
    }
}

class  Motorcycle extends Vehicle{
    type: string;
    constructor(make: string, model: string, type: string){
        super(make, model);
        this.type = type;
    }
}

const motorcycle = new Motorcycle('Honda', 'CBR', 'Sport');
console.log(motorcycle.make);
console.log(motorcycle.model);
console.log(motorcycle.type);