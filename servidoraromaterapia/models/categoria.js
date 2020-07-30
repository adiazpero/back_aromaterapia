const getCategoria = (idAceite) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT categorias.categoria FROM categorias INNER JOIN tbi_aceite_categoria ON tbi_aceite_categoria.idcategoria = categorias.id WHERE tbi_aceite_categoria.idaceite = ?', [idAceite], (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        })
    })
}