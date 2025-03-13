import ReactImage from "./assets/fundoDash.svg"; // Importe a imagem
import LoginForm from "./LoginForm"; // Importe o componente LoginForm

function HeroSection() {
  return (
    <section
      className="min-h-screen bg-no-repeat flex flex-col items-center justify-start text-center"
      style={{
        background: `url(${ReactImage}) no-repeat center center / cover`,
        backgroundAttachment: "fixed", // Faz a imagem de fundo ficar fixa
      }}
    >
      <div className="text-center mt-[19vh]">
        <div className="flex justify-center space-x-0">
          <h1 className="font-sans text-8xl font-extrabold text-white">Med</h1>
          <h1
            className="font-sans text-8xl font-extrabold text-white"
            style={{ color: "#5ce1e6" }}
          >
            Agenda
          </h1>
        </div>
        <p className="text-xl font-sans text-white mt-10 text-center">
          Sua saúde, seu tempo, sua escolha.
        </p>
        <span className="block mt-15 w-[15vh] border-t-[3px] border-[#5ce1e6] mx-auto"></span>

        {/* Aqui você adiciona o LoginForm */}
        <LoginForm />
      </div>
    </section>
  );
}

export default HeroSection;
