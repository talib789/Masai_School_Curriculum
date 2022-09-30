function Pagination({ page, setPage }) {
    return (
      <div>
        <button
          className="prev-btn"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev Page
        </button>
        <button className="curr-btn">{page}</button>
        <button className="next-btn" onClick={() => setPage((prev) => prev + 1)}>
          Next Page
        </button>
      </div>
    );
  }
  
  export default Pagination;
  