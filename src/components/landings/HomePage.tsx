import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <div>
        <h1>Rubix Revolution</h1>
        <p>Cube Culture and Beyond.</p>
        <Link to="/cubes">See Our Cubes</Link>
        </div>
    )
}