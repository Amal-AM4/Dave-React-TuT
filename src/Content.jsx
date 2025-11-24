import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Love Book",
    },
    {
      id: 2,
      checked: false,
      item: "Pencil",
    },
    {
      id: 3,
      checked: true,
      item: "God wisdom book",
    },
  ]);

  const handleCheck = (id) => {
    console.log(`key: ${id}`);

    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)

    setItems(listItems)
  }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label>{item.item}</label>
            <FaTrashAlt role="buton" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
