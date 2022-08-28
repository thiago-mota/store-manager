const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('getAllSales Controller', () => {
  const request = {};
  const response = {};

  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();
  
  afterEach(() => sinon.restore());

  it('Retorna um array vazio', async () => {
    const resultMock = [];
    sinon.stub(salesService, 'getAllSales').resolves(resultMock);

    await salesController.getAllSales(request, response);

    expect(response.json.calledWith(resultMock)).to.be.equal(true);
  });

  it('Retorna um array com as vendas', async () => {
    const resultMock = [[
      {
        "saleId": 1,
        "date": "2022-08-28T01:54:56.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 1,
        "date": "2022-08-28T01:54:56.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 2,
        "date": "2022-08-28T01:54:56.000Z",
        "productId": 3,
        "quantity": 15
      }
    ]]

    sinon.stub(salesService, 'getAllSales').resolves(resultMock);
    await salesController.getAllSales(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(resultMock)).to.be.equal(true);

  });

});

describe('getSalesById Controller', () => {
  
    const request = {};
    const response = {};
    request.params = { id: 1 };

    const resultMock = [[
      {
        "date": "2022-08-28T01:54:56.000Z",
        "productId": 1,
        "quantity": 5
      },
    ]]

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

  afterEach(() => sinon.restore());

  it('Retorna uma venda', async () => {
    sinon.stub(salesService, 'getSaleById').resolves(resultMock)
    await salesController.getSalesById(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(resultMock)).to.be.equal(true);
  });

  it('Se não houver vendas', async () => {
    const resultNullMock = [];
    sinon.stub(salesService, 'getSaleById').resolves(resultNullMock);
    await salesController.getSalesById(request, response);

    expect(response.status.calledWith(404)).to.be.equal(true);
    expect(response.json.calledWith({ message: 'Sale not found' })).to.be.equal(true)
  });
});

describe('deleteSale Controller', () => {
  const request = {};
  const response = {};


  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();

  afterEach(() => sinon.restore());


  it('Se a sale existir', async () => {
    request.params = { id: 1 };
    const resultMock = { xablau: 'xablau' };
    sinon.stub(salesService, 'deleteSale').resolves(resultMock);

    await salesController.deleteSale(request, response);

    expect(response.status.calledWith(204)).to.be.equal(true);
  });
});