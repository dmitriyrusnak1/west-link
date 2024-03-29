export type UserItem = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status: string;
};

const data: UserItem[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    role: 'Super Admin',
    status: 'Registered',
  },
  {
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alice.smith@example.com',
    role: 'Sales Manager',
    status: 'Invited',
  },
  {
    first_name: 'Bob',
    last_name: 'Johnson',
    email: 'bob.johnson@example.com',
    role: 'Consultant',
    status: 'Registered',
  },
  {
    first_name: 'Emma',
    last_name: 'Williams',
    email: 'emma.williams@example.com',
    role: 'Travel Coordinator',
    status: 'Deleted',
  },
  {
    first_name: 'Michael',
    last_name: 'Brown',
    email: 'michael.brown@example.com',
    role: 'Super Admin',
    status: 'Registered',
  },
  {
    first_name: 'Sophia',
    last_name: 'Miller',
    email: 'sophia.miller@example.com',
    role: 'Sales Manager',
    status: 'Invited',
  },
  {
    first_name: 'David',
    last_name: 'Davis',
    email: 'david.davis@example.com',
    role: 'Consultant',
    status: 'Registered',
  },
  {
    first_name: 'Olivia',
    last_name: 'Jones',
    email: 'olivia.jones@example.com',
    role: 'Travel Coordinator',
    status: 'Deleted',
  },
  {
    first_name: 'James',
    last_name: 'Taylor',
    email: 'james.taylor@example.com',
    role: 'Super Admin',
    status: 'Registered',
  },
  {
    first_name: 'Ava',
    last_name: 'Martin',
    email: 'ava.martin@example.com',
    role: 'Sales Manager',
    status: 'Invited',
  },
];

export default data;