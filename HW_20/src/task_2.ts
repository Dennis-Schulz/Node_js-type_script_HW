class Library {
  static totalBooks: number = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.addBook();
  }

  addBook(): void {
    Library.totalBooks++;
  }
}

const Book1 = new Library('Book1');
const Book2 = new Library('Book2');

console.log(`Общее количество книг в библиотеке:' ${Library.totalBooks}`);
