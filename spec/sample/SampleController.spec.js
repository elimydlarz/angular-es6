import sampleController from '../../app/sample/SampleController';
import * as engineClient from '../../app/services/EngineClient';

describe('SampleController', () => {
  const applicationId = 'APPLICATION ID';
  const application = {
    name: 'Kateryna',
  };
  let clientGetApplication;

  beforeEach(() => {
    clientGetApplication = jasmine.createSpy('client getApplication').and.returnValue(application);
    spyOn(engineClient, 'default').and.returnValue({
      getApplication: clientGetApplication,
    });
  });

  it('getApplication returns an application', () => {
    expect(sampleController().getApplication(applicationId)).toBe(application);
    expect(clientGetApplication).toHaveBeenCalledWith(applicationId);
  });
});
