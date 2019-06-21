import Accessor from '../../../src/website/components/common/item-selector/accessor';

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

