var book = {
    isbn: '9783522202756',
    name: 'Momo', 
    authors: 'Ende',
    publicationDate: '23/02/2021',



    getAuthors: () => { return this.authors;
    },

    setAuthors: () => {
        this.authors = 'Michael Ende';
    },

    setIsbn: () => {
        this.isbn = "9783522202757";  
    },

    getIsbn: () => {
        return this.isbn;
    }
};


const book1 = new book('xxx xxx xxx', 'Liisa', 'aaaa', 'feafa')

console.log(book1.isbn)
console.log(book)

