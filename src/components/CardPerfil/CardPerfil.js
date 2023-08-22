import "../Menu/reset.css";
import "./CardPerfil.css";
import { ImgPerfil1 } from "../Imagens/ImgPerfil/ImgPerfil";
import { Button } from "../Button/Button";

export function CardPerfil() {
  return (
    <div className="esquerda">
      <div className="perfil">
        <a href="" target="_blank">
          <div className="img-borda">
            <div className="img-contem">
              <ImgPerfil1 />
            </div>
          </div>
        </a>
        <h1 className="nome">Geralt de Rivia</h1>
        <h1 className="nacionalidade">Solteiro, Brasil</h1>
      </div>

      <a href="" target="_blank">
        <Button fullWidth>Editar meu perfil</Button>
      </a>
    </div>
  );
}
