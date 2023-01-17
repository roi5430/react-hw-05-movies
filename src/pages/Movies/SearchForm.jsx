// import toast from 'react-hot-toast';

export const SearchForm = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
