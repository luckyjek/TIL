import styled from 'styled-components';
// 이런식으로 Block을 통해 margin을 조절하는 이유는?
// Block이 없었다면, 다른 컴포넌트에 margin을 넣어야하는데,
// 컴포넌트가 불필요한 스타일이 생기고, 재사용하기 불편해진다.
// 따라서 Block 컴포넌트를 통해 컴포넌트 사이들의 margin을 조절하는게 좋다.
export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;
