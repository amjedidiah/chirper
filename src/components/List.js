// Module imports
import React from "react"


/**
 * List component: Renders the List component UI
 * @param {object} props - List component props
 * @param {todo[] | goal[]} props.items - The list items
 * @param {function} props.remove - Remove item function
 * @param {function} [props.toggle] - Toggle todo function
 * @returns {object} - The UI DOM object
 */
const List = ({ items, remove, toggle }) => (
  <ul>
    {items.map(
      (item) =>
        item && (
          <li key={item.id}>
            <span
              onClick={() => toggle && toggle(item.id)}
              style={{ textDecoration: item.complete && "line-through" }}
            >
              {item.name}
            </span>
            <button onClick={() => remove(item)}>X</button>
          </li>
        )
    )}
  </ul>
);

export default List;
