import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const NavWrapper: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <section className="h-screen overflow-hidden relative">
      <div className="bg-repeat w-full h-full">
        <div className="m-auto w-3/5 h-screen flex flex-col overflow-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default NavWrapper;
