export default function HeaderFlowers() {
  return (
    <>
      <img
        className="hidden md:block fixed top-0 left-0 z-0 w-[min(25vw,340px)]"
        src="src/assets/petalsAndFlowers.png"
        alt="Petals left side"
      />

      <img
        className="hidden md:block fixed top-0 right-0 z-0 scale-x-[-1] w-[min(25vw,340px)]"
        src="src/assets/petalsAndFlowers.png"
        alt="Petals right side"
      />
    </>
  );
}
