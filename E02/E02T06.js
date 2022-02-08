const book = {
    isbn: '9783522202756',
    name: 'Momo', 
    authors: 'Ende',
    'publicationDate': '23/02/2021',


    getAuthors : function () {
        return this.authors;
    },

    setAuthors : function () {
        book.authors = "Michael Ende"
    },

    getIsbn : function() {
        return this.isbn;
    },

    setIsbn : function() {
        book.isbn = "9783522202757"  
    },
};


const book1 = Object.create(book);

console.log(book1.isbn)
console.log(book)

