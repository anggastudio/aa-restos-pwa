import API_ENDPOINT from '../globals/api-endpoint';

class AaRestoDbSource {
  static async restos() {
    const response = await fetch(API_ENDPOINT.RESTOS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async resto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default AaRestoDbSource;
