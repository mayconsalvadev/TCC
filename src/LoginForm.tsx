import { X } from "lucide-react"; // Importando o ícone de "X" (fechar)
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // Estado para controle da modal
  const [showPacienteForm, setShowPacienteForm] = useState(false); // Controle para o formulário de paciente
  const [showMedicoForm, setShowMedicoForm] = useState(false); // Controle para o formulário de médico

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handlePacienteClick = () => {
    setShowPacienteForm(true);
    setShowMedicoForm(false); // Esconde o formulário do médico
    setShowModal(false); // Fecha a modal
  };

  const handleMedicoClick = () => {
    setShowMedicoForm(true);
    setShowPacienteForm(true); // Garante que o formulário de paciente seja mostrado também
    setShowModal(false); // Fecha a modal
  };

  const closeForm = () => {
    setShowPacienteForm(false);
    setShowMedicoForm(false);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div
        className="p-8 rounded-lg shadow-lg w-96"
        style={{
          backgroundColor: "transparent", // Fundo totalmente transparente
          border: "none", // Remover borda
          boxShadow: "none", // Remover sombra
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="mt-1 p-3 w-full border-2 border-[#5ce1e6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] text-[#5ce1e6] placeholder-[#5ce1e6] hover:border-gray-300 hover:font-bold"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="mt-1 p-3 w-full border-2 border-[#5ce1e6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] text-[#5ce1e6] placeholder-[#5ce1e6] hover:border-gray-300 hover:font-bold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-1/2 border-[3px] border-[#5ce1e6] text-[#5ce1e6] p-3 rounded-full font-bold hover:bg-[#5ce1e6] hover:text-gray-200 hover:border-gray-200"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            >
              Entrar
            </button>

            {/* Botão Registrar que abre a Modal */}
            <button
              type="button"
              className="w-1/2 border-[3px] border-[#5ce1e6] text-[#5ce1e6] p-3 rounded-full font-bold hover:bg-[#5ce1e6] hover:text-gray-200 hover:border-gray-200"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
              onClick={() => setShowModal(true)} // Abre a Modal
            >
              Registrar
            </button>
          </div>
          <div className="text-center mt-4">
            <a
              href="/recover-password"
              className="text-sm text-[#5ce1e6] hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </form>
      </div>

      {/* Modal para escolha do tipo de cadastro */}
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Fundo escuro com opacidade
        >
          <div className="bg-white p-8 rounded-lg w-80">
            <h2 className="text-center text-xl font-bold mb-4">
              Escolha o Tipo de Cadastro
            </h2>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-[#1a2d3b] text-white p-3 rounded-full border-2 border-transparent hover:border-gray-300 hover:font-bold"
                onClick={handlePacienteClick} // Exibe o formulário de paciente e fecha a modal
              >
                Cadastro Paciente
              </button>
              <button
                className="bg-[#1a2d3b] text-white p-3 rounded-full border-2 border-transparent hover:border-gray-300 hover:font-bold"
                onClick={handleMedicoClick} // Exibe o formulário de médico e fecha a modal
              >
                Cadastro Médico
              </button>
              <button
                className="text-center text-[#1a2d3b] mt-4 py-3 px-6 rounded-full hover:text-black hover:font-bold hover:text-lg transition-all duration-200"
                onClick={() => setShowModal(false)} // Fecha a Modal
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formulário de Cadastro Paciente */}
      {(showPacienteForm || showMedicoForm) && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Fundo escuro com opacidade
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-115 transition-all duration-500 overflow-y-auto max-h-[80vh]">
            <button
              onClick={closeForm} // Fecha o formulário ao clicar no "X"
              className="absolute top-2 right-2 text-3xl text-[#1a2d3b] hover:text-black hover:scale-130 transition-all duration-300"
            >
              <X className="w-6 h-6" />{" "}
              {/* Usando o ícone de "X" (fechar) do Lucide */}
            </button>

            {/* Formulário do Paciente */}
            {showPacienteForm && (
              <div>
                <h2 className="text-center text-xl font-bold mb-4">
                  Cadastro Paciente
                </h2>
                <form>
                  <div className="mb-4 group">
                    <label
                      htmlFor="nome"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="Nome do Paciente"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="cpf"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      CPF
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="CPF"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="data_nasc"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      id="data_nasc"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="sexo"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Sexo
                    </label>
                    <select
                      id="sexo"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                    >
                      <option value="">Selecione seu gênero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                      <option value="nao_informar">Prefiro não dizer</option>
                    </select>
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="endereco"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="Endereço"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="cep"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      CEP
                    </label>
                    <input
                      type="text"
                      id="cep"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="CEP"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="cidade"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="cidade"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="Cidade"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="estado"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Estado
                    </label>
                    <input
                      type="text"
                      id="estado"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="Estado"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      htmlFor="telefone"
                      className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                    >
                      Telefone
                    </label>
                    <input
                      type="text"
                      id="telefone"
                      className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                      placeholder="Telefone"
                    />
                  </div>

                  {/* Campos exclusivos para médico */}
                  {showMedicoForm && (
                    <div>
                      <div className="mb-4 group">
                        <label
                          htmlFor="crm"
                          className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                        >
                          CRM
                        </label>
                        <input
                          type="text"
                          id="crm"
                          className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                          placeholder="CRM do Médico"
                        />
                      </div>

                      <div className="mb-4 group">
                        <label
                          htmlFor="especialidade"
                          className="block text-black text-left group-hover:font-bold group-focus-within:font-bold"
                        >
                          Especialidade
                        </label>
                        <input
                          type="text"
                          id="especialidade"
                          className="mt-1 p-3 w-full border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black text-black group-hover:scale-105 focus:scale-105 transition-all duration-200 group-hover:border-gray-500 focus:border-gray-500"
                          placeholder="Especialidade"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-4/4 p-3 bg-[#45cc82] text-white rounded-full font-bold hover:scale-105 hover:font-bold transition-all duration-200"
                    >
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
