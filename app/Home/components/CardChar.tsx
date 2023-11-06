import {
  CardContainer,
  ImageCard,
  TextBody,
  TextCard,
} from "@/styledComponents/StyledComponents";

interface Props {
  image: string;
  name: string;
  status: string;
  location: string;
}

function CardChar({image, name, status, location}: Props) {

  const trimText = (text: string, maxLength: number) => {
    if(text.length <= maxLength ) {
      return text
    }else{
      return text.slice(0, maxLength) + "..."
    }
  }
  const locationShort = trimText(location, 18)
  return (
    <CardContainer>
      <ImageCard src={image} alt="image" />
      <TextCard>{name}</TextCard>
      <TextBody>
        <TextCard>{status}</TextCard>
        <TextCard aria-label={location}>{locationShort}</TextCard>
      </TextBody>
    </CardContainer>
  );
}

export default CardChar;