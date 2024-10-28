const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", yearPublished: 1954 }
];

const TolkienBooks =books.filter(book => book.author ==="J.R.R. Tolkien" )
const OrwellBook =books.filter(book => book.author ==="George Orwell")
console.log(TolkienBooks)
console.log(OrwellBook)