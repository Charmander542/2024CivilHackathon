import { Models } from "appwrite";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import StreetMap from "./map";

export default function ProjectsGrid() {
  

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        <StreetMap />
      </div>
      
    </div>
  );
}
