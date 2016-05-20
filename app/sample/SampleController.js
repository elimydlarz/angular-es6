import EngineClient from '../services/EngineClient';

export default class SampleController {
  constructor() {
    this.getApplication = (applicationId) => new EngineClient().getApplication(applicationId);
    this.getText = () => 'Hello everybody or some such string.';
  }
}
