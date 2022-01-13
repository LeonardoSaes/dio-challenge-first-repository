// retorna o nome só de quem tem o value 'Admin'
function getAdmins(map){
    let admins = []
    for( [ keys, value] of map){
        if(value === 'Admin'){
            admins.push(keys)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Leonardo', 'Admin')
usuarios.set('Rafa', 'Admin')
usuarios.set('Robert', 'User')


console.log(getAdmins(usuarios))

