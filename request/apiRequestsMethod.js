export const get = (url, query) => {
  logger({ str: "get", obj: { url, query } });
  return API.get(API_GATEWAY.name, url, {
    queryStringParameters: query,
  });
};
export const post = (url, body) => {
  logger({ str: "post", obj: { url, body } });
  return API.post(API_GATEWAY.name, url, { body });
};
