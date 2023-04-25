import React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100% auto;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

// todo 수정용인지 추가용인지 확인할 수 있도록한다.
export default function TodoInput({
  addTodo,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: () => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>(editContent || '');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할일을 입력해 주세요."
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          // 여기까지왔으면 content가 있고, Eunter key를 눌렀으므로 아래로직 실행.
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            addTodo && addTodo(content);
            setContent('');
          }
        }}
      />
    </Box>
  );
}
