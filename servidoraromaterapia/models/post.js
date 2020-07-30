const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from posts', (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        })
    });
};



const getById = (pPostId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from posts where id = ?', [pPostId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows[0]);
        })
    });
}






module.exports = {
    getAll: getAll,
    getById: getById
}