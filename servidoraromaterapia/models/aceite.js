const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from aceites', (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        })
    })
}

const getAceiteCategoria = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT aceites.nombre, categorias.categoria FROM categorias INNER JOIN tbi_aceite_categoria ON categorias.id = tbi_aceite_categoria.idcategoria INNER JOIN aceites ON tbi_aceite_categoria.idaceite = aceites.id')
    })
}