import Typeahead from '../website/components/common/item-selector/typeahead';
import React from 'react';
import renderer from 'react-test-renderer';

test("Test the Item-selector", (done) => {
  // var focusOnTargetSpy = jest.fn();

  // jest
  //   .spyOn(Typeahead.prototype, 'focusOnTarget')
  //   .mockImplementation(focusOnTargetSpy)
  let focused = false;

  const component = renderer.create(
    <Typeahead options={['test', 'test-1']} />,
    {
      createNodeMock: (element) => {
        if (element.type === 'input') {
          return {
            focus: () => {
              focused = true;
            }
          }
        }
      }
    }
  );
  
  const instance = component.getInstance();
  expect(instance.state.searchResults).toEqual(['test', 'test-1']);
  expect(focused).toBe(true);

  done();
})
