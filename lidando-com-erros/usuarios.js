function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
}

const usuarios = new Map();

usuarios.set('Lua', 'Admin');
usuarios.set('Laura', 'Admin');
usuarios.set('Carlos', 'User');
usuarios.set('Marcy', 'Admin');

console.log(getAdmins(usuarios));