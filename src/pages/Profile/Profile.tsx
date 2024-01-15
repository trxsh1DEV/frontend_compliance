import { toast } from "react-toastify";
import { requestWithToken } from "../../utils/requestApi";
import { ChangeEvent, useEffect, useState, FC } from "react";
import { TypeUsers } from "../../types/typeUsers";
import {
  ContainerImage,
  FileInput,
  IconContainer,
  ProfileContainer,
  ProfileForm,
  ProfileImage,
  ProfileInput,
  ProfileLabel,
  StyledRating,
} from "./styled";
import { EditNoteOutlined, SaveAsOutlined } from "@mui/icons-material";
import { DivCentered } from "../../styles/mainStyles";

interface YourComponentProps {
  handleUpdateField?: (fieldName: string, file: File | null) => void;
}

type TypeUserFields = TypeUsers & {
  feedback: number;
  updatedAt?: string;
  createdAt?: string;
};

const Profile: FC<YourComponentProps> = () => {
  const [user, setUser] = useState<TypeUserFields>({
    _id: "",
    avatar: "",
    cnpj: "",
    compliances: [""],
    contact: "",
    criticalProblems: false,
    email: "",
    feedback: 3,
    isAdmin: false,
    name: "",
    typeContract: "",
    social_reason: "",
    createdAt: "",
    updatedAt: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await requestWithToken.get(`user/`);
      setUser(res.data);
    } catch (err: any) {
      toast.error("Falha ao obter dados do perfil");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      const { cnpj, contact, feedback, avatar } = user;
      if (cnpj || contact || feedback) {
        console.log(avatar);
        await requestWithToken.patch(`user/`, {
          cnpj,
          contact,
        });
        toast.success("Cliente atualizado com sucesso!");
      }

      setIsEditing(false);
    }
  };

  const handleUpdateField = (
    field: string,
    value: string | number | boolean | object
  ): void => {
    setUser((prevUserData: TypeUserFields) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const selectedFile = inputElement.files?.[0] || null;
    if (selectedFile) {
      handleUpdateField("avatar", selectedFile);
    }
  };

  return (
    <ProfileContainer>
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Meu Perfil</h2>
      {user.avatar && (
        <ProfileForm>
          <ContainerImage>
            <ProfileImage src={user.avatar} alt="User image" />
            {isEditing && (
              <FileInput
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                readOnly={isEditing}
              />
            )}
          </ContainerImage>

          <ProfileLabel>
            <span>Nome:</span>
            <ProfileInput type="text" name="name" value={user.name} readOnly />
          </ProfileLabel>

          <ProfileLabel>
            <span>Razão Social:</span>
            <ProfileInput
              type="text"
              name="social_reason"
              value={user.social_reason || ""}
              readOnly
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Email:</span>
            <ProfileInput
              type="text"
              name="email"
              value={user.email}
              readOnly
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Problemas Críticos:</span>
            <ProfileInput
              type="text"
              name="criticalProblems"
              value={user.criticalProblems ? "Sim" : "Não"}
              readOnly
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>CNPJ:</span>
            <ProfileInput
              type="text"
              name="cnpj"
              value={user.cnpj}
              readOnly={!isEditing}
              onChange={(e: any) => handleUpdateField("cnpj", e.target.value)}
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Contato:</span>
            <ProfileInput
              type="text"
              value={user.contact}
              name="contact"
              onChange={(e: any) =>
                handleUpdateField("contact", e.target.value)
              }
              readOnly={!isEditing}
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Seu feedback do sistema:</span>
            <StyledRating
              name="feedback"
              defaultValue={3}
              value={user.feedback || 3}
              IconContainerComponent={IconContainer}
              onClick={(e: any) => {
                const value = Number(e.target?.value);
                if (value) {
                  handleUpdateField("feedback", value);
                }
              }}
              readOnly={!isEditing}
            />
          </ProfileLabel>

          {!isEditing && (
            <DivCentered onClick={handleEdit}>
              <EditNoteOutlined
                sx={{ cursor: "pointer", fontSize: 50 }}
                titleAccess="Edit
                "
              />
            </DivCentered>
          )}
          {isEditing && (
            <DivCentered onClick={handleEdit}>
              <SaveAsOutlined
                sx={{ cursor: "pointer", fontSize: 50 }}
                titleAccess="Save"
              />
            </DivCentered>
          )}
        </ProfileForm>
      )}
    </ProfileContainer>
  );
};

export default Profile;
