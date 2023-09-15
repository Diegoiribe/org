import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
	const placeholderModificado = `${props.placeholder}...`;

	const { type = "text" } = props;

	const handleChange = (e) => {
		props.setValor(e.target.value);
	};

	return (
		<div
			className={`campo campo-${type}`}
		>
			<label>{props.titulo}</label>
			<input
				placeholder={placeholderModificado}
				required={props.required}
				value={props.valor}
				onChange={handleChange}
				type={type}
			/>
		</div>
	);
};

export default CampoTexto;
