const { expect } = require("chai");
const { describe } = require("mocha");
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

const sinon = require('sinon');

describe('getAllProducts Service', () => {
  const getAllProductsMock = [[
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ]];

  before(() => {
    sinon.stub(productsModel, 'getAllProducts').resolves(getAllProductsMock);
  });

  afterEach(() => sinon.restore());

  it('Retorna um array', async () => {
    const result = await productsService.getAllProducts();
    expect(result).to.be.a('array');
  });

  it('O array contém itens do tipo objeto', async () => {
    const [result] = await productsService.getAllProducts();
    expect(result).to.be.an('object');
  });

  it('O array retornado contém informações sobre os produtos', async () => {
    const [result] = await productsService.getAllProducts();
    expect(result).to.haveOwnProperty('id');
    expect(result).to.haveOwnProperty('name');
  });
});

describe('getProductsById Service', () => {
  const getProductByIdMock =  { id: 1, name: 'Martelo de Thor' };

  before(() => {
    sinon.stub(productsModel, 'getProductById').resolves(getProductByIdMock);
  })

  afterEach(() => sinon.restore());

  it('Retorna um objeto', async () => {
    const result = await productsService.getProductById(1);
    expect(result).to.be.a('object')
  });

  it('O array retornado contém informações sobre os produtos', async () => {
    const result = await productsService.getProductById(1);
    expect(result).to.haveOwnProperty('id');
    expect(result).to.haveOwnProperty('name');
  });
});

describe('deleteProduct Service', () => {
  afterEach(() => sinon.restore());

  it('O produto é deletado', async () => {
    const resultMock = { id: 1 };
    sinon.stub(productsModel, 'deleteProduct').resolves(resultMock);
    const result = await productsService.deleteProduct(1)

    expect(result).to.be.equal(true);
  });
});

describe('updateProduct Service', () => {
  afterEach(() => sinon.restore());

  it('Atualiza um produto', async () => {
    const resultMock = { id: 1, name: 'Martelo de Thor Revoltado'};
    sinon.stub(productsModel, 'updateProduct').resolves(resultMock);
    const result = await productsService.updateProduct(resultMock);

    expect(result).to.be.equal(true);
  });
});