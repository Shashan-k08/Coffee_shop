// Sidebar.js
import React ,{useState}from 'react';
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
    <h5>Categories</h5>
      <div className="sort">
     
      <label className='txt'>
        <input type="checkbox" />
        &nbsp; Baked Goods(8)
      </label>
      <label className='txt'>
        <input type="checkbox" />
        &nbsp; Coffee(2)
      </label>
      </div>
      <h5>Dietary</h5>
      <div className="sort">
      
      <label className='txt'>
        <input type="checkbox" />
        &nbsp; Eco Friendly(2)
      </label>
      <label className='txt'>
        <input type="checkbox" />
        &nbsp; Gluten Free(4)
      </label>
      <label className='txt'>
        <input type="checkbox" />
        &nbsp; Nut Free(7)
      </label>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
