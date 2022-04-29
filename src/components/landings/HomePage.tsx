import React, {useState} from "react";
import { Link } from "react-router-dom";
import SpinCube from "../dummy-comps/SpinCube";
import StaticCube from "../dummy-comps/StaticCube";

export default function HomePage(){
    const [spin, setSpin] = useState(false);
    const spinHandler = () =>{
        setSpin(true);
    }

    const stopHandler = () => {
        setSpin(false);
    }

    return (
        <div>
        <h1>Rubix Revolution</h1>
        <p>Cube Culture and Beyond.</p>
        <Link to="/cubes">See Our Cubes</Link>
        <div>{spin ? <SpinCube /> : <StaticCube />}</div>
        <button type="button" onClick={spinHandler}>Spin Me</button>
        <button type="button" onClick={stopHandler}>Stop Spinning</button>
        </div>
    )
}