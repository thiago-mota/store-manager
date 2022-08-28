const { expect } = require("chai");
const { describe } = require("mocha");
const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');
const sinon = require('sinon');

describe('getAllSales Model', () => {
  const getAllSalesMock = [[
    {
      "saleId": 1,
      "date": "2022-08-27T21:26:12.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "saleId": 1,
      "date": "2022-08-27T21:26:12.000Z",
      "productId": 2,
      "quantity": 10
    },
    {
      "saleId": 2,
      "date": "2022-08-27T21:26:12.000Z",
      "productId": 3,
      "quantity": 15
    }
  ]];

  before(() => sinon.stub(connection, 'execute').resolves(getAllSalesMock))
  afterEach(() => sinon.restore());

  it('Retorna um array com as sales', async () => {
    const result = await salesModel.getAllSales();
    expect(result).to.be.a('array')
  });
  
  it('O array contém itens do tipo objeto', async () => {
    const [result] = await salesModel.getAllSales();
    expect(result).to.be.an('object');
  });

  it('O array retornado contém informações sobre as vendas', async () => {
    const [result] = await salesModel.getAllSales();
    expect(result).to.haveOwnProperty('saleId');
    expect(result).to.haveOwnProperty('date');
    expect(result).to.haveOwnProperty('productId');
    expect(result).to.haveOwnProperty('quantity');
  });
});

describe('getSalesById Model', () => {
  const getSalesByIdMock = [[
    {
      "date": "2022-08-27T21:26:12.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "date": "2022-08-27T21:26:12.000Z",
      "productId": 2,
      "quantity": 10
    }
  ]];

  before(() => sinon.stub(connection, 'execute').resolves(getSalesByIdMock))
  afterEach(() => sinon.restore());

  it('Retorna um array', async () => {
    const result = await salesModel.getSaleById(2);
    expect(result).to.be.a('array');
  });

  it('O objeto retornado contém informações sobre os produtos', async () => {
    const result = await salesModel.getSaleById(2);
    expect(result[0]).to.haveOwnProperty('date');
    expect(result[0]).to.haveOwnProperty('productId');
    expect(result[0]).to.haveOwnProperty('quantity');
  });
})

describe('deleteSale Model', () => {
  afterEach(() => sinon.restore());

  it('A venda existe', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await salesModel.deleteSale(1);
    expect(response.affectedRows).to.be.equal(1);
  });

  it('A venda não existe', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
    const response = await salesModel.deleteSale(1);
    expect(response.affectedRows).to.be.equal(0);
  });
});