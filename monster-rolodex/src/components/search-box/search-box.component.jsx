import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component {
  render() {
    const {onUpdate} = this.props
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
}

export default SearchBox;