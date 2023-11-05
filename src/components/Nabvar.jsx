import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nabvar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {
            navLinks.map( (item) => (
              <li key={item.label}>
                <a href={item.href} className="font-motserrat leading-normal text-lg text-slate-gray">{item.label}</a>
              </li>
            ))
          }
        </ul>
        <div className="hidden max-md:block">
          <img src={hamburger} height={25} width={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nabvar;
