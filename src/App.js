import {
	useState,
	useEffect,
} from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo.js";
import Footer from "./componentes/Footer";

function App() {
	//Estado - hooks
	const [
		mostrarFormulario,
		actualizarMostrar,
	] = useState(true);

	const [
		colaboradores,
		setColaboradores,
	] = useState([
		{
			id: uuid(),
			equipos: "Front End",
			foto:
				"https://github.com/harlandlohora.png",
			nombre: "Harland Lohora",
			puesto: "Instructor",
			fav: true,
		},
		{
			id: uuid(),
			equipos: "Programacion",
			foto:
				"https://github.com/sergioiribe.png",
			nombre: "Genesys Rondón",
			puesto:
				"Desarrolladora de software e instructora",
			fav: false,
		},
		{
			id: uuid(),
			equipos: "UX y Diseño",
			foto:
				"https://github.com/JeanmarieAluraLatam.png",
			nombre: "Jeanmarie Quijada",
			puesto: "Instructora en Alura Latam",
			fav: true,
		},
		{
			id: uuid(),
			equipos: "Programacion",
			foto:
				"https://github.com/christianpva.png",
			nombre: "Christian Velasco",
			puesto: "Head de Alura e Instructor",
			fav: false,
		},
		{
			id: uuid(),
			equipos: "Innovaciones y Gestion",
			foto:
				"https://github.com/JoseDarioGonzalezCha.png",
			nombre: "Jose Gonzalez",
			puesto: "Dev FullStack",
			fav: true,
		},
	]);

	// Función para guardar en localStorage
	const handleSaveToLocalStorage =
		() => {
			localStorage.setItem(
				"colaboradores",
				JSON.stringify(colaboradores)
			);
		};

	const [
		loadingFromStorage,
		setLoadingFromStorage,
	] = useState(true);

	useEffect(() => {
		// Intenta cargar datos de localStorage solo si loadingFromStorage es true
		if (loadingFromStorage) {
			const storedColaboradores =
				localStorage.getItem(
					"colaboradores"
				);
			if (storedColaboradores) {
				setColaboradores(
					JSON.parse(storedColaboradores)
				);
			}
			setLoadingFromStorage(false); // Desactiva la carga desde localStorage después de cargar
		} else {
			// Guarda datos en localStorage cuando colaboradores cambia
			localStorage.setItem(
				"colaboradores",
				JSON.stringify(colaboradores)
			);
		}
	}, [
		colaboradores,
		loadingFromStorage,
	]);

	const [equipos, actulizarEquipos] =
		useState([
			{
				id: uuid(),
				titulo: "Programacion",
				colorPrimario: "#57c278",
				colorSecundario: "#D9f7e9",
			},
			{
				id: uuid(),
				titulo: "Front End",
				colorPrimario: "#82cffa",
				colorSecundario: "#E8F8FF",
			},
			{
				id: uuid(),
				titulo: "Data Science",
				colorPrimario: "#a6d157",
				colorSecundario: "#F0F8E2",
			},
			{
				id: uuid(),
				titulo: "Devops",
				colorPrimario: "#e06b69",
				colorSecundario: "#FDE7E8",
			},
			{
				id: uuid(),
				titulo: "UX y Diseño",
				colorPrimario: "#db6ebf",
				colorSecundario: "#FAE9F5",
			},
			{
				id: uuid(),
				titulo: "Movil",
				colorPrimario: "#ffba05",
				colorSecundario: "#FFF5D9",
			},
			{
				id: uuid(),
				titulo: "Innovaciones y Gestion",
				colorPrimario: "#ff8a29",
				colorSecundario: "#FFEEDF",
			},
		]);

	//Ternario --> condicion ? verdadero : falso

	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	//Registrar colaborador
	const registrarColaborador = (
		colaborador
	) => {
		console.log(
			"Colaborador registrado",
			colaborador
		);
		//Spread operator
		setColaboradores([
			...colaboradores,
			colaborador,
		]);
	};

	//Eliminar colaborador
	const eliminarColaborador = (id) => {
		console.log("Eliminar", id);
		const nuevosColaboradores =
			colaboradores.filter(
				(colaborador) =>
					colaborador.id !== id
			);
		setColaboradores(nuevosColaboradores);
		// Recuperar los datos almacenados en localStorage
		const storedData =
			localStorage.getItem(
				"colaboradores"
			);

		// Verificar si hay datos en localStorage
		if (storedData) {
			// Parsear los datos de JSON a un objeto JavaScript
			const data = JSON.parse(storedData);

			// Eliminar el elemento que deseas (por ejemplo, utilizando filter)
			const updatedData = data.filter(
				(colaborador) =>
					colaborador.id !== id
			);

			// Guardar los datos actualizados en localStorage
			localStorage.setItem(
				"colaboradores",
				JSON.stringify(updatedData)
			);

			// Actualizar el estado si es necesario (opcional)
			setColaboradores(updatedData);
		}
	};

	//Actualizar color
	const actualizarColor = (
		color,
		id
	) => {
		console.log(
			"actualizar color",
			color,
			id
		);
		const equiposActualizados =
			equipos.map((equipo) => {
				if (equipo.id === id) {
					equipo.colorPrimario = color;
				}
				return equipo;
			});

		actulizarEquipos(equiposActualizados);
	};

	//Crear equipo
	const crearEquipo = (nuevoEquipo) => {
		actulizarEquipos([
			...equipos,
			{ ...nuevoEquipo, id: uuid() },
		]);
	};

	const like = (id) => {
		const colaboradoresActualizados =
			colaboradores.map((colaborador) => {
				if (colaborador.id === id) {
					colaborador.fav = !colaborador.fav;
				}
				return colaborador;
			});

		setColaboradores(
			colaboradoresActualizados
		);
	};

	return (
		<div>
			{/* Las tres maneras hacen lo mismo, son diferentes maneras de decirle al navegador */}
			{/* {Header()} */}
			{/* <Header></Header>
			<Header /> */}
			<Header />
			{mostrarFormulario && (
				<Formulario
					equipos={equipos.map(
						(equipo) => equipo.titulo
					)}
					registrarColaborador={
						registrarColaborador
					}
					crearEquipo={crearEquipo}
				/>
			)}
			{/* {mostrarFormulario && <Formulario />} */}
			<MiOrg
				cambiarMostrar={cambiarMostrar}
			/>

			{equipos.map((equipos, index) => {
				return (
					<Equipo
						key={index}
						datos={equipos}
						colaboradores={colaboradores.filter(
							(colaborador) =>
								colaborador.equipos ===
								equipos.titulo
						)}
						eliminarColaborador={
							eliminarColaborador
						}
						actualizarColor={actualizarColor}
						like={like}
					/>
				);
			})}

			<Footer />
		</div>
	);
}

export default App;
