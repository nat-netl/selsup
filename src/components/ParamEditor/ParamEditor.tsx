import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValues {
  id: number;
  value: string;
}

interface Types {
  id: number;
  name: string;
}

interface TypesWine {
  paramValues: ParamValues[];
  types: Types[];
}

interface Props {
  params: Param[];
  typeWine: TypesWine;
}

const ParamEditor = ({ params, typeWine }: Props) => {
  const [paramValues, setParamValues] = useState(typeWine.paramValues);
  const [typeValues, setTypeValues] = useState<string>(typeWine.types[0].name);

  const handleChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map((paramValue) =>
      paramValue.id === paramId ? { ...paramValue, value } : paramValue
    );
    setParamValues(updatedParamValues);
  };

  const typesHandler = (event: any) => {
    setTypeValues(event.target.value);
  };

  const getWine = (): any => {
    alert(`
      Тип вина: ${paramValues[0].value} \n
      Соста: ${paramValues[1].value} \n
      Вид: ${typeValues}
    `);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "50vw",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "260px",
          width: "100%",
          fontFamily: "monospace",
          gap: "15px",
        }}
      >
        {params &&
          params.map((param) => (
            <div
              key={param.id}
              style={{
                display: "flex",
              }}
            >
              <label style={{ fontWeight: "bold", width: "100px" }}>
                {param.name}:{" "}
              </label>
              <input
                type="text"
                value={paramValues.find((p) => p.id === param.id)?.value || ""}
                onChange={(e) => handleChange(param.id, e.target.value)}
                style={{}}
              />
            </div>
          ))}

        <select value={typeValues} onChange={typesHandler}>
          {typeWine.types &&
            typeWine.types.map((type: any) => (
              <option value={type.name}>{type.name}</option>
            ))}
        </select>

        <button onClick={getWine}>Получить вино</button>
      </div>
    </div>
  );
};

export default ParamEditor;
