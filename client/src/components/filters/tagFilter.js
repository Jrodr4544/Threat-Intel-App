

const TagFilter = ({tags, changeFilter}) => {

	  const filterOptions = tags.map((tag, index) => <option key={index} value={tag}>{tag}</option>)

	  return (
	    <select name="tagFilter" onChange={changeFilter}>
	      <option value="">All</option>
	      {filterOptions}
	    </select>
	  );

}

export default TagFilter;
