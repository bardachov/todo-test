import { data } from './mock';
import { Button, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { List, TodoItem, ControlsContainer } from './TodoList.styled';
import { TodoForm } from '../TodoForm';
import { icons } from '../constants';

export const TodoList = () => {
  const [todo, setTodo] = useState(data);
  const [isFormVisible, setFormVisible] = useState(false);

  const getIconUrl = (id) => {
    const foundIcon = icons.find((icon) => icon.id === id);
    return foundIcon ? foundIcon.url : null;
  };

  const showNewForm = (e) => {
    setFormVisible(!isFormVisible);
  };

  const addTodo = (todoItem) => {
    setTodo((todo) => {
      return [todoItem, ...todo];
    });

    setFormVisible(!isFormVisible);
  };

  const selectItem = (id) => {
    setTodo((todo) => {
      return todo.map((item) => {
        const newItem = { ...item };

        if (item.id === id) {
          newItem.isSelected = !newItem.isSelected;
        }

        return newItem;
      });
    });
  };

  const isDeleteVisible = () => todo.find((el) => el.isSelected);

  return (
    <Stack alignItems="center" sx={{ mt: 5 }}>
      <div style={{ width: 700, height: 500 }}>
        <List>
          <li style={{ height: '73px' }}>
            <span>Статус</span>
            <span>Товар</span>
            <span>ID</span>
            <span>Название</span>
            <ControlsContainer>
              <Button
                onClick={showNewForm}
                variant="contained"
                size="small"
              >
                +
              </Button>

              {isDeleteVisible() && (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    setTodo((todo) =>
                      todo.filter((item) => !item.isSelected)
                    );
                  }}
                >
                  x
                </Button>
              )}
            </ControlsContainer>
          </li>

          {isFormVisible && (
            <li>
              <TodoForm submitHandler={addTodo} />
            </li>
          )}

          {todo.map((item) => {
            return (
              <TodoItem
                key={item.id}
                onClick={() => {
                  selectItem(item.id);
                }}
                isSelected={item.isSelected}
              >
                <div style={{ paddingLeft: 15 }}>
                  <Switch defaultValue="checked" />
                </div>
                <div>
                  <span>{item.sku}</span>
                </div>
                <div>
                  <span>{item.id}</span>
                </div>
                <div
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {getIconUrl(item.iconID) && (
                    <img
                      src={getIconUrl(item.iconID)}
                      alt={item.name}
                    />
                  )}

                  <span style={{ whiteSpace: 'nowrap' }}>
                    {item.name}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    setTodo((todo) =>
                      todo.filter(({ id }) => item.id !== id)
                    );
                  }}
                >
                  x
                </Button>
              </TodoItem>
            );
          })}
        </List>
      </div>
    </Stack>
  );
};
