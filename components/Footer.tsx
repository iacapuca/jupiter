const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container px-6 pt-10 pb-6 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full text-center md:w-1/4 md:text-left">
            <h5 className="mb-6 font-bold uppercase">Ameciclo</h5>
            <ul className="mb-4">
              <li className="mt-2"></li>
              <p className="text-gray-600 hover:underline hover:text-red-600">
                Ameciclo - Associação Metropolitana de Ciclistas do Recife
              </p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
