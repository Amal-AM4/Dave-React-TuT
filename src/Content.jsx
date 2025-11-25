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

    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);

    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    console.log(id);

    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  };

  return (
    <main>
      {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              onDoubleClick={() => handleCheck(item.id)}
              style={
                item.checked
                  ? { textDecoration: "line-through", fontWeight: "bolder" }
                  : null
              }
            >
              {item.item}
            </label>
            <FaTrashAlt
              role="buton"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>

      ) : (
        <p style={ {marginTop: '2rem'} }>Your list is empty...</p>
      )}
    </main>
  );
};

export default Content;
