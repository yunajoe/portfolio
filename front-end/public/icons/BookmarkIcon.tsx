type BookMarkIconsProps = {
  style?: React.CSSProperties;
  fill?: boolean;
  onClick?: () => void;
};
function BookmarkIcon({ style, fill = false, onClick }: BookMarkIconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="44"
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="white"
      style={{ ...style }}
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
    </svg>
  );
}

export default BookmarkIcon;
