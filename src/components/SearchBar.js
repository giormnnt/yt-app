import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
	const [search, setSearch] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		onSearchSubmit(search);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input
						type="text"
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
