import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Inicial" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/agenda", label: "Agenda" },
  { href: "/projetos", label: "Projetos" },
  { href: "/dados", label: "Dados" },
  { href: "/contato", label: "Contato" },
];

const Navbar = () => {
  return (
    <div className="bg-red-400 sticky z-10 top-0 inset-x-0">
      <header className="relative border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between h-16">
          <div>
            <div className="flex border-white border-4 absolute">
              <div className="sm:w-32 sm:h-32 w-20 h-20 bg-blue-400"></div>
            </div>
          </div>

          <nav>
            <ul className="lg:flex gap-4 items-center justify-between  uppercase">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
