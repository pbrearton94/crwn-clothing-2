const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: "",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "",
    },
    {
      id: 3,
      title: "Sneakers",
      subtitle: "",
    },
    {
      id: 4,
      title: "Mens",
      subtitle: "",
    },
    {
      id: 5,
      title: "Women",
      subtitle: "",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
