import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;

  li:first-child {
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
    margin-bottom: 20px;
  }

  li {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > * {
      width: 100px;
    }
  }

  img {
    width: 12px;
  }
`;
