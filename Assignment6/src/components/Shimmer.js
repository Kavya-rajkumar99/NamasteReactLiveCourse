import SkeletonCard from "./SkeletonCard";

const Shimmer = () => {
  return (
    <div class="shimmer-container">
      {Array.from({ length: 8 }, (e, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
};

export default Shimmer;
