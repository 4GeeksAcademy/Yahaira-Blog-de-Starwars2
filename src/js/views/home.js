import React, { useContext } from "react";//1
import { Context } from "../store/appContext"; //2
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	//3
	const { store, actions } = useContext(Context);
	//actions.loadPeople()
	let datap = store.people;
	return (


		<div className="text-center mt-5">
			{
				datap.map((value, index, array) => {
					return <h1>{value.name } {value.uid}</h1>
				})
			}
		</div>

	)
};
