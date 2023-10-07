import React, { useEffect, useState } from "react";
import CoordinateMapping from "../../components/upload/coordinate-mapping/CoordinateMapping";
import "./UploadInterface.css";

export default function UploadInterface() {

    const [templateName, setTemplateName] = useState("");

    return (
        <>
            {/* Navbar */}
            <div className="top">
                <div className="backsymbol">&lt;</div>
                <div className="write">Back</div>
                <div className="navbar" />
            </div>

            {/* Template Form */}
            <div className="template-details">
                <div className="details">
                    <label className="name" for="template-name">Template Name:</label>
                    <div className="box">
                        <input id="template-name" value={templateName} onChange={e => setTemplateName(e.target.value)} />
                    </div>
                    <button className="btn" >Upload Template</button>
                </div>
                <div className="interface">
                    <CoordinateMapping />
                </div>
            </div>
        </>
    )
} 