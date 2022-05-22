function merge<First, Second>(obj1: First, obj2: Second): First & Second {
  return { ...obj1, ...obj2 };
};

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: String;
  zipCode: String;
}

const person2: Person = {
  name: 'Bruno',
  age: 21,
}

const address: Address = {
  street: 'Rua mais novo',
  zipCode: '23123131',
}

const personWithAddress: Person & Address = {
  ...person2,
  ...address,
};

const personWithAddress2 = merge(person2, address);