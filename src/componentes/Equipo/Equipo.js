import Equipos from "./Equipos.css";
import Colaborador from "../Colaborador/index.js";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
	//Desestructuración de objetos
	const {
		colorPrimario,
		colorSecundario,
		titulo,
		id,
	} = props.datos;

	const {
		colaboradores,
		eliminarColaborador,
		actualizarColor,
		like,
	} = props;

	return (
		<>
			{colaboradores.length > 0 && (
				<section
					className="equipo"
					style={{
						backgroundColor: hexToRgba(
							colorPrimario,
							0.6
						),
					}}
				>
					<input
						type="color"
						className="input-color"
						value={colorPrimario}
						style={{
							background: hexToRgba(
								colorPrimario,
								0
							),
						}}
						onChange={(event) => {
							actualizarColor(
								event.target.value,
								id
							);
						}}
					/>
					<h3
						style={{
							borderColor: colorPrimario,
						}}
					>
						{titulo}
					</h3>
					<div className="colaboradores">
						{colaboradores.map(
							(colaborador, index) => {
								return (
									<Colaborador
										datos={colaborador}
										key={index}
										colorPrimario={colorPrimario}
										eliminarColaborador={
											eliminarColaborador
										}
										like={like}
									/>
								);
							}
						)}
					</div>
				</section>
			)}
		</>
	);
};

export default Equipo;
