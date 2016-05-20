import EngineClient from '../services/EngineClient';

export default class SampleController {
  getApplication(applicationId) {
    return new EngineClient(this.$http).getApplication(applicationId);
  }

  getText() {
    return 'Hello everybody or some such string.';
  }
}
