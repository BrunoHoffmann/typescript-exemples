// function printTypes(value: number | string) {
//   if (typeof value === 'number') {
    
//   } else if (typeof value === 'string') {

//   }
// }

interface Developer {
  name: string;
  language: string;
}

interface Designer {
  name: string;
  software: string;
}

const developer: Developer = { name: 'Mateus', language: 'Python' };
const designer: Designer = { name: 'Mateus', software: 'Photoshop' };

function isDeveloper(person: Developer | Designer): person is Developer {
  return 'language' in person;
}

function printSkill(person: Developer | Designer): void {
  // if ('language' in person) {
  if (isDeveloper(person)) {
    console.log(person.language);
  } else {
    console.log(person.software);
  }
}