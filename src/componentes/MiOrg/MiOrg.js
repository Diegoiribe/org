import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
	//Estado - hooks
	//useState()
	//usesState es un hook que nos permite crear un estado en un componente funcional

	return (
		<section className="orgSection">
			<h3 className="titulo">Mi organización</h3>
			<img src="/img/add.png" alt="Mi organización" onClick={props.cambiarMostrar} />
		</section>
	);
};

export default MiOrg;
