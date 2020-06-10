// eslint-disable-next-line import/extensions
import { test, expect } from '@jest/globals';
import reverse from '../src/index';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
