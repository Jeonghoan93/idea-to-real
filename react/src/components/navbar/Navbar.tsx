import { useCurrentUser } from "src/hooks/useCurrentUser";
import Container from "../Container";

import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";
import UserMenu from "./Components/UserMenu";

const Navbar: React.FC = () => {
  const currentUser = useCurrentUser();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className="relative">
              <div className="flex flex-row">
                <Logo />
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <MainMenu />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
