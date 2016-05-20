import engineClient from '../services/EngineClient';

export default () => ({
  getApplication: (applicationId) => engineClient().getApplication(applicationId),
  getText: () => 'Hello everybody or some such string.',
});
