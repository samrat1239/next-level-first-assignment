
const formatChange = (value: number | string | boolean) => {
    if (typeof value === "number") {
        return (value * 10);
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === "boolean") {
        return !value;
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`);
    }
}

const getLength = (value: string | any[]) => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return Array.length;
    }
}

type Book = {
    title: string;
    rating: number;
}

let books: Book[] = [
    { title: "Book A", rating: 4 },
    { title: "Book B", rating: 5 },
    { title: "Book C", rating: 3 },

];

function filterByRating(books: Book[]) {
    return books.filter(item => item.rating >= 4)
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const users: User[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive)
}

interface BookList {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
const printBookDetails = (book: BookList) => {
    const haveAvailble = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${haveAvailble}`
    );
}

const myBook: BookList = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


const getUniqueValues = (array1: number[], array2: number[]): number[] => {
    const result: number[] = [];

    for (let i = 0; i < array1.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array1[i]) {
                found = true;
                break;
            }
        }
        if (!found) result[result.length] = array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array2[i]) {
                found = true;
                break;
            }
        }
        if (!found) result[result.length] = array2[i];
    }

    return result;
};


const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products.reduce((total, product) => {
        const mainPrice = product.price * product.quantity;

        const discountAmount = product.discount
            ? mainPrice * (product.discount / 100)
            : 0;

        const finalPrice = mainPrice - discountAmount;

        return total + finalPrice;
    }, 0);
};





