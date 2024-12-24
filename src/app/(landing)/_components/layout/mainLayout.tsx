import MainHeader from "./mainHeader/mainHeader";
import MainContainer from "./mainContainer/mainContainer";
import MainFooter from "./mainFooter/mainFooter";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <MainContainer>{children}</MainContainer>
      <MainFooter />
    </>
  );
};

export default MainLayout;
