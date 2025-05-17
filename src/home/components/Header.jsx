import "../Home.css";

function Header() {
  return (
    <div>
      <h1 className="pt-[var(--spacing-padding-title)] font-bold text-[min(6vw,30px)]">
        hey there, I'm Louise!
      </h1>
      <p className="text-[min(4vw,20px)]">Back-end Developer by profession</p>
      <p className="text-[min(4vw,18px)]">Front-end Developer enthusiast</p>
    </div>
  );
}

export default Header;
