let userSQL = {
    insert: 'INSERT INTO user_inform(user_name,name,age,sex,phone,email,mark)VALUES(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM user_inform',
    update: 'UPDATE user_inform SET user_name=?,name=?,age=?,sex=?,phone=?,email=?,mark=? WHERE user_id=?',
    delete: 'DELETE FROM user_inform WHERE user_id=?',
    queryById: 'SELECT * FROM user_inform WHERE user_id=?',
};

module.exports = userSQL;