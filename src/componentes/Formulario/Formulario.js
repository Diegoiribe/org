import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { v4 as uudd } from "uuid";

const Formulario = (props) => {
	const [nombre, setNombre] =
		useState("");
	const [puesto, setPuesto] =
		useState("");
	const [foto, setFoto] = useState("");
	const [equipos, setEquipos] =
		useState("");

	const [titulo, setTitulo] =
		useState("");
	const [color, setColor] = useState("");

	const {
		registrarColaborador,
		crearEquipo,
	} = props;

	const manejarNuevoEquipo = (e) => {
		e.preventDefault();
		crearEquipo({
			titulo,
			colorPrimario: color,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Formulario enviado", e);
		let datosAEnviar = {
			nombre,
			puesto,
			foto,
			equipos,
			id: uudd(),
			fav: false,
		};
		registrarColaborador(datosAEnviar);
	};

	return (
		<section className="formulario">
			<form onSubmit={handleSubmit}>
				<h2>
					Rellena el formulario para crear el
					colaborador
				</h2>
				<CampoTexto
					titulo="Nombre"
					placeholder="Ingresar nombre"
					required
					value={nombre}
					setValor={setNombre}
				/>
				<CampoTexto
					titulo="Puesto"
					placeholder="Ingresar puesto"
					required
					value={puesto}
					setValor={setPuesto}
				/>
				<CampoTexto
					titulo="Foto"
					placeholder="Ingresar enlace de foto"
					required
					value={foto}
					setValor={setFoto}
				/>
				<ListaOpciones
					titulo="Equipos"
					value={equipos}
					setEquipos={setEquipos}
					equipos={props.equipos}
				/>
				<Boton titulo="Crear colaborador" />
			</form>
			<form onSubmit={manejarNuevoEquipo}>
				<h2>
					Rellena el formulario para crear el
					equipo
				</h2>
				<CampoTexto
					titulo="Titulo"
					placeholder="Ingresar titiulo"
					required
					value={titulo}
					setValor={setTitulo}
				/>
				<CampoTexto
					titulo="Color"
					placeholder="Ingresar el color en hexadecimal"
					required
					value={color}
					setValor={setColor}
					type="color"
				/>

				<Boton titulo="Crear equipo" />
			</form>
		</section>
	);
};

export default Formulario;
