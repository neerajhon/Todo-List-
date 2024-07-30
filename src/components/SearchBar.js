// src/components/SearchBar.js
import styled from 'styled-components';

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: calc(100% - 60px); /* To account for margin */
`;

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return <Input type="text" value={searchTerm} onChange={handleChange} placeholder="Search tasks..." />;
};

export default SearchBar;
