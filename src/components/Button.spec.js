import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Button from '@components/Button';

const onPressMock = jest.fn();
const testComponentTestId = '@F91w/Button';

describe('@Button: press check', () => {
  it('renders properly', async () => {
    const component = render(<Button onPress={onPressMock} testID={testComponentTestId} />);

    const testComponent = component.getByTestId(testComponentTestId);
    expect(testComponent).not.toBeNull();
    expect(testComponent).not.toBeUndefined();
    fireEvent.press(testComponent);
  });
});
