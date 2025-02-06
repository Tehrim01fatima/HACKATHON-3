const Badge = ({ badgeText }: { badgeText: string }) => {
  return (
    <div
      className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
      style={{ outline: "2px solid yellow" }} // Temporary outline to see badge position
    >
      {badgeText}
    </div>
  );
};