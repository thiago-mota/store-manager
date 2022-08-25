const { expect } = require("chai");
const { describe } = require("mocha");
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');
const sinon = require('sinon');

describe('getAllProducts', () => {
  afterEach(() => sinon.restore());
  
  const getAllProductsMock = [[
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ]];

  it('Retorna um array', async () => {
    sinon.stub(connection, 'execute').resolves(getAllProductsMock);
    const result = await productsModel.getAllProducts();

    expect(result).to.be.a('array');
  });

  it('O array contém itens do tipo objeto', async () => {
    sinon.stub(connection, 'execute').resolves(getAllProductsMock);
    const result = await productsModel.getAllProducts();

    expect(result[0]).to.be.an('object');
  });

  it('O array retornado contém informações sobre os produtos', async () => {
    const result = await productsModel.getAllProducts();

    expect(result[0]).to.haveOwnProperty('id');
    expect(result[0]).to.haveOwnProperty('name');
  });
});

describe('getProductsByID', () => {
  afterEach(() => sinon.restore());

  const getProductByIdMock = [[
    { id: 1, name: 'Martelo de Thor' },
  ]];

  it('Retorna um array', async () => {
    sinon.stub(connection, 'execute').resolves(getProductByIdMock);
    const result = await productsModel.getProductById();

    expect(result).to.be.a('array')
  });

  it('O array contém um único item', async () => {
    sinon.stub(connection, 'execute').resolves(getProductByIdMock);
    const result = await productsModel.getProductById();

    expect(result).to.have.lengthOf(1);
  });

  it('O array contém itens do tipo objeto', async () => {
    sinon.stub(connection, 'execute').resolves(getProductByIdMock);
    const result = await productsModel.getProductById();

    expect(result[0]).to.be.an('object');
  });

  it('O array retornado contém informações sobre os produtos', async () => {
    const result = await productsModel.getProductById(1);

    expect(result[0]).to.haveOwnProperty('id');
    expect(result[0]).to.haveOwnProperty('name');
  });
});