import { ReactComponent as Logo } from "../assets/logo.svg";

function Layout({ children }) {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div className="flex flex-col w-full">
          <div>
            <Logo />
          </div>
          <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
          <p className="w-5/12 mx-auto md:mx-0 text-gray-500">Try it out.</p>
        </div>
        <div className="w-full md:w-full lg:w-6/12 mx-auto md:mx-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
