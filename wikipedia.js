const respostas = {
    1: "Lembre o quanto vc é especial, unica e o quanto sua existência torna o mundo melhor, e o quanto vc melhora a vida de muita gente inclusive a minha.",
    2: "Respire fundo, lembre-se de que tudo na vida tem um propósito e que você tem força para encontrar o melhor caminho. E se precisar, estou aqui para te ajudar.",
    3: "Lembre-se que você já é suficiente só por ser você! O mundo precisa da sua essência exatamente do jeitinho que você é.",
    4: "lembre-se o tanto de coisas ruins que vc ja superou, vc é uma pessoa boa e incrível, o futuro com toda certeza reserva coisas incriveis pra você",
    5: "Se lembrar de que eu estou aqui. Sempre vou te ouvir e te apoiar, porque você nunca está sozinha.",
    6: "Lembrar que até as tempestades mais fortes passam e que depois delas vem um céu lindo. Coisas boas estão a caminho!",
    7: "Lembre-se que eu sempre vou estar aqui pra escutar vc.",
    8: "Lembra que ela é só uma velha coróca, não da palco pra maluca ksksksksksks.",
    9: "Lembre-se que quem não vê seu brilho não merece estar perto de você. Você é rara e merece ser tratada com todo amor e respeito do mundo!",
    10: "Sla eu te amo"
};

function buscarResposta() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    
    if (respostas[numero]) {
        resultado.textContent = respostas[numero];
    } else {
        resultado.textContent = "Resposta não encontrada.";
    }
}
