import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10), //
        isAdmin: true
    },
    {
        name: 'Vaibhav Sharma',
        email: 'vaib@gmail.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Aryan Chowdhary',
        email: 'Aryan@gmail.com',
        password: bcrypt.hashSync('123456', 10),

    }

]
export default users;