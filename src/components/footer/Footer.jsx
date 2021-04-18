import React from "react"
import "./styles.css"

const Footer = () => {
    var d = new Date();
    return (
        <div className="footer">
            <p> &copy; AC {d.getFullYear()}</p>
        </div>
    )
}

export default Footer