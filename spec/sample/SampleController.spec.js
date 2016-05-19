import SampleController from '../../app/sample/SampleController';

const subject = new SampleController();

describe('SampleController', () => {
  it('getText returns a greeting', () => {
    expect(subject.getText()).toBe('Hello everybody or some such string.');
  });
});
