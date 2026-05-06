
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [pesoAtual, setPesoAtual] = useState("108.5");
  const [proteina, setProteina] = useState("230");
  const [agua, setAgua] = useState("4");
  const [dose, setDose] = useState("2.5mg");
  const [historico, setHistorico] = useState([
    { semana: "S1", peso: 108.5, meta: 107 },
    { semana: "S2", peso: 106.8, meta: 105.5 },
    { semana: "S3", peso: 105.2, meta: 104 },
    { semana: "S4", peso: 103.8, meta: 102.5 },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("truth-body-tracker");
    if (saved) {
      const parsed = JSON.parse(saved);
      setPesoAtual(parsed.pesoAtual || "108.5");
      setProteina(parsed.proteina || "230");
      setAgua(parsed.agua || "4");
      setDose(parsed.dose || "2.5mg");
      setHistorico(parsed.historico || historico);
      setDarkMode(parsed.darkMode || false);
    }
  }, []);

  const salvar = () => {
    localStorage.setItem(
      "truth-body-tracker",
      JSON.stringify({
        pesoAtual,
        proteina,
        agua,
        dose,
        historico,
        darkMode,
      })
    );

    alert("Dados salvos com sucesso");
  };

  const adicionarSemana = () => {
    const novo = {
      semana: `S${historico.length + 1}`,
      peso: Number(pesoAtual),
      meta: Number(pesoAtual) - 1,
    };

    setHistorico([...historico, novo]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#000" : "#f3f4f6",
        color: darkMode ? "white" : "black",
        padding: 20,
        fontFamily: "Arial",
        transition: "0.3s",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div
          style={{
            background: darkMode ? "#111" : "white",
            borderRadius: 30,
            padding: 30,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: "black",
                  color: "white",
                  borderRadius: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                TB
              </div>

              <div>
                <h1 style={{ fontSize: 40, margin: 0 }}>
                  TRUTH BODY TRACKER
                </h1>

                <p style={{ opacity: 0.7 }}>
                  Performance • Weight Loss • Recomposition
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  border: "none",
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: darkMode ? "#333" : "black",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {darkMode ? "Modo Claro" : "Modo Escuro"}
              </button>

              <button
                onClick={salvar}
                style={{
                  border: "none",
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Salvar Dados
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          {[
            ["Peso Atual", `${pesoAtual} kg`],
            ["Meta", "92 kg"],
            ["Proteína", `${proteina} g`],
            ["Água", `${agua} L`],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: darkMode ? "#111" : "white",
                padding: 24,
                borderRadius: 24,
              }}
            >
              <p style={{ opacity: 0.7 }}>{item[0]}</p>
              <h2 style={{ fontSize: 36 }}>{item[1]}</h2>
            </div>
          ))}
        </div>

        <div
          style={{
            background: darkMode ? "#111" : "white",
            marginTop: 20,
            borderRadius: 30,
            padding: 30,
          }}
        >
          <h2>Evolução do Peso</h2>

          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <LineChart data={historico}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semana" />
                <YAxis domain={[80, 115]} />
                <Tooltip />
                <Line type="monotone" dataKey="peso" stroke="#2563eb" strokeWidth={4} />
                <Line type="monotone" dataKey="meta" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div
            style={{
              background: darkMode ? "#111" : "white",
              borderRadius: 30,
              padding: 30,
            }}
          >
            <h2>Controle Diário</h2>

            <div style={{ display: "grid", gap: 12 }}>
              <input
                value={pesoAtual}
                onChange={(e) => setPesoAtual(e.target.value)}
                placeholder="Peso Atual"
                style={{
                  padding: 14,
                  borderRadius: 14,
                  border: "1px solid #ccc",
                }}
              />

              <input
                value={proteina}
                onChange={(e) => setProteina(e.target.value)}
                placeholder="Proteína"
                style={{
                  padding: 14,
                  borderRadius: 14,
                  border: "1px solid #ccc",
                }}
              />

              <input
                value={agua}
                onChange={(e) => setAgua(e.target.value)}
                placeholder="Água"
                style={{
                  padding: 14,
                  borderRadius: 14,
                  border: "1px solid #ccc",
                }}
              />

              <select
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                style={{
                  padding: 14,
                  borderRadius: 14,
                  border: "1px solid #ccc",
                }}
              >
                <option>2.5mg</option>
                <option>5mg</option>
                <option>7.5mg</option>
                <option>10mg</option>
                <option>12.5mg</option>
              </select>

              <button
                onClick={adicionarSemana}
                style={{
                  border: "none",
                  padding: 16,
                  borderRadius: 16,
                  background: "#16a34a",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Adicionar Semana
              </button>
            </div>
          </div>

          <div
            style={{
              background: darkMode ? "#111" : "white",
              borderRadius: 30,
              padding: 30,
            }}
          >
            <h2>Checklist Inteligente</h2>

            <div style={{ display: "grid", gap: 14, marginTop: 20 }}>
              {[
                "230g proteína",
                "Treino realizado",
                "4L água",
                "Cardio concluído",
                "Sono 8 horas",
              ].map((item, i) => (
                <label
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    padding: 16,
                    borderRadius: 16,
                    border: "1px solid #ddd",
                  }}
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            background: darkMode ? "#111" : "white",
            marginTop: 20,
            borderRadius: 30,
            padding: 30,
          }}
        >
          <h2>Planejamento Semanal</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {[
              ["Segunda", "Musculação"],
              ["Terça", "Musculação"],
              ["Quarta", "TRX"],
              ["Quinta", "Natação"],
              ["Sexta", "Musculação"],
              ["Sábado", "Cardio"],
              ["Domingo", "Descanso"],
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 20,
                  borderRadius: 20,
                  background: darkMode ? "#1e1e1e" : "#f9fafb",
                }}
              >
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
