import {add, total} from './App';

test('add', () => {
  const value = add(2,3);
  expect(value).toEqual(5);
  expect(value).toBeLessThan(6)
  
})


test('total', () => {
  expect(total(5, 20)).toBe("$ 25");
})