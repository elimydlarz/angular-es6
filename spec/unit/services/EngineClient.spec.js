import EngineClient from '../../../app/services/EngineClient';

describe('Engine', () => {
  const applicationId = 'APPLICATION ID';
  const response = { name: 'Bird Person' };
  let $httpSpy;

  beforeEach(() => {
    $httpSpy = jasmine.createSpy('$http').and.returnValue(response);
  });

  it('application returns an application', () => {
    expect(new EngineClient($httpSpy).getApplication(applicationId)).toEqual(response);
    expect($httpSpy).toHaveBeenCalledWith({
      method: 'GET',
      url: `http://engine/application/${applicationId}`,
    });
  });
});
