const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img shimmer" />
            <div className="shimmer-line shimmer long" />
            <div className="shimmer-line shimmer medium" />
            <div className="shimmer-line shimmer short" />
            <div className="shimmer-line shimmer short" />
            <div className="shimmer-line shimmer short" />
            <div className="shimmer shimmer-offer" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
