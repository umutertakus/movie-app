function Search() {
  return (
    <form className="search-form">
      <input className="search-input" type="text" />
      <button className="btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <select className="select-box">
        <option value="movie">Movie</option>
        <option value="series">TV Series</option>
      </select>
    </form>
  );
}

export default Search;
