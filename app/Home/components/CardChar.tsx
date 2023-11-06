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
  return (
    <CardContainer>
      <ImageCard src={image} alt="image" />
      <TextCard>{name}</TextCard>
      <TextBody>
        <TextCard>{status}</TextCard>
        <TextCard>{location}</TextCard>
      </TextBody>
    </CardContainer>
  );
}

export default CardChar;