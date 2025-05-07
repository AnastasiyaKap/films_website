import SingleCard from "./SingleCard";

const Favorites = ({ items, handleClick }) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <SingleCard
          props={item}
          key={item.id}
          onClick={() => handleClick(item.title)}
        />
      ))}
    </div>
  );
};

export default Favorites;
