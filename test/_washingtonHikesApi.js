const chai = require('chai');
const chaiHttp = require('chai-http');
const { setupServer } = require('../routes');
const hikeData = require('../db/data/2021-04-25_wta_hike_data.json');

chai.use(chaiHttp);
chai.should();

describe('Washington Hikes API Server', () => {
    const server = setupServer()
    const request = chai.request(server);

  describe('GET /washingtonhikes/api/hikes', () => {
      it('should return all hikes', async () => {
          const res = await chai.request(server).get('/washingtonhikes/api/hikes');
          const hikeArray = JSON.parse(res.text);
          
          res.should.have.status(200);
          hikeArray.length.should.equal(hikeData.length);
        });
        
        it('should take params and return a single hike', async () => {
            const res = await chai.request(server).get('/washingtonhikes/api/hikes/3dde0ded-4c25-46a8-b425-66dbc790ca95');

            res.should.have.status(200);
            JSON.parse(res.text).title.should.equal('Mailbox Peak');
    });
  });
  
    describe('POST & DELETE /washingtonhikes/api/hikes', () => {
        it('should be able to post & delete a hike', async () => {
            const myHike = { title: 'My Awesome Secret Hike' };
            const resId = await chai.request(server).post('/washingtonhikes/api/hikes').send(myHike);
            const id = resId.text;

            const resHike = await chai.request(server).get(`/washingtonhikes/api/hikes/${id}`);
            JSON.parse(resHike.text).title.should.equal(myHike.title);

            const resDel = await chai.request(server).delete(`/washingtonhikes/api/hikes/${id}`);
            resDel.should.have.status(200);
        });
    });
});