import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";

const url = "http://localhost:5005/api/";

async function fetchSearch(search: string) {
  const response = await fetch(`${url}product?page=1&search=${search}`);
  const results = response.json();
  return results;
}

const Search = async ({ search, searchChange }: any) => {
  const startSearch = async (e: any) => {
    if (e.key === "Enter") {
      console.log("Search", search);
      console.log("Key", e.key);

      await fetchSearch(search);
    }
  };

  //   const searchResult = await fetchSearch(startSearch);

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          name="search"
          value={search}
          onChange={searchChange}
          onKeyDown={startSearch}
        />
        <ToastContainer />
      </Box>
    </div>
  );
};

export default Search;
