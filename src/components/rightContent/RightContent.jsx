import { motion } from "framer-motion";
import "./RightContent.css";
import Hinh1 from "../../assets/vai.jpg";
import Hinh2 from "../../assets/qr.jpg";
import tiktok from "../../assets/logo-tiktok.svg";
import mess from "../../assets/messenger.svg";
import face from "../../assets/facebook.svg";

const RightContent = () => {
    return (
        <div className="content">
            <div className="icon__list">
                <a href="https://www.facebook.com/nongvanhan2004?mibextid=LQQJ4d" target="_blank">
                    <img src={face} alt="" className="icon" />
                </a>
                <a href="https://www.tiktok.com/@hanbacgiang98" target="_blank">
                    <img src={tiktok} alt="" className="icon" />
                </a>
                <a href="https://m.me/nongvanhan2004?mibextid=LQQJ4d" target="_blank">
                    <img src={mess} alt="" className="icon" />
                </a>
            </div>
            <motion.div
                className="icon-society"
                animate={{
                    x: ["0px", "20px", "0px"],
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 1,
                }}
            >
                <img src={Hinh2} alt="Logo" className="animated-image-top" />
            </motion.div>
            <motion.div
                className="icon-society"
                animate={{
                    x: ["0px", "10px", "0px"],
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 1,
                }}
            >
                <img src={Hinh1} alt="Logo" className="animated-image-bottom" />
            </motion.div>
        </div>
    );
};

export default RightContent;
