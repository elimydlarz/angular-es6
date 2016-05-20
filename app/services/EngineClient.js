export default class EngineClient {
  constructor($http) {
    this.$http = $http;
  }

  getApplication(id) {
    return this.$http({
      method: 'GET',
      url: `http://engine/application/${id}`,
    });
  }
}
