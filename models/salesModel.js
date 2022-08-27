const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection
    .execute(
        `SELECT 
    sale.id AS saleId,
    sale.date AS date,
    sale_product.product_id AS productId,
    sale_product.quantity AS quantity
        FROM
    StoreManager.sales AS sale
        INNER JOIN
    StoreManager.sales_products AS sale_product ON sale.id = sale_product.sale_id`,
);

  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection
    .execute(`SELECT
    sale.date AS date,
    sale_product.product_id AS productId,
    sale_product.quantity AS quantity
FROM
    StoreManager.sales AS sale
        INNER JOIN
    StoreManager.sales_products AS sale_product ON sale.id = sale_product.sale_id
WHERE
    sale.id = ?`, [id]);

  return result;
};

module.exports = { getAllSales, getSaleById };
