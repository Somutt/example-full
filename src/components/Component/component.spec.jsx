import { screen } from '@storybook/testing-library';
import { renderTheme } from '../../utils/renderTheme';
import { Component } from '.';

describe('<Component />', () => {
  it('Should render Component correctly with title', () => {
    renderTheme(<Component title='oi' />);
    const heading = screen.getByRole('heading', { name: /oi/i });
    expect(heading).toBeInTheDocument();
  });
  it('Should render Component correctly without title', () => {
    renderTheme(<Component />);
    const heading = screen.queryByRole('heading', { name: /oi/i });
    expect(heading).not.toBeInTheDocument();
  });
  it('Should match snapshot', () => {
    const { container } = renderTheme(<Component title='ola' />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
