import {
  SentimentVeryDissatisfiedRounded,
  SentimentDissatisfiedRounded,
  SentimentSatisfiedRounded,
  SentimentSatisfiedAltRounded,
  SentimentVerySatisfiedRounded,
} from "@mui/icons-material";
import styled from "styled-components";
import { IconContainerProps, Rating } from "@mui/material";

export const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileForm = styled.form`
  display: grid;
  gap: 40px;
`;

export const ProfileLabel = styled.label`
  display: grid;
  grid-template-columns: max-content 1fr;
  place-items: center;
  /* gap: 10px; */
`;

export const ProfileInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 1.8rem;
  border-radius: 4px;
  width: 95%;
  box-sizing: border-box;

  &:read-only {
    background-color: #222;
    cursor: not-allowed;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  /* background-color: #eee; */
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  padding: 1rem;
  border-radius: 50%;
  background-color: aliceblue;
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "4rem !important",
    width: "100% !important",
  },
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette?.action?.disabled,
  },
}));

export const customIcons: {
  [index: string]: {
    icon: any;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedRounded color="error" />,
    label: "VeryDissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedRounded color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedRounded color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltRounded color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedRounded color="success" />,
    label: "VerySatisfied",
  },
};

export function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
