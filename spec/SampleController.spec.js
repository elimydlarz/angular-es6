import SampleController from '../app/SampleController';

const subject = SampleController();

describe('SampeController', () => {
  it('getText returns a greeting', () => {
    expect(subject.getText()).toBe('Hello everybody or some such string.');
  });
});