import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { post } from "../../../Api";
function Login() {
  const [hiddenPass, setHiddenPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = post();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    mutate({ url: "/auth/login", data });
  };

  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="flex items-center">
        <div className="w-[598px] h-[747px] rounded-[20px] px-6 shadow-md">
          <div className="w">
            <img
              src="https://res.cloudinary.com/dxuknuxer/image/upload/v1722165188/facebook_cover_photo_1_w1tmfw.png"
              alt="logo"
              width={181}
              height={54}
            />
          </div>
          <h2 className="text-base text-[#000] opacity-50">Welcome back !!!</h2>
          <form onSubmit={handleLogin}>
            <h1 className="text-[56px] font-semibold text-[#000]">Sign in</h1>
            <div className="flex flex-col">
              <label className="text-base font-light pb-2" htmlFor="idEmail">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="bg-[#FFF6F4] outline-none h-[46px] px-3 w-[478px] rounded"
                name="email"
                id="idEmail"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="flex flex-col mt-5 w-[478px] relative">
              <div className="flex items-center justify-between pb-2">
                <label className="text-base font-light" htmlFor="idPassword">
                  Password
                </label>
                <span className="text-sm font-light">Forgot Password ?</span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={hiddenPass ? "text" : "password"}
                className="bg-[#FFF6F4] outline-none h-[46px] px-3 w-[478px] rounded relative"
                name="password"
                id="idPassword"
                placeholder="Nhập mật khẩu của bạn"
              />
              <div className="absolute right-2 bottom-3">
                {hiddenPass ? (
                  <button onClick={() => setHiddenPass(false)}>
                    <VisibilityIcon />
                  </button>
                ) : (
                  <button onClick={() => setHiddenPass(true)}>
                    <VisibilityOffIcon />
                  </button>
                )}
              </div>
            </div>

            <button className="bg-[#F47458] text-white h-[46px] py-3 pl-3 pr-5 rounded-3xl text-base font-semibold">
              SIGN IN
            </button>
          </form>
        </div>
        <div className="bg-[#FFCEAE] w-["></div>
      </div>
    </div>
  );
}

export default Login;
