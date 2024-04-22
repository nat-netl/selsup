import React from 'react';
import ParamEditor from './components/ParamEditor/ParamEditor';

const params = [
  {
    id: 0,
    name: "Тип вина",
    type: "string",
  },
  {
    id: 1,
    name: "Состав",
    type: "string",
  },
];

const typeWine = {
  paramValues: [
    {
      id: 0,
      value: "Сладкое",
    },
    {
      id: 1,
      value: "Cортовое",
    },
  ],
  types: [
    {
      id: 0,
      name: "Белое",
    },
    {
      id: 1,
      name: "Красное",
    },
    {
      id: 2,
      name: "Розовое",
    }
  ],
};

function App() {
  return (
    <>
      <ParamEditor typeWine={typeWine} params={params} />
    </>
  );
}

export default App;
