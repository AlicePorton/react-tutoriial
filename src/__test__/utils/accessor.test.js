import Accessor from '../../../src/website/components/common/item-selector/accessor';
import fuzzy from 'fuzzy';

test('Accessor identify_fn should return yourself', () => {
  expect(Accessor.IDENTITY_FN(1)).toEqual(1);
});

test('generatorAccessor should return `object[filed]`', () => {
  const returnKey = Accessor.generateAccessor('key');
  let small_case = {key: '2'};
  expect(returnKey(small_case)).toEqual('2');
});

test('value for option', () => {});

test('generateOptionToStringFor when the prop is function or others', ()=> {});


test('fuzzy filter', () => {
  let input = 'a';
  const options = ['testa', 'abv', 'test2'];
  const results = fuzzy.filter(input, options);
  const mapper = Accessor.IDENTITY_FN;
  expect(fuzzy.filter(input, options).length).toEqual(2);
  expect(fuzzy.filter(input, options, {extract: mapper}).length).toEqual(2);
  expect(fuzzy.filter(input, options, {extract: mapper}).map(res => options[res.index])).toEqual(['testa', 'abv']);
  expect(results.map(el => el.string)).toEqual(['testa', 'abv']);
})
