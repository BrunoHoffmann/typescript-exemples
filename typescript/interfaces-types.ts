interface Profession {
  name: string;
}

// se for type no lugar de interface não posso fazer merge como to fazendo

interface Profession {
  salary: number;
}

const dev: Profession = {
  name: 'john',
  salary: 2500,
}

type Stringify2<T> = { // nao posso fazer isso com interface
  [P in keyof T]: string;
}

