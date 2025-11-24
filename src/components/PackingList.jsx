/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "T-shirts", quantity: 5, packed: false },
  { id: 4, description: "Pants", quantity: 2, packed: true },
];
*/

import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, handleClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  /*
  if (sortBy === "input") sortedItems = items;

  if (sortBy == "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy == "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  */
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => handleClearList()}>Clear list</button>
      </div>
    </div>
  );
};

/*
const sortStrategies = {
  input: (items) => items,
  description: (items) => items.slice().sort((a, b) => a.description.localeCompare(b.description)),
  packed: (items) => items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)),
};

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  const sortedItems = sortStrategies[sortBy](items);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

🚀 Final Summary
=================
Code                    | What it does
------------------------|---------------------------------------------------------
sortStrategies	        | Contains several functions
sortStrategies[sortBy]	| Looks up the function based on the user's selection
(items)	                | Executes that function with the array to be sorted
Result	                | sortedItems gets sorted according to the chosen strategy
-----------------------------------------------------------------------------------
*/

export default PackingList;
