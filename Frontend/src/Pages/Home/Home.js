import React from "react";
import style from "./Home.module.css"
import Login from "../../baseUI/Login/loginSide"
import Upload from "../../baseUI/photoUpload/upload";


function Home() {

    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.half1}>
                    <Login/>
                </div>
                <div className={style.half2}>
                    <Upload/>
                </div>
            </div>
        </div>
    );
};



export default Home;
