import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className=" border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Fiorvo</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (location.pathname === "/settings") {
                  navigate(-1);
                } else {
                  navigate("/settings");
                }
              }}
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">主題</span>
            </button>

            {authUser && (
              <>
                <button
                  onClick={() => {
                    if (location.pathname === "/profile") {
                      navigate(-1);
                    } else {
                      navigate("/profile");
                    }
                  }}
                  className="btn btn-sm gap-2"
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">個人</span>
                </button>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">登出</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
