
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
  ,

  {
    titulo: "Desafio",
    descricao: "Copie e cole o código abaixo em um novo documento .tex para ver o resultado final.",
    categoria: "Estruitura",
    codigo: String.raw`
    \documentclass[10pt,a4paper]{article}

% Idioma e codificação
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[brazil]{babel}

% Página e tipografia
\usepackage[margin=1.35cm]{geometry}
\usepackage{lmodern}
\usepackage{microtype}

% Matemática, tabelas e gráficos
\usepackage{amsmath}
\usepackage{booktabs}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}

% Cores e legendas
\usepackage{xcolor}
\usepackage{caption}
\captionsetup{hypcap=false}

% Texto em colunas
\usepackage{multicol}
\setlength{\columnsep}{0.75cm}

% Links e referências
\usepackage{hyperref}
\hypersetup{
  colorlinks=true,
  linkcolor=blue!45!black,
  citecolor=blue!45!black,
  urlcolor=blue!45!black,
}

% Nomes em português
\renewcommand{\contentsname}{Sumário}
\renewcommand{\refname}{Referências}
\renewcommand{\figurename}{Figura}
\renewcommand{\tablename}{Tabela}
\renewcommand{\listtablename}{Lista de Tabelas}
\renewcommand{\listfigurename}{Lista de Figuras}

% Espaçamento
\setlength{\parindent}{1em}
\setlength{\parskip}{0pt}
\setlength{\abovecaptionskip}{3pt}
\setlength{\belowcaptionskip}{1pt}

\begin{document}

% ============================================================
% PÁGINA 1: CAPA
% ============================================================
\thispagestyle{empty}

\begin{center}
  \vspace*{1.0cm}
  {\large UNIVERSIDADE FEDERAL FLUMINENSE\par}
  \vspace{0.25cm}
  {\normalsize Oficina de \LaTeX\par}

  \vfill

  {\Huge\bfseries Estimativa observacional\par}
  \vspace{0.2cm}
  {\Huge\bfseries da temperatura solar\par}
  \vspace{0.7cm}
  {\large Aprendendo \LaTeX\ por meio da astronomia\par}

  \vfill

  \begin{tabular}{rl}
    \textbf{Estudante:} & Juan Carlos Arroyave \\
    \textbf{Professores:} & Andréa, Leandro, Juan e Jenerson \\
    \textbf{Atividade:} & Trabalho final da oficina
  \end{tabular}

  \vfill

  Niterói -- RJ\\
  2026
\end{center}

\vspace{0.6cm}
\hrule
\vspace{0.35cm}

% ============================================================
% PÁGINA 2: SUMÁRIO E LISTAS
% ============================================================
\newpage
\setcounter{page}{2}
{\small
\tableofcontents
\listoftables
\listoffigures
}

% ============================================================
% PÁGINA 3: TEXTO, EQUAÇÕES, TABELA, FIGURA E REFERÊNCIAS
% ============================================================
\newpage
\setcounter{page}{3}
%\begin{multicols}{2} %Queria fazer a dois colunas tipo artigo mas desisti

\section{Introdução}\label{sec:introducao}

Uma estrela emite energia em muitos comprimentos de onda. Quando seu espectro contínuo é aproximadamente térmico, a posição do máximo permite estimar sua \emph{temperatura efetiva}. Essa relação, conhecida como lei do deslocamento de Wien \cite{wien1897}, não é exclusiva do Sol: ela pode ser aplicada a outras estrelas que sejam razoavelmente aproximadas por corpos negros.

Neste trabalho, usamos medições realizadas fora da atmosfera terrestre pelo instrumento SIM da missão SORCE. Como a distância entre o Sol e o detector apenas multiplica todo o espectro pelo mesmo fator geométrico, ela altera a amplitude observada, mas não a posição do máximo.

\subsection{Dados observacionais}\label{subsec:dados}

O produto SORCE--SIM TAV fornece médias diárias da irradiância espectral solar, referidas à distância de $1\,\mathrm{UA}$ \cite{sorce}. Selecionamos o espectro de 14 de dezembro de 2008 e calculamos a média das medições em seis intervalos de $50\,\mathrm{nm}$. Esse agrupamento reduz as oscilações causadas por linhas de absorção e torna o máximo do contínuo mais visível. \\
\begin{minipage}{\columnwidth}
\begin{center}
\footnotesize
\begin{tabular}{ccc}
\toprule
Faixa (nm) & Centro (nm) & $\overline I_\lambda$ \\
\midrule
400--450 & 425 & 1,7615 \\
450--500 & 475 & 2,0385 \\
500--550 & 525 & 1,9060 \\
550--600 & 575 & 1,8373 \\
600--650 & 625 & 1,6692 \\
650--700 & 675 & 1,5009 \\
\bottomrule
\end{tabular}
\captionof{table}{Médias obtidas do espectro SORCE--SIM.}
\label{tab:dados}
\end{center}
\end{minipage}
\\ \\
Os valores da Tabela~\ref{tab:dados} são médias calculadas a partir dos dados observacionais e não valores gerados supondo previamente uma temperatura. A Figura~\ref{fig:espectro} mostra os mesmos dados e uma interpolação local perto do máximo, onde $\overline I_\lambda$ tem unidades de medição $\mathrm{W\,m^{-2}\,nm^{-1}}$.

\subsection{Estimativa da temperatura}\label{subsec:resultado}

Uma parábola ajustada aos três pontos próximos ao pico possui a forma
\begin{equation}
 \overline I_\lambda=a\lambda^2+b\lambda+c,
 \qquad
 \lambda_{\max}=-\frac{b}{2a}\approx484\,\mathrm{nm}.
 \label{eq:maximo}
\end{equation}
Pela lei do deslocamento de Wien,
\begin{equation}
 T=\frac{2{,}898\times10^{-3}}{\lambda_{\max}}
   \approx5{,}99\times10^3\,\mathrm{K}.
 \label{eq:wien}
\end{equation}

\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=0.98\columnwidth,
  height=4.15cm,
  xlabel={$\lambda$ (nm)},
  ylabel={$\overline I_\lambda$ ($\mathrm{W\,m^{-2}\,nm^{-1}}$)},
  xmin=400,xmax=700,
  ymin=1.4,ymax=2.12,
  grid=major,
  tick label style={font=\scriptsize},
  label style={font=\scriptsize},
]
\addplot[blue!65!black,very thick,mark=*] coordinates {
  (425,1.7615) (475,2.0385) (525,1.9060)
  (575,1.8373) (625,1.6692) (675,1.5009)
};
\addplot[red!70!black,dashed,thick,domain=425:525,samples=60]
  {-0.0000818865*x^2+0.0792374*x-17.1237};
\end{axis}
\end{tikzpicture}
\captionof{figure}{Médias observadas (azul) e interpolação próxima ao máximo (vermelho).} \label{fig:espectro}
\end{center}

\section{Conclusão}\label{sec:conclusao}

A estimativa da Equação~\eqref{eq:wien} é cerca de $3{,}8\%$ superior à temperatura efetiva solar de referência, $5772\,\mathrm{K}$ \cite{prsa2016}. A diferença é esperada: o Sol não é um corpo negro perfeito, e o agrupamento em faixas limita a localização do máximo. Ainda assim, o resultado mostra que um espectro realmente observado permite recuperar a ordem correta da temperatura sem pressupô-la no cálculo.

\begin{thebibliography}{9}
\footnotesize

\bibitem{wien1897}
W. Wien.
\newblock On the division of energy in the emission-spectrum of a black body.
\newblock \emph{Philosophical Magazine}, 43:214--220, 1897.

\bibitem{sorce}
J. Harder.
\newblock \emph{SORCE SIM Level 3 TSIS-Adjusted Values Solar Spectral Irradiance 24-Hour Means V002}.
\newblock Greenbelt, MD, USA, Goddard Earth Sciences Data and Information Services Center (GES DISC), 2021.

\bibitem{prsa2016}
A. Pr\v{s}a et al.
\newblock Nominal values for selected solar and planetary quantities:
IAU 2015 Resolution B3.
\newblock \emph{The Astronomical Journal}, 152(2):41, 2016.

\end{thebibliography}

%\end{multicols}

\end{document}

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
