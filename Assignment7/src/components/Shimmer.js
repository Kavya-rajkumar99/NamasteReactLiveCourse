import SkeletonCard from "./SkeletonCard";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 8 }, (e, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
};

export default Shimmer;
