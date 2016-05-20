import engineClient from '../../app/services/EngineClient';

describe('Engine', () => {
  const applicationId = 'APPLICATION ID';
  const response = { name: 'Bird Person' };

  it('application returns an application', () => {
    expect(engineClient().getApplication(applicationId)).toEqual(response);
  });
});
