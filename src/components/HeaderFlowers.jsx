import petalsAndFlowers from "@assets/petalsAndFlowers.png";

export default function HeaderFlowers() {
  return (
    <>
      <img
        className="custom-flowers-position left-0"
        src={petalsAndFlowers}
        alt="Petals left side"
      />

      <img
        className="custom-flowers-position right-0 scale-x-[-1] "
        src={petalsAndFlowers}
        alt="Petals right side"
      />
    </>
  );
}
