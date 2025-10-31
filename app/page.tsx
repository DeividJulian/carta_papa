export default function Home() {
  return (
    <div>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img src="/tio ben.jpg" alt="Imagen izquierda 1" className="side-img" style={{ width: '250px', height: 'auto' }} />
          <img src="/papa.jpg" alt="Imagen izquierda 2" className="side-img" />
        </div>

        <div className="card">
          <h1>Un padre es una roca sólida para sus hijos</h1>
          <p> Querido Papá, en este día especial quiero expresarte lo mucho que
            significas para mí. Eres mi héroe, mi guía y mi mejor amigo.
            Siempre has estado ahí para apoyarme, enseñarme y amarme incondicionalmente.
            Gracias por ser el padre increíble que eres. Quiero decirte que te admiro
            profundamente por la persona que eres y por todo lo que has hecho por mí.
            Tu dedicación, sacrificio y amor han moldeado mi vida de una manera
            que nunca podré agradecer lo suficiente.Gracias por estar conmigo siempre
            </p>
            Te amo con todo mi corazón. ¡Feliz cumpleaños, papá!
           <p>
            ATT:Tu Hijo </p> 
          <p>
            Un hombre que ha estado a su lado en los momentos más importantes,
            que ha demostrado (con acciones más que con palabras) el gran amor
            que tiene hacia cada uno de sus hijos.
            Es un hombre que ha trabajado duro para sacar adelante a su familia.
            A veces ha ganado y a veces ha perdido, pero siempre ha estado
            presente, y ha seguido adelante.
          </p>
          <p>
            <em>— Rebeca Byler</em>
          </p>
        </div>

        <img src="/dardevil.jpg" alt="Imagen derecha" className="side-img" />
      </div>

      <div className="footer">
        FELIZ CUMPLEAÑOS PAPÁ
      </div>
    </div>
  );
}