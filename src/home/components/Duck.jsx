import "../styles/Navbar.css";

export default function Duck({ isDocked }) {
  return (
    <div
      className={`w-[var(--spacing-img-duck-width)] ${
        isDocked ? "hidden" : ""
      }`}
    >
      <img src="src/assets/louise+duck.gif" alt="Louise Duck" />
    </div>
  );
}
