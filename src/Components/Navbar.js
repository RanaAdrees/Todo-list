import React, { useState } from 'react'
import './style.css';
const Navbar = ({ searchTodo }) => {
    const [searchfield, setSearchField] = useState("");
    const searchfunc = (event) => {
        setSearchField(event.target.value);
        // console.log(event.target.value);
        searchTodo(event.target.value);
    }
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="">
                            <input className="form-control me-2" type="search" placeholder="Search Todo" aria-label="Search"
                                value={searchfield}
                                onChange={searchfunc} />

                        </form>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form className="">
                        <input className="form-control me-2" type="search" placeholder="Search Todo" aria-label="Search"
                            value={searchfield}
                            onChange={searchfunc} />

                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar