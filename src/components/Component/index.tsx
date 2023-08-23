import * as Styled from './styles';

export type CompProps = {
  title?: string;
};

export const Component = ({ title = 'teste' }: CompProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};
