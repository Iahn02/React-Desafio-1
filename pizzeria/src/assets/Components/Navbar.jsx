
const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
                
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <div className="navbar-nav">
                        <button className="btn btn-outline-light text-white m-1 btn-sm">🍕 Home</button>
                        {token ? (
                            <>
                                <button className="btn btn-outline-light text-white m-1 btn-sm">🔓 Profile</button>
                                <button className="btn btn-outline-light text-white m-1 btn-sm">🔒 Logout</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline-light text-white m-1 btn-sm">🔐 Login</button>
                                <button className="btn btn-outline-light text-white m-1 btn-sm">🔐 Register</button>
                            </>
                        )}
                    </div>
                </div>

                <div className="navbar-nav ms-auto">
                    <button className="btn btn-outline-info m-1 btn-sm">🛒 Total: ${total.toLocaleString()}</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;