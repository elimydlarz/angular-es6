import EngineClient from '../../app/services/EngineClient';
import unirest from '../../node_modules/unirest';

describe('Engine', () => {
  const subject = new EngineClient();
  const applicationId = 'APPLICATION ID';
  const response = { name: 'Bird Person' };
  let getRequest;

  beforeEach(() => {
    getRequest = spyOn(unirest, 'get').and.returnValue(response);
  });

  it('application returns an application', () => {
    expect(subject.getApplication(applicationId)).toEqual(response);
    expect(getRequest).toHaveBeenCalledWith(applicationId);
  });
});
