const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection
    .execute('SELECT * FROM StorageManager.products ORDER_BY id');
  
  return result;
};

module.exports = { getAllProducts };
