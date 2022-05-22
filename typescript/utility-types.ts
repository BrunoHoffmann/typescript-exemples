interface User {
  name: string;
  phone: string;
  email: string;
  password: string;
  age?: number;
}

type UserReadonly = Readonly<User>; // deixa tudo readonly

type UserRequired = Required<User>; // deixa tudo obrigatorio mesmo tendo ?: na property

type UserPartial = Partial<User>; // deixa tudo opcional ou parcial

type UserCredentials = Pick<User, 'email' | 'password'>; // vais pegar so email e password da interface

type UserNo = Omit<User, 'email' | 'password'>; // vais pegar tods exceto email e password

const user: UserPartial = {
  name: 'John',
  phone: '923012 039123',
}

interface Post {
  title: string;
  subtitle: string;
}

type Props = 'sports' | 'nutrition';

type PostsRecord = Record<Props, Post[]>

const POstsMappedBySections: PostsRecord = {
  sports: [
    {
      title: 'espanha',
      subtitle: 'testa',
    },
  ],
  nutrition: [
    {
      title: 'Fastfood',
      subtitle: 'mcdonalts aa',
    },
  ],
}