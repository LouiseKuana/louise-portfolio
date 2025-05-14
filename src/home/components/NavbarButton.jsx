import "../styles/NavbarButton.css";

function NavbarButton({ icon: Icon }) {
  return (
    <>
      <button className="btn-3d" id="btn-3d">
        <Icon className="w-6 h-6 " />
      </button>
    </>
  );
}

export default NavbarButton;
