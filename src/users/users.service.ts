export class UsersService {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
    gender?: string;
    isMarried: boolean;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
      gender: 'Male',
      isMarried: true,
      password: 'hashed_password_1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 25,
      gender: 'Female',
      isMarried: false,
      password: 'hashed_password_2',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
      gender: 'Female',
      isMarried: true,
      password: 'hashed_password_3',
    },
    {
      id: 4,
      name: 'Petar Djorovic',
      email: 'petar@example.com',
      age: 36,
      isMarried: false,
      password: 'hashed_password_4',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    email: string;
    age: number;
    gender?: string;
    isMarried: boolean;
    password: string;
  }) {
    this.users.push(user);
  }

  deleteUser(id: number) {
    return (this.users = this.users.filter((user) => user.id !== id));
  }
}
