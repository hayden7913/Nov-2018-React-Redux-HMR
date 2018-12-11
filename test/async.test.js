import 'babel-polyfill';
import axios from 'axios';

test('async', async () => {
  axios.get.mockImplementation(() => (
    Promise.resolve({
      data: { results: 'hello' }
    })
  ));
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response.data);
  expect(true).toBe(true);
});
