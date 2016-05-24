import SampleController from '../../../app/sample/SampleController';
import * as EngineClient from '../../../app/services/EngineClient';

describe('SampleController', () => {
  describe('getApplication', () => {
    const applicationId = 'APPLICATION ID';
    const application = {
      name: 'Kateryna',
    };
    const $httpFake = 'pretend $http service';
    let clientGetApplicationSpy;
    let clientConstructorSpy;

    beforeEach(() => {
      clientGetApplicationSpy = jasmine.createSpy('client getApplication')
          .and.returnValue(application);
      clientConstructorSpy = spyOn(EngineClient, 'default').and.returnValue({
        getApplication: clientGetApplicationSpy,
      });
    });

    it('returns an application', () => {
      expect(new SampleController($httpFake).getApplication(applicationId)).toBe(application);
      expect(clientConstructorSpy).toHaveBeenCalledWith($httpFake);
      expect(clientGetApplicationSpy).toHaveBeenCalledWith(applicationId);
    });
  });

  describe('getText', () => {
    it('returns a greeting', () => {
      expect(new SampleController().getText()).toBe('Hello everybody or some such string.');
    });
  });
});
