import EngineClient from '../../app/services/EngineClient';

describe('Engine', () => {
  const applicationId = 'APPLICATION ID';
  const response = { name: 'Bird Person' };

  it('application returns an application', () => {
    expect(new EngineClient().getApplication(applicationId)).toEqual(response);
  });
});
