import { toast } from "react-toastify";
import { requestWithToken } from "../../utils/requestApi";
import { useEffect, useState } from "react";
import { TypeUsers } from "../../types/typeUsers";
import {
  IconContainer,
  ProfileContainer,
  ProfileForm,
  ProfileInput,
  ProfileLabel,
  StyledRating,
} from "./styled";
import { EditNoteOutlined, SaveAsOutlined } from "@mui/icons-material";
import { DivCentered } from "../../styles/mainStyles";

const Profile = () => {
  const [user, setUser] = useState<TypeUsers>({
    _id: "",
    avatar: "",
    cnpj: "",
    compliances: [""],
    contact: "",
    criticalProblems: false,
    email: "",
    feedback: 1,
    isAdmin: false,
    name: "",
    typeContract: "",
    social_reason: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await requestWithToken.get(`clients/`);
      setUser(res.data);
    } catch (err: any) {
      toast.error("Falha ao obter dados do perfil");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(user);

    toast.success("Dados do perfil atualizados com sucesso!");
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
    console.log(user);
  };

  const handleUpdateField = (
    field: string,
    value: string | number | boolean
  ): void => {
    setUser((prevUserData: TypeUsers) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (
    <ProfileContainer>
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Meu Perfil</h2>
      {user && (
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileLabel>
            <span>Nome:</span>
            <ProfileInput type="text" value={user.name} readOnly />
          </ProfileLabel>

          <ProfileLabel>
            <span>Razão Social:</span>
            <ProfileInput
              type="text"
              value={user.social_reason || ""}
              readOnly
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Email:</span>
            <ProfileInput type="text" value={user.email} readOnly />
          </ProfileLabel>

          <ProfileLabel>
            <span>Problemas Críticos:</span>
            <ProfileInput
              type="text"
              value={user.criticalProblems ? "Sim" : "Não"}
              readOnly
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>CNPJ:</span>
            <ProfileInput type="text" value={user.cnpj} readOnly={!isEditing} />
          </ProfileLabel>

          <ProfileLabel>
            <span>Contato:</span>
            <ProfileInput
              type="text"
              value={user.contact}
              readOnly={!isEditing}
            />
          </ProfileLabel>

          <ProfileLabel>
            <span>Seu feedback do sistema:</span>
            {/* <ProfileInput type="text" value={user.contact} readOnly /> */}
            <StyledRating
              name="highlight-selected-only"
              defaultValue={3}
              value={3}
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
