const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('getAllProducts Controller', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Retorna array vazio', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      const result = [];

      sinon.stub(productsService, 'getAllProducts').resolves(result);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });

    it('Retorna array com produtos', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      const resultMock = {
        "id": 1,
        "name": "Martelo de Thor",
      };
      
      sinon.stub(productsService, 'getAllProducts').resolves(resultMock);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(resultMock)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });
  });
});

describe('getProductById Controller', () => {
  const request = {};
  const response = {};
  request.params = { id: 1 };

  const resultMock = {
    "id": 1,
    "name": "Martelo de Thor",
  };

  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();

  afterEach(() => sinon.restore());

  it('Retorna um produto', async () => {
    sinon.stub(productsService, 'getProductById').resolves(resultMock)
    await productsController.getProductById(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(resultMock)).to.be.equal(true);
  });

  it('Não foi possível encontrar o produto', async () => {
    const resultNullMock = null;
    sinon.stub(productsService, 'getProductById').resolves(resultNullMock);
    await productsController.getProductById(request, response);

    expect(response.status.calledWith(404)).to.be.equal(true);
    expect(response.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
  });
});

describe('registerNewProduct Controller', () => {
  const request = {};
  const response = {};
  const resultMock = { id: 4, name: 'Armadura do Homem de Ferro' };
  request.body = { name: 'Armadura do Homem de Ferro' }


  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'registerNewProduct').resolves(resultMock);
  });

  afterEach(() => sinon.restore());

  it('Retorna um produto', async () => {
    await productsController.registerNewProduct(request, response);
    console.log(response.json);
    
    expect(response.status.calledWith(201)).to.be.equal(true);
    expect(response.json.calledWith(resultMock)).to.be.equal(true);
  });

  it('O produto é um objeto com as propriedades "id" e "name"', async () => {
    await productsController.registerNewProduct(request, response);

    expect(response.json).to.haveOwnProperty('id');
    expect(response.json).to.haveOwnProperty('name');
  });
});