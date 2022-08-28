const { expect } = require("chai");
const { describe } = require("mocha");
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');
const sinon = require('sinon');

describe('getAllProducts Model', () => {
  const getAllProductsMock = [[
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ]];

  before(() => {
    sinon.stub(connection, 'execute').resolves(getAllProductsMock);
  });

  afterEach(() => sinon.restore());

  it('Retorna um array', async () => {
    const result = await productsModel.getAllProducts();
    expect(result).to.be.a('array');
  });

  it('O array contém itens do tipo objeto', async () => {
    const [result] = await productsModel.getAllProducts();
    expect(result).to.be.an('object');
  });

  it('O array retornado contém informações sobre os produtos', async () => {
    const [result] = await productsModel.getAllProducts();
    expect(result).to.haveOwnProperty('id');
    expect(result).to.haveOwnProperty('name');
  });
});

describe('getProductsByID Model', () => {
  const getProductByIdMock = [[
    { id: 1, name: 'Martelo de Thor' },
  ]];

  before(() => {
    sinon.stub(connection, 'execute').resolves(getProductByIdMock);
  })

  afterEach(() => sinon.restore());

  it('Retorna um objeto', async () => {
    const result = await productsModel.getProductById(1);
    expect(result).to.be.a('object')
  });

  it('O objeto retornado contém informações sobre os produtos', async () => {
    const result = await productsModel.getProductById(1);
    expect(result).to.haveOwnProperty('id');
    expect(result).to.haveOwnProperty('name');
  });
});

describe('registerNewProduct Model', () => {
  const registerNewProductMock = [[
    { id: 1, name: 'Martelo de Thor' },
  ]];

  before(() => sinon.stub(connection, 'execute').resolves(registerNewProductMock))

  afterEach(() => sinon.restore());

  it('Retorna um objeto referente ao produto adicionado', () => {

  });

  it('O objeto retornado contém as propriedades "id" e "name"', async () => {
    const result = await productsModel.registerNewProduct(1);
    expect(result).to.haveOwnProperty('id');
    expect(result).to.haveOwnProperty('name')
  });
});

describe('deleteProduct Model', async () => {
  afterEach(() => sinon.restore());

  it('Se o produto existe', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await productsModel.deleteProduct(1);
    expect(response.affectedRows).to.be.equal(1);
  });

  it('Se o produto não existe', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
    const response = await productsModel.deleteProduct(1);
    expect(response.affectedRows).to.be.equal(0);
  });
});
