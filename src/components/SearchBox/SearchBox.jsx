import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/actions";
import css from "./SearchBox.module.css";


function SearchBox() {
  const searchFieldValue = useSelector(state => state.searchQuery.name);
  const dispatch = useDispatch();
  const updateSearch = (name) => dispatch(setSearchQuery(name));
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>

      <input
        id="search"
        type="text"
        name="search"
        value={searchFieldValue}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;


