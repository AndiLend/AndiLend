import Image from "next/image";

interface IImageSection {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}
const ImageSection = ({ title, subtitle, description, imageUrl }: IImageSection) => (
  <>
    <div className="basis-2/3 text-center  flex flex-col justify-center w-4/5">
      <span className="text-[48px] font-bold">{title}</span>
      <span className="text-[48px] font-bold">{subtitle}</span>
      <p className="text-[20px] font-bold py-1">{description}</p>
    </div>
    <div className="basis-1/3 h-full w-full relative">
      <Image src={imageUrl} alt="Wallet Image" layout="fill" objectFit="cover" />
    </div>
  </>
);
export default ImageSection;
