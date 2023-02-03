import { data } from './mock';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { List } from './TodoList.styled';

const columns = [
  {
    field: 'status',
    headerName: 'Статус',
    width: 150,
    valueGetter: () => {
      return <Switch></Switch>;
    },
  },
  {
    field: 'sku',
    headerName: 'Товар',
    width: 200,
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  },
  {
    field: 'name',
    headerName: 'Название',
    width: 200,
  },
  {
    field: 'controls',
    headerName: '',
    width: 50,
  },
];

const icons = [
  {
    id: 1,
    url: 'https://horoshop.ua/images/28/99031323856777.png',
  },
  {
    id: 2,
    url: 'http://www.lifecell.ua/cms/uploads/feincms_ceo_images/lifecell_logo_FKQVHlq.png',
  },
  {
    id: 3,
    url: 'https://cdn.britannica.com/14/4814-004-7C0DF1BB/Flag-Ukraine.jpg',
  },
];

export const TodoList = () => {
  const [todo, setTodo] = useState(data);

  const getIconUrl = (id) => {
    const foundIcon = icons.find((icon) => icon.id === id);
    return foundIcon ? foundIcon.url : null;
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
            <span></span>
          </li>
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
                <div>
                  {getIconUrl(item.iconID) && (
                    <img
                      src={getIconUrl(item.iconID)}
                      alt={item.name}
                    />
                  )}

                  <span>{item.name}</span>
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
