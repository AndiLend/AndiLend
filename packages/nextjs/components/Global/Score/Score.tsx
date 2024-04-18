interface IScore {
  title: string;
  value: number;
}

const Score = ({ title, value }: IScore) => {
  const angleDegrees = value * 1.8 - 180; // map data 0-100 a -90 to 90 degrees
  const angleRadians = angleDegrees * (Math.PI / 180); // degrees to radians

  const radius = 9.3;
  const xPosition = radius * Math.cos(angleRadians); // Position x in rem
  const yPosition = radius * Math.sin(angleRadians); // Position y in rem

  console.log(`Rotate: ${angleDegrees} degrees, X: ${xPosition}rem, Y: ${yPosition}rem`);

  return (
    <div className="flex justify-center items-end">
      <div
        className="absolute bg-black h-8 w-8 rounded-full border-2 border-white"
        style={{
          transform: `translateX(${xPosition}rem) translateY(${yPosition}rem)`,
        }}
      ></div>
      <img src={"/assets/score.svg"} alt="quests" className="w-full h-full" />
      <div className="block absolute ">
        <span className="block text-black font-semibold text-3xl mb-1">{value}</span>
        <span className="block text-black font-semibold text-2xl mb-1">{title}</span>
      </div>
    </div>
  );
};

export default Score;
