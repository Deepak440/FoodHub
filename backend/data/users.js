import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin user',
        email : 'admin@example.com',
        password : bcrypt.hashSync( "1234", 10),
        
    },
    {
        name : 'Depa user',
        email : 'depa@example.com',
        password : bcrypt.hashSync( "1234", 10) ,
    
    },
    {
        name : 'thakur user',
        email : 'thakur@example.com',
        password : bcrypt.hashSync( "1234", 10) ,
        
    },

]

export default users;