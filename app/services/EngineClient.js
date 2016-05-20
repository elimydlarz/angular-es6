import unirest from '../../node_modules/unirest';

export default class EngineClient {
  constructor() {
    this.getApplication = (applicationId) => unirest.get(applicationId);
  }
}
