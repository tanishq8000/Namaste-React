const ItemList = ({ filteredItems }) => {
  return (
    <ul className="list-none p-0 m-0 text-left">
      {filteredItems.map((item) => (
        <li
          key={item.card.info.id}
          className="border-b border-gray-100 p-5 last:border-b-0"
        >
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-xl font-semibold text-gray-800 m-0">
              {item.card.info.name}
            </h4>
            <p className="text-lg font-semibold text-gray-700 m-0">
              Rs.
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-normal m-0">
            {item.card.info.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
