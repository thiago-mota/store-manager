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
      const resultExecute = [];
      sinon.stub(productsService, 'getAllProducts').resolves(resultExecute);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });

    it('Retorna array preenchido', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      const resultExecute = {
        "id": 1,
        "name": "Martelo de Thor",
      };
      
      sinon.stub(productsService, 'getAllProducts').resolves(resultExecute);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(resultExecute)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });
  });
});