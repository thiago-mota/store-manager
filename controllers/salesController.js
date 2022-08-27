const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.sales;');

  return result;
};
