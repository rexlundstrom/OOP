// const s1 = 'Hello';
// console.log(s1.toUpperCase());

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert('yo');

// console.log(navigator.appVersion);

const book1 = {
    title: 'Book One',
    author: 'Johnny Brown',
    year: 2013,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};


const book2 = {
    title: 'Book Two',
    author: 'Jerry Black',
    year: 2020,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

// console.log(book1.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));

