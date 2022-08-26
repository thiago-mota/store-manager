const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('getAllProducts Controller', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('retorna array vazio', async function () {
      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(productsService, 'getAllProducts').resolves(resultExecute);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });

    it('retorna array cheio', async function () {
      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = {
        "id": 1,
        "name": "Martelo de Thor",
      };
      
      Sinon.stub(productsService, 'getAllProducts').resolves(resultExecute);

      await productsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(resultExecute)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });
  });
});