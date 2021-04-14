/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
describe('data types in typescript', () => {
  xit('demo', () => {
    const a = 10; const b = 20;

    const answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('implicit typing', () => {
      const x = 'Cat';
      let food = 'Tacos';


      const y = 12;

      expect(typeof x).toBe('string');
      expect(typeof y).toBe('number');
      console.log('Jeff Was Here');

    });

    it('explicit typing', () => {
      let x: number;
      let y: string;
      let z: number | string;


      // eslint-disable-next-line prefer-const
      x = 42;

      // eslint-disable-next-line prefer-const
      y = 'Dog';
      z = 42;
      z = 'Cat';


    });
    it('using const', () => {
      const x = 12;

      expect(x).toBe(12);

      // All const means is that you can't reassign the variable to something completely new.

      const friends = ['Billy', 'Sean', 'Amy'];

      friends[2] = 'Jessika';

      // friends = ['Jim', 'Lee'];

      const movie = {
        title: 'Dune',
        director: 'Lynch'
      };

      expect(movie.title).toBe('Dune');

      movie.director = 'Denis Villeneauve';

      // movie = {
      //   title: 'Mullholand Drive',
      //   director: 'Lynch'
      // }

    });

    it('why is var so bad anyhow', () => {

      const age = 22;

      if (age > 21) {
        // eslint-disable-next-line no-var
        var message = 'Old Enough';
      }


      expect(message).toBe('Old Enough');
    });
  });
  describe('literals in typescript', () => {

    describe('string literals', () => {
      it('can use double or single quotes', () => {
        const x = 'Bird';
        // eslint-disable-next-line @typescript-eslint/quotes
        const y = "Bird";

        expect(x).toEqual(y);

        //let author = 'Flannery O\'Connor';
        const author = 'Flannery O\'Connor';
        // eslint-disable-next-line @typescript-eslint/quotes
        const quote = "She said \"Hello!\".";
      });

      it('back ticks', () => {
        const drink = `Beer`;
        expect(drink).toEqual('Beer');

        const myLifeStory = `
        Chapter 1.

        It was a dark and stormy night.
        So I got a beer.
        `;

        const details = `
        <div>Name Here</div>
        <p>OTher stuff </div>`;

        const name = 'Amy';
        const age = 42;

        //const message = 'My friend ' + name + ' is ' + age + ' years old';
        const message = `My friend ${name} is ${age} years old`;
        expect(message).toBe('My friend Amy is 42 years old');

      });

    });


    describe('number literals', () => {
      it('there are various ways to represent a number', () => {


        const bigNumber = 123_888_222_123;
        const favoriteColor = 0xff; // base 16 hexadecimal
        const someBits = 0b1010101;
        const perms = 0o333; // Octal.

        const ageAsString = '051.35';

        const ageAsNumber = parseInt(ageAsString, 10);
        expect(ageAsNumber).toBe(51);

      });

    });

  });

  describe('booleans', () => {

    it('has named booleans', () => {
      let fullTime: boolean;

      fullTime = true;

      expect(fullTime).toBe(true);

      fullTime = false;
      expect(fullTime).toBe(false);

      // fullTime = 0;  // nope. none of this nonsense.

    });
  });
  it('literal unions', () => {
    type AccountType = 'gold' | 'platinum' | 'standard';

    const myAccount: AccountType = 'standard';

    expect(myAccount).toBe('standard');
  });

  // Object literals -> interfaces
  describe('object literals', () => {

    it('has them', () => {
      interface Book {
        title: string;
        author: string;
        numberOfPages: number;
        genre?: 'fiction' | 'non-fiction' | 'fantasy' | 'comic';
      };
      const book: Book = {
        title: 'Walden',
        author: 'Hank Thoreau',
        numberOfPages: 212,
        genre: 'non-fiction'
      };

      const book2: Book = {
        title: 'Nature',
        author: 'Emerson',
        numberOfPages: 312
      };


      expect(book.title).toBe('Walden');
      // eslint-disable-next-line @typescript-eslint/dot-notation
      expect(book['author']).toBe('Hank Thoreau'); // indexer notation

      book.author = 'Henry Thoreau';
      // book.genre = 'Philsophy';
    });
  });
  // array literals -> array functions.
  describe('Array Literals', () => {
    it('will infer data types', () => {
      const favoriteNumbers = [9, 10, 20, 108];

      let friends: string[];
      friends = ['Billy', 'Amy', 'Joe'];
      favoriteNumbers[0] = 3;

      expect(friends[1]).toBe('Amy');
      expect(favoriteNumbers[0]).toBe(3);

      expect(favoriteNumbers).toEqual([3, 10, 20, 108]);

      const friend = { name: 'Bill', age: 42 };
      const friend2 = { name: 'Bill', age: 42 };
      expect(friend).toEqual(friend2);

      // const favoriteColores: (string | number)[] = ['Blue', 0xff, 'Green'];
      const favoriteColores: Array<string | number> = ['Blue', 0xff, 'Green'];

      const second = favoriteColores[1];



    });

    it('arrays are mutable BUT DON\'T DO THIS', () => {
      // mutable you can change stuff.
      const friends = ['Billy', 'Amy', 'Joe'];
      friends[0] = 'Sean';
      friends.push('Byron');
      expect(friends[3]).toBe('Byron');
      friends.pop();
      friends.unshift('Roy');
      expect(friends[0]).toBe('Roy');
      // immutable means you cannot change things

      const name = 'Jeff';
      const upperName = name.toUpperCase();
      expect(name).toBe('Jeff');
      expect(upperName).toBe('JEFF');
    });

    it('altering arrays immutably', () => {
      const friends = ['Billy', 'Amy', 'Joe'];
      const newFriends = ['Byron', ...friends];
      expect(newFriends).toEqual(['Byron', 'Billy', 'Amy', 'Joe']);
      const friendsWithoutAmy = newFriends.filter(friend => friend !== 'Amy');
      expect(friendsWithoutAmy).toEqual(['Byron', 'Billy', 'Joe']);

      const firstIsByron = friendsWithoutAmy[0] === 'Byron';

    });

  });
  // Function literals -> functins on classes which methods.
  describe('function literals', () => {
    it('has three basic ways to create a function. we use two of them.', () => {

      expect(add(2, 2)).toBe(4);

      // named functions
      // int add(int a, int b) {}
      function add(a: number, b: number): number {
        return a + b;
      }


      // Arrow functions (anonymous functions)
      const subtract = (a: number, b: number): number => a - b;

      const divide = (a: number, b: number): number => {
        if (b === 0) {
          console.log('YOU TRIED TO OPEN A BLACK HOLE');
          return 0;
        } else {
          return a / b;
        }
      };
      /// named anonymous function.
      // eslint-disable-next-line space-before-function-paren
      const multiply = function (a: number, b: number): number {
        return a * b;
      };

      expect(subtract(10, 2)).toBe(8);
      expect(multiply(3, 3)).toBe(9);

    });

  });


});

