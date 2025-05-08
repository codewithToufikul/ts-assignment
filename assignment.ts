function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else if (toUpper == undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    public getInfo(): string{
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle{
    private model: string;

    constructor (make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    public getModel(): string{
        return `Model: ${this.model}`;
    }
}


function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    }else{
        return value*2;
    }
}


interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }

    return products.reduce((maxProduct, currentProduct)=> currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
  }


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }else{
        return "Weekday";
    }
  }


  async function squareAsync(n: number): Promise<number>{
    if(n < 0 ){
        throw new Error("Negative number not allowed")
    }

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(n * n);
        }, 1000);
    })
  }
