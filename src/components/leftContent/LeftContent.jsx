import "./LeftContent.css";
import Logo from "../../assets/logoChinh.jpg";

const LeftContent = () => {
    return (
        <div className="content">
            <>
                <img src={Logo} alt="" className="logo" />
                <h1>Nông Văn Hân</h1>
                <div className="text highlight">
                    <p>
                        Xin chào mình là Nông Văn Hân , đến từ Hội lùa gà, mình chuyên lừa đảo chiếm đoạt tài sản, mô
                        giới cò đất. Bạn nào muốn bị lừa thì liên hệ mình.
                    </p>
                    <p className="highlight">
                        Đăng kí và theo dõi kênh của mình để biết thêm nhiều thứ thú vị trên Đông va Tây Bắc nhé .!
                    </p>
                    <p className="highlight">Donate cho mình :</p>
                    <p className="highlight">Nông Văn Hân</p>
                    <p className="highlight">- BIDV : 1210860843</p>
                    <p className="highlight">*Hân chỉ sử dụng duy nhất 1 FanPage link ở dưới nha mọi người.</p>
                    <div className="contact">
                        <p>Liên hệ công việc :</p>
                        <p>•Điện Thoại , Zalo : 0985.234.750 </p>
                        <p>•Mail : Nongvanhan2004@gmail.com</p>
                        <p>•Facebook : Nông Văn Hân </p>
                    </div>
                </div>
            </>
        </div>
    );
};

export default LeftContent;
