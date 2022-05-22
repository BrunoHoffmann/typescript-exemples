interface Person {
  name: string;
  age: number;
}

type Stringify<T> = {
  [P in keyof T]: string; // p é as propriedades de T, então T precisa ser um object com propriedades
}

// type Stringify<T> = {
//   readonly [P in keyof T]: string | number; 
// }

const person: Person = {
  name: 'Matheus',
  age: 18,
}

const personPartial: Partial<Person> = {
  name: 'matheus',
}

const personReadonly: Readonly<Person> = {
  name: 'Matheus',
  age: 18,
}

const stringPerson: Stringify<Person> = {
  name: 'Matheus',
  age: '18',
}
