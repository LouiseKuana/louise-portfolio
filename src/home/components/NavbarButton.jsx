import "../styles/Navbar.css";

export default function NavbarButton({ icon: Icon, onClick }) {
  return (
    <>
      <button className="btn-3d" id="btn-3d" onClick={onClick}>
        <Icon className="w-6 h-6 " />
      </button>
    </>
  );
}