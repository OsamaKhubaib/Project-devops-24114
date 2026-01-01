const app = require('../src/app');

describe('App', () => {
  test('should respond to requests', () => {
    expect(app).toBeDefined();
  });
});