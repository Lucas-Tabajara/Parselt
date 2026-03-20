
# Parselt 📑

[English Version](#english) | [Versão em Português](#português)

----------------------------------------

<a name="português">

📑 Parselt — Automatizador de Diárias para Peritos Contábeis

    Status do Projeto: Ativo 🚀 | Foco: Full Stack JavaScript & DevOps

O Parselt é uma ferramenta client-side de alta performance, desenvolvida para otimizar o fluxo de trabalho de peritos e auditores. Ele automatiza a extração de registros de horários em planilhas e aplica regras de negócio complexas para o cálculo instantâneo de diárias devidas.
💡 O Problema e a Solução

Profissionais de contabilidade frequentemente gastam horas calculando manualmente diárias a partir de dados brutos, um processo sujeito a erros humanos e fadiga mental. O Parselt resolve isso processando arquivos .xlsx, .xls ou .csv diretamente no navegador.

Diferencial de Segurança: Como o processamento é 100% local (no navegador do usuário), dados financeiros sensíveis nunca saem da máquina, garantindo total privacidade e conformidade com normas de proteção de dados.
🛠️ Stack Técnica e Jornada

Este projeto é um pilar fundamental da minha trajetória como estudante de Ciência da Computação (3º ano) e minha especialização em Desenvolvimento Full Stack.

    JavaScript Vanila (ES6+): Motor principal para parsing de dados e normalização de datas.

    SheetJS (XLSX): Manipulação robusta de arquivos binários para compatibilidade total com Excel.

    CSS3: Interface responsiva com foco em UX (estados de Drag & Drop e feedback visual).

    Ambiente de Dev: Desenvolvido e testado em Linux Mint XFCE.

⚙️ Regras de Negócio (Configuráveis)

O motor de cálculo segue critérios objetivos que podem ser ajustados conforme a necessidade:

    Até 6 horas: 1 Diária.

    De 6 a 12 horas: 2 Diárias.

    Acima de 12 horas: 3 Diárias.

    Valor Padrão: R$ 20,00 por unidade.

🚀 Como Executar

Desenvolvido com mentalidade DevOps: simples, portátil e eficiente.

    Clone o repositório: git clone https://github.com/lucastabajara/parselt.git

    Abra o arquivo CriadorDeCsv.html em qualquer navegador moderno.

    Arraste sua planilha para a zona de upload e copie o resultado formatado diretamente para o Google Planilhas ou Excel.

📈 Roadmap (Melhorias Futuras)

    [ ] Implementação de testes unitários com Jest para garantir a integridade dos cálculos.

    [ ] Configuração de GitHub Actions para automação de CI/CD.

    [ ] Suporte a internacionalização (i18n) para diferentes formatos de moeda e data.

</a>
    ------------------------------------

<a name="english">

    📑 Parselt — Professional Allowance Automation for Auditors

    Project Status: Active 🚀 | Focus: Full Stack JavaScript & DevOps

Parselt is a high-performance client-side tool designed to streamline the workflow of accounting experts and auditors. It automates the extraction of time logs from spreadsheets and instantly applies complex business rules to calculate daily allowances.

💡 The Problem & The Solution

Accounting professionals often spend hours manually calculating daily rates from raw data, which is prone to human error and fatigue. Parselt solves this by processing .xlsx, .xls, or .csv files directly in the browser.

Key Advantage: Since the processing is entirely local (client-side), sensitive financial data never leaves the user's machine—ensuring total privacy and security.

🛠️ Tech Stack & Learning Journey

This project is a core part of my journey as a Computer Science student (3rd Year) and my specialization in Full Stack Development.

    Vanilla JavaScript (ES6+): Core engine for data parsing and date normalization.

    SheetJS (XLSX): Robust binary file manipulation for Excel compatibility.

    CSS3: Responsive UI with a focus on UX (Drag & Drop states and visual feedback).

    Linux Mint XFCE: My primary development environment for building and testing.

⚙️ Business Rules (Configurable)

The calculation engine follows objective criteria that can be easily adjusted in the code:

    Up to 6 hours: 1 Daily Allowance.

    6 to 12 hours: 2 Daily Allowances.

    Over 12 hours: 3 Daily Allowances.

    Standard Value: R$ 20.00 per unit.

🚀 How to Run

Designed with a DevOps mindset—simple, portable, and efficient:

    Clone the repository: git clone https://github.com/lucastabajara/parselt.git

    Open CriadorDeCsv.html in any modern web browser.

    Drag your spreadsheet into the drop zone and copy the formatted result directly to Google Sheets or Excel.

📈 Future Roadmap

    [ ] Implement unit testing with Jest to ensure calculation integrity.

    [ ] Add GitHub Actions for automated CI/CD deployment.

    [ ] Internationalization (i18n) support for global currency formats.
</a>