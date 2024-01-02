import logo from "../../img/logo-marca.png"

export default function Footer() {
    return (
        <div className="container-fluid border-top">
            <div className="row mt-5 mb-5">
                <div className="col-6 text-center margem-footer">
                    <img src={logo} alt="logo-marca" width={300} height={100}></img>
                </div>
            </div>

        </div>
    );
}