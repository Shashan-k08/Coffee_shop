// Sidebar.js
import React ,{useState}from 'react';
import SearchBar from './SearchBar';
import SortingOptions from './SortingOptions';
import '../App.css'; // Import the CSS file for styling
import searchicon from '../img/Vector-removebg-preview.png';
const Sidebar = ({ onSearch, onSort }) => {
  
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    };
    const handleSortChange = (e) => {
      onSort(e.target.value);
    };
  return (
    <div className="sidebar">
     <div className="search-bar">
     <input class="search" type="search" placeholder="Search" /> 
     <img src={searchicon} alt=''/>
    </div>
    <div className="sorting-options">
      <div className="sort">
      <h5>Categories</h5>
      <label>
        <input type="checkbox" />
        My Value
      </label>
      <label>
        <input type="checkbox" />
        My Value
      </label>
      </div>
      <div className="sort">
      <h5>Categories</h5>
      <label>
        <input type="checkbox" />
        My Value
      </label>
      <label>
        <input type="checkbox" />
        My Value
      </label>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
