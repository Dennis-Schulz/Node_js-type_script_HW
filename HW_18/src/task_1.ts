type Admin = {
  name: string;
  permission: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser ={
    name: 'Alexey',
    email: 'f8V9o@example.com',
    permission: ['read', 'write'],
}