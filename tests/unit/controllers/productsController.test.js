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
      expect(response.json.calledWith(result)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });
  });
});