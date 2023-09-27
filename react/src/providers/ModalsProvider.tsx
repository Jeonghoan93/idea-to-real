import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
