
const exemplos = [
  {
    titulo: "Documento básico",
    descricao: "Estrutura inicial de um documento LaTeX.",
    categoria: "Estrutura",
    codigo: String.raw`\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[brazil]{babel}

\begin{document}

Olá, mundo!

\end{document}`
  },



  {
    titulo: "Título e seções",
    descricao: "Organize o documento em seções.",
    categoria: "Estrutura",
    codigo: String.raw`\title{Minha atividade}
\author{Nome do aluno}
\date{\today}

\begin{document}
\maketitle

\section{Introdução}
Texto da introdução.

\subsection{Exemplo}
Texto da subseção.
\end{document}`
  },





  {
    titulo: "Negrito e itálico",
    descricao: "Formate palavras e frases.",
    categoria: "Texto",
    codigo: String.raw`\textbf{Texto em negrito}

\textit{Texto em itálico}

\underline{Texto sublinhado}`
  },





  {
    titulo: "Frações e raízes",
    descricao: "Escreva expressões matemáticas.",
    categoria: "Matemática",
    codigo: String.raw`\[
\frac{a}{b}
\]

\[
\sqrt{25} = 5
\]

\[
x^2 + 5x + 6 = 0
\]`
  },




  {
    titulo: "Lista numerada",
    descricao: "Crie uma lista com números.",
    categoria: "Listas",
    codigo: String.raw`\begin{enumerate}
  \item Primeiro item
  \item Segundo item
  \item Terceiro item
\end{enumerate}`
  },




  {
    titulo: "Lista com marcadores",
    descricao: "Crie uma lista de tópicos.",
    categoria: "Listas",
    codigo: String.raw`\begin{itemize}
  \item Primeiro tópico
  \item Segundo tópico
  \item Terceiro tópico
\end{itemize}`
  },




  {
    titulo: "Tabela de duas colunas",
    descricao: "Tabela com nome e fórmula.",
    categoria: "Tabelas",
    codigo: String.raw`\begin{center}
\begin{tabular}{|c|c|}
\hline
Nome & Fórmula \\ \hline
        &         \\ \hline
        &         \\ \hline
        &         \\ \hline
        &         \\ \hline
        &         \\ \hline
\end{tabular}
\end{center}`
  },



  {
    titulo: "Inserir uma imagem",
    descricao: "Adicione uma imagem ao documento.",
    categoria: "Imagens",
    codigo: String.raw`\usepackage{graphicx}

% No corpo do documento:
\begin{figure}[h]
  \centering
  \includegraphics[width=0.6\textwidth]{imagem.png}
  \caption{Legenda da imagem}
\end{figure}`
  },



  {
    titulo: "Configurar margens",
    descricao: "Defina as margens da página.",
    categoria: "Estrutura",
    codigo: String.raw`\usepackage[a4paper, margin=2cm]{geometry}`
  }
];







const lista = document.getElementById("lista-codigos");
const pesquisa = document.getElementById("pesquisa");
const contador = document.getElementById("contador");
const filtros = document.getElementById("filtros");
const mensagem = document.getElementById("mensagem");

let categoriaAtual = "Todos";
let temporizador;

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[caractere]);
}

function mostrarExemplos() {
  const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");

  const encontrados = exemplos.filter(exemplo => {
    const correspondeCategoria =
      categoriaAtual === "Todos" ||
      exemplo.categoria === categoriaAtual;

    const conteudo = [
      exemplo.titulo,
      exemplo.descricao,
      exemplo.categoria,
      exemplo.codigo
    ].join(" ").toLocaleLowerCase("pt-BR");

    return correspondeCategoria && conteudo.includes(termo);
  });

  contador.textContent =
    `${encontrados.length} exemplo(s) encontrado(s)`;

  if (encontrados.length === 0) {
    lista.innerHTML = `
      <div class="vazio">
        Nenhum código encontrado. Tente outra pesquisa.
      </div>`;
    return;
  }

  lista.innerHTML = encontrados.map(exemplo => {
    const indice = exemplos.indexOf(exemplo);

    return `
      <article class="cartao">
        <div class="cartao-cabecalho">
          <div class="titulo-linha">
            <h3>${escaparHTML(exemplo.titulo)}</h3>
            <span class="categoria">
              ${escaparHTML(exemplo.categoria)}
            </span>
          </div>
          <p class="descricao">
            ${escaparHTML(exemplo.descricao)}
          </p>
        </div>

        <div class="rotulo-codigo">Código LaTeX</div>

        <pre><code>${escaparHTML(exemplo.codigo)}</code></pre>

        <div class="botoes">
          <small>Pronto para copiar</small>
          <button class="copiar" data-indice="${indice}">
            ▢ Copiar código
          </button>
        </div>
      </article>`;
  }).join("");
}

function avisar(texto) {
  mensagem.textContent = texto;
  mensagem.classList.add("visivel");

  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    mensagem.classList.remove("visivel");
  }, 2200);
}

async function copiarCodigo(texto, botao) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
    } else {
      const campo = document.createElement("textarea");
      campo.value = texto;
      campo.setAttribute("readonly", "");
      campo.style.position = "fixed";
      campo.style.opacity = "0";

      document.body.appendChild(campo);
      campo.select();

      const sucesso = document.execCommand("copy");
      campo.remove();

      if (!sucesso) {
        throw new Error("Não foi possível copiar");
      }
    }

    const original = botao.textContent;
    botao.textContent = "✓ Copiado!";
    botao.classList.add("copiado");

    avisar("Código copiado! Agora é só colar no editor.");

    setTimeout(() => {
      botao.textContent = original;
      botao.classList.remove("copiado");
    }, 1800);

  } catch (erro) {
    avisar("Falha ao copiar. Tente selecionar o código manualmente.");
  }
}

// Botão para copiar cada exemplo.
lista.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-indice]");

  if (!botao) return;

  const indice = Number(botao.dataset.indice);
  const exemplo = exemplos[indice];

  if (exemplo) {
    copiarCodigo(exemplo.codigo, botao);
  }
});

// Pesquisa em tempo real.
pesquisa.addEventListener("input", mostrarExemplos);

// Filtros de categoria.
filtros.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-categoria]");

  if (!botao) return;

  categoriaAtual = botao.dataset.categoria;

  filtros.querySelectorAll(".filtro").forEach(filtro => {
    const selecionado = filtro === botao;

    filtro.classList.toggle("ativo", selecionado);
    filtro.setAttribute("aria-pressed", String(selecionado));
  });

  mostrarExemplos();
});

// Exibe os códigos ao abrir a página.
mostrarExemplos();
