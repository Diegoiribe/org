import "./ListaOpciones.css";

const ListaOpciones = (props) => {
	//Metodo map -> arrglor.map((elemento, indice) => {return elemento})

	const handleChange = (e) => {
		props.setEquipos(e.target.value);
	};

	return (
		<div className="lista-opciones">
			<label>{props.titulo}</label>
			<select
				value={props.value}
				onChange={handleChange}
			>
				<option
					value=""
					disabled
					defaultValue=""
					hidden
				>
					Seleccionar equipo
				</option>
				{props.equipos.map(
					(equipo, indice) => {
						return (
							<option
								key={indice}
								value={equipo}
							>
								{equipo}
							</option>
						);
					}
				)}
			</select>
		</div>
	);
};

export default ListaOpciones;
