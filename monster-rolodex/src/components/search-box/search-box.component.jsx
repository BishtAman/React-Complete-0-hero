import './search-box.styles.css'
const SearchBox = ({onUpdate}) => {
    return (
      <>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onUpdate}
        />
      </>
    );
  }


export default SearchBox;