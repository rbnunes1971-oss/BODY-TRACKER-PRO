
import React from "react";

export default function TruthBodyTracker() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 pb-32">
        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-3xl bg-white text-black flex items-center justify-center text-3xl font-black">
                TB
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight">
                  TRUTH BODY TRACKER
                </h1>

                <p className="text-zinc-400 mt-1">
                  Performance • Weight Loss • Recomposition
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="px-5 py-3 rounded-2xl bg-blue-600 font-semibold">
                Salvar Dados
              </button>

              <button className="px-5 py-3 rounded-2xl bg-zinc-800 font-semibold border border-zinc-700">
                Exportar Backup
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {[
            ["Peso Atual", "107.5 kg"],
            ["Meta", "92 kg"],
            ["Perda Total", "-5.5 kg"],
            ["Proteína Meta", "230 g"],
            ["Dose Atual", "2.5 mg"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5"
            >
              <p className="text-zinc-400 text-sm">{item[0]}</p>
              <h2 className="text-4xl font-black mt-3">{item[1]}</h2>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Dashboard de Performance</h2>

          <div className="h-[350px] rounded-3xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 text-lg text-center px-10">
            Dashboard gráfico completo com média diária automática entre peso manhã e noite.
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                Lançamento Diário Inteligente
              </h2>

              <p className="text-zinc-400 mt-2">
                Cada evento diário é salvo individualmente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              ["Peso manhã", "bg-blue-600"],
              ["Peso noite", "bg-blue-600"],
              ["Proteína café", "bg-green-600"],
              ["Proteína almoço", "bg-green-600"],
              ["Proteína lanche", "bg-green-600"],
              ["Proteína jantar", "bg-green-600"],
              ["Whey / extras", "bg-green-600"],
              ["Medicação aplicada (mg)", "bg-orange-600"],
            ].map((item, i) => (
              <div key={i} className="flex gap-2">
                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex-1"
                  placeholder={item[0]}
                />

                <button className={`px-4 rounded-2xl font-semibold ${item[1]}`}>
                  Salvar
                </button>
              </div>
            ))}

            <div className="flex gap-2">
              <select className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex-1">
                <option>Musculação</option>
                <option>Natação</option>
                <option>TRX</option>
                <option>Cardio</option>
                <option>Não treinou</option>
                <option>Descanso</option>
              </select>

              <button className="px-4 rounded-2xl bg-purple-600 font-semibold">
                Salvar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">
            Histórico Diário Completo
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                <th className="pb-4">Data</th>
                <th className="pb-4">Peso Manhã</th>
                <th className="pb-4">Peso Noite</th>
                <th className="pb-4">Proteína</th>
                <th className="pb-4">Dose</th>
              </tr>
            </thead>

            <tbody>
              {[
                ['28/04', '113', '-', '-', '2.5mg'],
                ['29/04', '111', '110', '-', '-'],
                ['30/04', '109', '110', '-', '-'],
                ['01/05', '108.5', '108.5', '-', '-'],
                ['02/05', '107.9', '108.9', '-', '-'],
                ['03/05', '107.9', '108.9', '-', '2.5mg'],
                ['04/05', '108.3', '108.5', '157g', '-'],
                ['05/05', '107.5', '108.5', '150g', '-'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-zinc-900">
                  {row.map((cell, j) => (
                    <td key={j} className="py-5 text-lg">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
