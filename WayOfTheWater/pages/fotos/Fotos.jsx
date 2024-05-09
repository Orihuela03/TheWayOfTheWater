import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import fotos from "../../models/fotos/fotos";
import "./Fotos.css"

function Fotos() {
  return (
    <>
      <Header />
      <p>Esta es la pagina de fotos</p>
      <div className="container">
        <div className="images">
          {
            fotos.map((foto) => (
              <img src={`/fotos/${foto.src}`} alt="foto" class="image-array" />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Fotos;