
export default function Home() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"#000",
      color:"white",
      padding:20,
      fontFamily:"Arial"
    }}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{
          background:"#111",
          borderRadius:30,
          padding:30,
          marginBottom:20
        }}>
          <h1 style={{fontSize:42}}>TRUTH BODY TRACKER</h1>
          <p>Versão definitiva para acompanhamento diário.</p>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:16,
          marginBottom:20
        }}>
          {[
            ["Peso Atual","107.5kg"],
            ["Meta","92kg"],
            ["Perda","-5.5kg"],
            ["Proteína","230g"],
            ["Dose","2.5mg"]
          ].map((item,i)=>(
            <div key={i} style={{
              background:"#111",
              borderRadius:24,
              padding:24
            }}>
              <p>{item[0]}</p>
              <h2 style={{fontSize:36}}>{item[1]}</h2>
            </div>
          ))}
        </div>

        <div style={{
          background:"#111",
          borderRadius:30,
          padding:30,
          marginBottom:20
        }}>
          <h2>Lançamento Diário</h2>

          <div style={{
            display:"grid",
            gap:12
          }}>
            <input placeholder="Peso manhã" style={input}/>
            <input placeholder="Peso noite" style={input}/>
            <input placeholder="Proteína café" style={input}/>
            <input placeholder="Proteína almoço" style={input}/>
            <input placeholder="Proteína lanche" style={input}/>
            <input placeholder="Proteína jantar" style={input}/>
            <input placeholder="Whey" style={input}/>

            <select style={input}>
              <option>Musculação</option>
              <option>Natação</option>
              <option>TRX</option>
            </select>

            <select style={input}>
              <option>Não aplicou Tirzepatida</option>
              <option>2.5mg</option>
              <option>5mg</option>
            </select>

            <button style={{
              padding:16,
              borderRadius:18,
              border:"none",
              background:"#16a34a",
              color:"white"
            }}>
              Salvar Dia
            </button>
          </div>
        </div>

        <div style={{
          background:"#111",
          borderRadius:30,
          padding:30
        }}>
          <h2>Histórico Inicial</h2>

          <ul style={{lineHeight:2}}>
            <li>28/04 → 113kg → 2.5mg</li>
            <li>29/04 → 111kg</li>
            <li>30/04 → 109kg</li>
            <li>01/05 → 108.5kg</li>
            <li>02/05 → 107.9kg</li>
            <li>03/05 → 2.5mg</li>
            <li>04/05 → 157g proteína</li>
            <li>05/05 → 150g proteína</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const input = {
  padding:14,
  borderRadius:16,
  border:"1px solid #333",
  background:"#18181b",
  color:"white"
}
