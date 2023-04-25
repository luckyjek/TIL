import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { TodoState } from './type';
import { useInjectReducer } from 'redux-injectors';

export const initialState: TodoState = {
  todolist: [
    // {
    //   id: '1',
    //   content: '첫번째 두투',
    //   completed: false,
    //   editing: true,
    // },
    // {
    //   id: '2',
    //   content: '두번째 두투',
    //   completed: true,
    //   editing: false,
    // },
    // {
    //   id: '3',
    //   content: '세번째 두투',
    //   completed: true,
    //   editing: false,
    // },
  ],
};

const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todolist.push(action.payload);
      },
      prepare: (content: string) => {
        //todo를 추가할때, 컴포넌트에서는 todo의 내용만 구현? 해주기때문에 prepare에서
        // 내용을 받고, ITodoItem Object로 만들어준후 reducer에서 상태저장해주기로하자.
        const id = nanoid();
        return {
          payload: {
            id: id,
            content: content,
            completed: false,
            editing: false,
          },
        };
      },
      checkTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;
        const todo = state.todolist.find(todo => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      editModeTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;

        for (const todo of state.todolist) {
          if (todo.id === id) continue;
          if (todo.editing === true) todo.editing = false;
        }

        const todo = state.todolist.find(todo => todo.id === id);
        if (todo) {
          todo.editing = !todo.editing;
        }
      },
      editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
        const id = action.payload.id;
        const content = action.payload.content;

        const todo = state.todolist.find(todo => todo.id === id);
        if (todo) {
          todo.content = content;
        }
      },
      deleteTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;
        const filteredTodos = state.todolist.filter(todo => todo.id !== id);
        state.todolist = filteredTodos;
      },
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
