import { screen } from '@storybook/testing-library';
import { renderTheme } from '../../utils/renderTheme';
import { Comp } from '.';

describe('<Comp />', () => {
  it('Should render Comp correctly with title', () => {
    renderTheme(<Comp title='oi' />);
    const heading = screen.getByRole('heading', { name: /oi/i });
    expect(heading).toBeInTheDocument();
  });
  it('Should render Comp correctly without title', () => {
    renderTheme(<Comp />);
    const heading = screen.queryByRole('heading', { name: /oi/i });
    expect(heading).not.toBeInTheDocument();
  });
  it('Should match snapshot', () => {
    const { container } = renderTheme(<Comp title='ola' />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
