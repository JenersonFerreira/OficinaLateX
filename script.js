
const exemplos = [
  // PRIMEIRO
  {
    titulo: "Documento básico",
    descricao: "Estrutura inicial de um documento LaTeX.",
    categoria: "Estrutura",
    codigo: String.raw`

\documentclass[10pt,a4paper]{article} % Estilo e opções do documento

\title{Oficina LaTeX} 
\author{Andréa, Leandro, Juan e Jenerson}
\date{October 2026}

\begin{document} %  Começo da parte visual do documento

\maketitle % Chamando o titulo e todos seus complementos

\section{Introduction} % Iniciando uma seção no documento 

\end{document} % Fim da parte visual do documento
`
  },



  {
    titulo: "Atividade I",
    descricao: "Código para atividade I.",
    categoria: "Estrutura",
      codigo: String.raw`
    \documentclass[10pt,a4paper]{article} % Estilo e opções do documento

    \usepackage{graphicx} % Required for inserting images
    \usepackage[brazil]{babel} % Linguagem
    \usepackage{graphicx} 
    \usepackage{amsmath, amssymb} % Fórmulas matemáticas
    \usepackage{geometry} % Margens do documento
    \usepackage[utf8]{inputenc} % Acentuação do Português


    \title{Oficina LaTeX} 
    \author{Andréa, Leandro, Juan e Jenerson}
    \date{October 2026}

    \begin{document} %  Começo da parte visual do documento

    \maketitle % Chamando o titulo e todos seus complementos

    \section{Primeira seção} % Iniciando uma seção no documento 

    \end{document} % Fim da parte visual do documento
    `
  },

   {
    titulo: "Modo Inline",
    descricao: "Copie o código abaixo e cole no corpo do documento.",
    categoria: "Matemática",
      codigo: String.raw`
    A energia vem dada por \(E = mc^2\) \\ % ou ; \\ quebrar linha
    A energia vem dada por $E = mc^2$
    `
  },

  {
    titulo: "Modo Display",
    descricao: "Copie o código abaixo e cole no corpo do documento.",
    categoria: "Matemática",
      codigo: String.raw`
      A energia vem dada por \[E = mc^2\] \\ % ou 
      A energia vem dada por $$E = mc^2$$
    `
  },

  {
    titulo: "Frações, expoentes e somatórios",
    descricao: "Copie o código abaixo e cole no corpo do documento.",
    categoria: "Matemática",
      codigo: String.raw`
      Fração: $\frac{\pi}{2}$ \\ 
      Expoente: $e^{-i\pi}$ \\
      Soma: $\[\sum_{x=1}^{\infty} \frac{1}{n}\]$

    `
  },


  {
    titulo: "Negrito e itálico",
    descricao: "Formate palavras e frases. Copie o código abaixo e cole no corpo do documento",
    categoria: "Texto",
    codigo: String.raw`
    \textbf{Texto em negrito}

    \textit{Texto em itálico}

    \underline{Texto sublinhado}`
  },

  {
    titulo: "Seções e Subseções",
    descricao: "Organize seu documento em seções e subseções. Copie e cole no corpo do documento.",
    categoria: "Listas",
    codigo: String.raw`
    \section{Títulos}
        \subsection{SubTítulos}
          \begin{enumerate}
            \item Primeiro
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
\end{itemize}

`
  },

  {
    titulo: "Tabela 3x3",
    descricao: "Tabela com 3 linhas e 3 colunas. Copie e cole no corpo do documento.",
    categoria: "Tabelas",
    codigo: String.raw`
    \begin{tabular}{|c|c|c|}
    \hline
    Nome & Nota & Turma \\
    \hline
    Leandro & 9 & A \\
    \hline
    Andréa & 10 & B \\
    \hline
    \end{tabular}
    `
  },



  {
    titulo: "Inserir uma figura",
    descricao: "Adicione uma figura ao documento. Cuidado ao copiar e colar, pois é necessário ter a imagem no mesmo diretório do arquivo .tex.",
    categoria: "Imagens",
    codigo: String.raw
    `% PREAMBULO %
    \usepackage{float} % Usado para akustar as imagens na posição que deseja

    % CORPO DO DOCUMENTO
    \begin{figure}[H] % H usado para ajustar a imagem exatamente onde você coloc'ou no texto 
        \centering % Centralizando imagem
        \includegraphics[scale=0.3]{foto.png} % colocando imagem e uma escala
        \caption{Logo oficial.}
        \label{fig:placeholder}
    \end{figure}`
  },



  {
    titulo: "Configurar margens",
    descricao: "Defina as margens da página.",
    categoria: "Estrutura",
    codigo: String.raw`
    \usepackage{geometry}
    % Configuração das margens do documento
    \geometry{
    top=3cm,
    bottom=2cm,
    left=3cm,
    right=2cm
    
   
  `
  },

  {
    titulo: "Referências bibliográficas",
    descricao: "Crie um documento .bib para gerenciar suas referências. Copie e cole no corpo do documento.bib. Depois adicione os comando \cite{chave} no corpo do documento e \bibliography{arquivo.bib} no final do documento.",
    categoria: "Estrutura",
    codigo: String.raw`
    @article{euler1953leonhard,
    title={Leonhard Euler and the K{\"o}nigsberg bridges},
    author={Euler, Leonhard},
    journal={Scientific American},
    volume={189},
    number={1},
    pages={66--72},
    year={1953},
    publisher={JSTOR}
    
    % Recorte (ctrl+x) e cole no corpo do documento .tex a apartir daqui
    Leonhard Euler, provado em \cite{euler1953leonhard}, resolveu o famoso problema das Sete Pontes de Königsberg em 1736, demonstrando que é impossível atravessar todas as sete pontes da cidade (atual Kaliningrado, Rússia) apenas uma vez e retornar ao ponto de partida.

    \bibliographystyle{plain} % estilo usado para mostar 
    \bibliography{referencia} % buscando o arquivo .bib
     
    `
  },

  {
    titulo: "Caixas coloridas",
    descricao: "Crie caixas com cores diferentes para destacar informações importantes.",
    categoria: "Estrutura",
    codigo: String.raw`
    \usepackage{tcolorbox} % PREAMBULO

    \newtcolorbox{caixa}{
    colback=blue!10,
    colframe=blue!70!black,
    arc=2mm,
    boxrule=0.8pt,
    width=8cm,
    title=Caixa azul
}
% CORPO DO DOCUMENTO


\begin{caixa}
    Esta é uma pequena caixa colorida!
\end{caixa} `
  },

  {
    titulo: "Sumarios e Índices",
    descricao: "Crie sumários e índices para organizar seu documento.",
    categoria: "Listas",
    codigo: String.raw`\documentclass[10pt,a4paper]{article} % Estilo e opções do documento

    \usepackage{graphicx} % Required for inserting images
    \usepackage[brazil]{babel} % Linguagem
    \usepackage{graphicx} 
    \usepackage{amsmath, amssymb} % Fórmulas matemáticas
    \usepackage{geometry} % Margens do documento
    \usepackage[utf8]{inputenc} % Acentuação do Português

    \title{Oficina LaTeX} 
    \author{Andréa, Leandro, Juan e Jenerson}
    \date{October 2026}

    \begin{document} %  Começo da parte visual do documento

    \maketitle % Chamando o titulo e todos seus complementos

    \tableofcontents % Criando sumário do documento
    \newpage % Criando uma página nova para a digitação do documento

    \section{Primeira seção} % Iniciando uma seção no documento 
        \subsection{Primeira}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}
        \subsection{Segunda}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}
        \subsection{Terceira}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}
    \section{Segunda seção} % Iniciando uma seção no documento 
        \subsection{Primeira}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}
        \subsection{Segunda}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}
        \subsection{Terceira}
            \subsubsection{A}
            \subsubsection{B}
            \subsubsection{C}

    \end{document} % Fim da parte visual do documento
 `
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
