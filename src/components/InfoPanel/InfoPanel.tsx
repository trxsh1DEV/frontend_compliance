import { DivFullWidth } from "../../styles/mainStyles";

// InfoPanel.jsx
const InfoPanel = ({ data }: { data: any }) => {
  const obj = {
    frequency: { level: "high", score: 10, weight: 8 },
    restoration: { enabled: true, score: 9, weight: 9 },
    policy: { enabled: true, score: 10, weight: 6 },
    storage: {
      local: { enabled: true, qtde: 2, score: 10, weight: 9 },
      remote: { enabled: true, qtde: 3, score: 10, weight: 9 },
    },
  };
  if (!data) return null;

  delete data.manufacturer;
  console.log(data);
  const formatValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? "Verdadeiro" : "Falso";
    }
    return value;
  };

  // Object.entries(data).map(([key, value]) => console.log(key, value));

  return (
    <>
      <h1>Infomações principais</h1>
      <DivFullWidth>
        <h3>Peso: {data.weight}</h3>
        <p>Description: {data.description}</p>
        <p>Score: {data.points}</p>
      </DivFullWidth>
      <section>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}</strong>: {formatValue(value)}
          </div>
        ))}
      </section>
    </>
  );
};

export default InfoPanel;
