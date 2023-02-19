import styled from "styled-components";
import ButtonDelete from "../Button/ButtonDelete";

type AnimalsProps = {
  id: number;
  name: string;
  species: string;
  imageUrl: string;
};

export const AnimalCard = ({ id, name, species, imageUrl }: AnimalsProps) => {
  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <DivConatainerStyled>
      <ImageStyled src={imageUrl} alt="image" />
      <DivInfoWrapper>
        <h2>{name}</h2>
        <h3>{species}</h3>
        <DivBottomWrapper>
          <ButtonDelete onClick={() => deleteHandler()} text={"x"} />
        </DivBottomWrapper>
      </DivInfoWrapper>
    </DivConatainerStyled>
  );
};

const DivConatainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 400px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: #343333;
  color: whitesmoke;
  padding: 10px;
  transition: background-color 0.2s, border 0.2s;
  &:hover {
    background-color: #232323;
    border: 2px solid white;
  }
`;

const ImageStyled = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`;

const DivInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const DivBottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;
