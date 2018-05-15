import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa3030344c534D2E2EF81746c4fB5140Cd2869625'
);

export default instance;