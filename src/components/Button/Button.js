import "./Button.css";
import ButtonMui from "@mui/material/Button";

export function Button(props) {
  return (
    <ButtonMui className="editar-perfil button" variant="contained" {...props}>
      Editar meu perfil
    </ButtonMui>
  );
}
