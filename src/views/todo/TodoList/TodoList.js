import { data } from './mock';
import { Button, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { List } from './TodoList.styled';
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

  return (
    <Stack alignItems="center" sx={{ mt: 5 }}>
      <div style={{ width: 700, height: 500 }}>
        <List>
          <li>
            <span>Статус</span>
            <span>Товар</span>
            <span>ID</span>
            <span>Название</span>
            <div>
              <Button
                onClick={showNewForm}
                variant="contained"
                size="small"
              >
                +
              </Button>
            </div>
          </li>

          {isFormVisible && (
            <li>
              <TodoForm submitHandler={addTodo} />
            </li>
          )}

          {todo.map((item) => {
            return (
              <li key={item.id}>
                <div>
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
                <Button>x</Button>
              </li>
            );
          })}
        </List>
      </div>
    </Stack>
  );
};
