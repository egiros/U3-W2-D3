import MovieGallery from "./MovieGallery";

const MyHomePage = () => {
  return (
    <div className="App bg-dark">
      <MovieGallery category="Transformers" />
      <MovieGallery category="Harry Potter" />
      <MovieGallery category="Lord of the Rings" />
      <MovieGallery category="Batman" />
      <MovieGallery category="Superman" />
      <MovieGallery category="Avengers" />
      <MovieGallery category="Game of Thrones" />
      <MovieGallery category="Spiderman" />
    </div>
  );
};

export default MyHomePage;
