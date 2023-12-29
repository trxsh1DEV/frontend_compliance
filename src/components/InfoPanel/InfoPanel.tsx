// InfoPanel.jsx
const InfoPanel = ({ data }: { data: any }) => {
  if (!data) return null;
  console.log(data);
  return (
    <div>
      <h3>Peso: {data.weight}</h3>
      <p>Description: {data.description}</p>
      <p>Score: {data.points}</p>
      {/* Adicione outros detalhes relevantes aqui */}
    </div>
  );
};

export default InfoPanel;
