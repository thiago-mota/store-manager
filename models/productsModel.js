const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products;');
  
  return result;
};

const getProductById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id =?;', [id]);
  
  return result[0];
};

const registerNewProduct = async (name) => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [name]);
  
  return { id: result.insertId, name };
};

const deleteProduct = async (id) => {
  const [result] = await connection
    .execute('DELETE FROM StoreManager.products WHERE id =?;', [id]);
  
  return result;
};

module.exports = { getAllProducts, getProductById, registerNewProduct, deleteProduct };
