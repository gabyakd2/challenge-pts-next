import {
  CardContainer,
  ImageCard,
  TextBody,
  TextCard,
  TextTitle,
} from "@/styledComponents/StyledComponents";
import aliveicon from "@/public/aliveicon.png";
import deadicon from "@/public/deadicon.png";
import unknownicon from "@/public/unknownicon.png";
import iconlocation from "@/public/iconlocation.png";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  status: string;
  location: string;
}

function CardChar({ image, name, status, location }: Props) {
  const trimText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };
  const locationShort = trimText(location, 18);
  const nameShort = trimText(name, 15);
  return (
    <CardContainer>
      <ImageCard src={image} alt="image" />
      <TextTitle>{nameShort}</TextTitle>
      <TextBody>
        <div style={{ display: "flex", alignItems: "center" }}>
          {status === "Alive" ? (
            <Image src={aliveicon} alt="icon-status" width={20} />
          ) : status === "Dead" ? (
            <Image src={deadicon} alt="icon-status" width={20} />
          ) : (
            <Image src={unknownicon} alt="icon-status" width={20} />
          )}
          <TextCard>{status}</TextCard>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={iconlocation} alt="icon-status" width={20} />
          <TextCard aria-label={location}>{locationShort}</TextCard>
        </div>
      </TextBody>
    </CardContainer>
  );
}

export default CardChar;
