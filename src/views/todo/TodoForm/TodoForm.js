import { Switch } from '@mui/material';
import { useRef, useState } from 'react';
import { icons } from '../constants';
import { Form } from './TodoForm.styled';

export const TodoForm = ({ submitHandler }) => {
  const nameRef = useRef();
  const [valueID, setID] = useState('');

  const applyId = (e) => {
    if (e.target.value < 1000) setID(e.target.value);
  };

  const applyName = (e) => {
    if (e.key === 'Enter') {
      submitHandler({
        id: valueID,
        name: nameRef.current.value,
        sku: 'xxx-',
      });
    }
  };

  return (
    <Form>
      <div>
        <Switch defaultValue="checked" />
      </div>
      <div>
        <span>xxxx-</span>
      </div>
      <div>
        <input
          name="id"
          type="number"
          onChange={applyId}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              nameRef.current.focus();
            }
          }}
          value={valueID}
          autoFocus
        />
      </div>
      <div>
        <img src={icons[0].url} alt="icon" />

        <input name="name" onKeyDown={applyName} ref={nameRef} />
      </div>
    </Form>
  );
};
