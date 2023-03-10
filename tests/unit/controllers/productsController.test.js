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

  it('N??o foi poss??vel encontrar o produto', async () => {
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
    
    expect(response.status.calledWith(201)).to.be.equal(true);
    expect(response.json.calledWith(resultMock)).to.be.equal(true);
  });

  it('O produto ?? um objeto com as propriedades "id" e "name"', async () => {
    await productsController.registerNewProduct(request, response);

    expect(response.json).to.haveOwnProperty('id');
    expect(response.json).to.haveOwnProperty('name');
  });
});

describe('deleteProduct Controller', () => {
  const request = {};
  const response = {};
  
  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();
  
  afterEach(() => sinon.restore());
  
  it('Se o produto existir', async () => {
    request.params = { id: 1 };
    const resultMock = { xablau: 'xablau' };
    sinon.stub(productsService, 'deleteProduct').resolves(resultMock);

    await productsController.deleteProduct(request, response);

    expect(response.status.calledWith(204)).to.be.equal(true);
  });

  it('Se o produto n??o existir', async () => {
    request.params = { id: 100 };

    const resultMock = null;
    sinon.stub(productsService, 'deleteProduct').resolves(resultMock);
    await productsController.deleteProduct(request, response);

    expect(response.status.calledWith(404)).to.be.equal(true);
  })
});