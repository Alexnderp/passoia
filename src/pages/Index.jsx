import  { useState } from "react";
import { useCor } from "../context/CorContext";

function Index() {
  const { corAtual, setCorAtual } = useCor();
  const [corSelecionada, setCorSelecionada] = useState("rosa");
  const batons = {
    roxo: {
      imagem:
        "https://i.ibb.co/2YcwP1FJ/4cc2c563d46f1f453c234c2f2cfea137ce0cf535.png",
      nomeCor: "Violet Dream",
      descricao:
        "Roxo misterioso e sofisticado. Ideal para quem ama ousar com elegância.",

      cor: "#906276",
    },
    vermelho: {
      imagem:
        "https://i.ibb.co/C3sTj8Pr/b889211c864f95e62d98ad965144d13d971ccade.png",
      nomeCor: "Red Fire",
      descricao: "Vermelho clássico intenso. Poderoso, sensual e atemporal.",
      cor: "#B42B3C",
    },
    marrom: {
      imagem:
        "https://i.ibb.co/9msy3wdd/65c5f1514dc01ec121156047f8cc7ef6b6953422.png",
      nomeCor: "Chocolate Nude",
      descricao:
        "Marrom acinzentado quente. O nude perfeito dos anos 90, moderno e chique.",
      cor: "#48312E",
    },
    rosa: {
      imagem:
        "https://i.ibb.co/G3cT6Dt9/1036e85a836ad3feafe61f8a2ea7234ee967c517.png",
      nomeCor: "Rose Kiss",
      descricao:
        "Rosa suave e romântico, perfeito para o dia a dia com toque de delicadeza.",
      cor: "#DD5C86",
    },
  };
  const atual = batons[corSelecionada];
  const trocarCor = (chave) => {
    setCorSelecionada(chave);
    setCorAtual(batons[chave].cor);
  };
  return (
    <>
      <section id="intro">
        <img
          class="w-full"
          src="https://i.ibb.co/Q7nVswBg/f7b3fe0430699c2c8b464182f677b2d79fd95e21.jpg"
          alt=""
        />
      </section>
      <section id="looks" class="text-center mt-1">
        <h2 class="text-xl md:text-5xl font-bold mb-10 text-gray-800">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        <div class="max-w-5xl mx-auto p-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/7tCdV2x7/b634cb83ab02a94f26210ce4fe4f0aef73f10451.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-3xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Lábios
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/F4zxxW7w/f5d836eff5d870d5cabe2eda352e54b076c9844d.jpg"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-3xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Olhos
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/DgbQW91M/0e4f9956e2e1b8a059eb88676ba73b6517cb80de.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-3xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Rosto
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/mFJfFFFQ/ff118e81d337da4d626a1a62a2f0f26681881548.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-3xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Tendência
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="lancamentos" class="py-16 text-center">
        <h2 class="text-xl md:text-5xl font-bold mb-10 text-gray-800">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div class="max-w-md mx-auto">
          <img
            src={atual.imagem}
            alt={` ${atual.nomeCor}`}
            class="w-72 mx-auto rounded-2xl shadow-2xl transition-all duration-700 ease-in-out"
          />

          <div class="flex justify-center gap-1 my-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} class="w-7 h-7 fill-yellow-400" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>

          <h3 class="text-3xl font-bold text-gray-800 mb-2">
            <span style={{ color: atual.cor }}>{atual.nomeCor}</span>
          </h3>
          <p class="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto mb-8 italic">
            {atual.descricao}
          </p>

          <div class="flex justify-center gap-7">
            <button
              onClick={() => trocarCor("rosa")}
              class={`w-14 h-14 bg-[#DD5C86] rounded-full border-4 border-white shadow-xl 
                hover:scale-125 hover:-translate-y-3 transition duration-300 
                ring-4 ${
                  corSelecionada === "rosa"
                    ? "ring-pink-400 shadow-2xl scale-110"
                    : "ring-transparent"
                }`}
              aria-label="Rose Kiss"
            />

            <button
              onClick={() => trocarCor("vermelho")}
              class={`w-14 h-14 bg-[#B42B3C] rounded-full border-4 border-white shadow-xl 
                hover:scale-125 hover:-translate-y-3 transition duration-300 
                ring-4 ${
                  corSelecionada === "vermelho"
                    ? "ring-red-500 shadow-2xl scale-110"
                    : "ring-transparent"
                }`}
              aria-label="Red Fire"
            />

            <button
              onClick={() => trocarCor("roxo")}
              class={`w-14 h-14 bg-[#906276] rounded-full border-4 border-white shadow-xl 
                hover:scale-125 hover:-translate-y-3 transition duration-300 
                ring-4 ${
                  corSelecionada === "roxo"
                    ? "ring-purple-500 shadow-2xl scale-110"
                    : "ring-transparent"
                }`}
              aria-label="Violet Dream"
            />

            <button
              onClick={() => trocarCor("marrom")}
              class={`w-14 h-14 bg-[#48312E] rounded-full border-4 border-white shadow-xl 
                hover:scale-125 hover:-translate-y-3 transition duration-300 
                ring-4 ${
                  corSelecionada === "marrom"
                    ? "ring-amber-950 shadow-2xl scale-110"
                    : "ring-transparent"
                }`}
              aria-label="Chocolate Nude"
            />
          </div>
        </div>
      </section>
      <section id="novidades" class="py-16 text-center">
        <h2 class="text-xl md:text-5xl font-bold mb-10 text-gray-800">
          NOVIDADADES PARA VOCÊ
        </h2>
        <img
          class="w-[24rem] m-auto"
          src="https://i.ibb.co/TBD9bkQ8/69c732a3b2946f5938eb1dfae44cebb4dd69d4b2.jpg"
          alt=""
        />
      </section>
    </>
  );
}

export default Index;
