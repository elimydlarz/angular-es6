import SampleController from '../../app/sample/SampleController';
import * as EngineClient from '../../app/services/EngineClient';

describe('SampleController', () => {
  const applicationId = 'APPLICATION ID';
  const application = {
    name: 'Kateryna',
  };
  let clientGetApplication;

  beforeEach(() => {
    clientGetApplication = jasmine.createSpy('client getApplication').and.returnValue(application);
    spyOn(EngineClient, 'default').and.returnValue({
      getApplication: clientGetApplication,
    });
  });

  it('getApplication returns an application', () => {
    expect(new SampleController().getApplication(applicationId)).toBe(application);
    expect(clientGetApplication).toHaveBeenCalledWith(applicationId);
  });
});
