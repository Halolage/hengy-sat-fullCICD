const { handler } = require('./index');

describe('handler', () => {
  test('returns a successful response', async () => {
    const event = {}; // You can customize the event if needed
    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain('Your function executed successfully!');
  });
});
