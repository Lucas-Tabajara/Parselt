
# Parselt 📑

[English Version](#english) | [Versão em Português](#português)

----------------------------------------

<a name="português">

# 📑 Parselt — Automatizador de Diárias para Peritos Contábeis
**Status do Projeto: Ativo 🚀 | Foco: Full Stack JavaScript & DevOps**

O Parselt é uma ferramenta client-side de alta performance, desenvolvida para otimizar o fluxo de trabalho de peritos e auditores. Ele automatiza a extração de registros de horários em planilhas e aplica regras de negócio dinâmicas para o cálculo instantâneo de diárias devidas.

## 💡 O Problema e a Solução
Profissionais de contabilidade frequentemente gastam horas calculando manualmente diárias a partir de dados brutos, um processo sujeito a erros humanos e fadiga mental. 

**A Solução:** O Parselt processa arquivos `.xlsx`, `.xls` ou `.csv` diretamente no navegador e permite que o usuário **configure as regras de cálculo em tempo real** (valor da diária e faixas de horas) para se adaptar a diferentes tribunais ou contratos.

**Diferencial de Segurança:** Como o processamento é 100% local (no navegador do usuário), dados financeiros sensíveis nunca saem da máquina, garantindo total privacidade e conformidade com normas de proteção de dados.

## 🛠️ Stack Técnica e Jornada
Este projeto é um pilar fundamental da minha trajetória como estudante de **Ciência da Computação (3º ano)** e minha especialização em **Desenvolvimento Full Stack**.

* **JavaScript Vanilla (ES6+):** Motor principal para parsing de dados, normalização de datas e manipulação dinâmica do DOM.
* **SheetJS (XLSX):** Manipulação robusta de arquivos binários para compatibilidade total com Excel.
* **CSS3:** Interface responsiva com foco em UX (estados de Drag & Drop e painel de configuração intuitivo).
* **Ambiente de Dev:** Desenvolvido e testado em Linux Mint XFCE.

## ⚙️ Regras de Negócio (100% Customizáveis)
Diferente de versões estáticas, o motor de cálculo do Parselt é flexível. O usuário pode ajustar diretamente na interface:
* **Valor da Diária:** Defina o valor monetário por unidade (Ex: R$ 20,00).
* **Faixas de Horas:** Ajuste os limites de tempo (Ex: até 6h, até 12h).
* **Quantidade de Diárias:** Determine quantas diárias são devidas em cada faixa.

## 🚀 Como Executar
Desenvolvido com mentalidade DevOps: simples, portátil e eficiente.
1.  Clone o repositório: `git clone https://github.com/lucastabajara/parselt.git`
2.  Abra o arquivo `Index.html` em qualquer navegador moderno.
3.  **Configure os valores** no painel superior.
4.  Arraste sua planilha para a zona de upload e copie o resultado formatado diretamente para o Google Planilhas ou Excel.

## 📈 Roadmap (Melhorias Futuras)
* [x] Interface de configuração dinâmica para regras de negócio.
* [ ] Implementação de persistência via **LocalStorage** para salvar configurações do usuário.
* [ ] Implementação de testes unitários com Jest para garantir a integridade dos cálculos.
* [ ] Configuração de GitHub Actions para automação de CI/CD.
* [ ] Suporte a internacionalização (i18n) para diferentes formatos de moeda e data.
</a>
    ------------------------------------

<a name="english">

  # 📑 Parselt — Daily Allowance Automator for Accounting Experts
**Project Status: Active 🚀 | Focus: Full Stack JavaScript & DevOps**

Parselt is a high-performance client-side tool developed to optimize the workflow of accounting experts and auditors. It automates time-log extraction from spreadsheets and applies dynamic business rules for instant allowance calculations.

## 💡 Problem & Solution
Accounting professionals often spend hours manually calculating daily allowances from raw data—a process prone to human error and mental fatigue.

**The Solution:** Parselt processes `.xlsx`, `.xls`, or `.csv` files directly in the browser and allows users to **configure calculation rules in real-time** (allowance values and hour thresholds) to adapt to different court orders or contracts.

**Security First:** Since processing is 100% local (client-side), sensitive financial data never leaves the user's machine, ensuring full privacy and data protection compliance.

## 🛠️ Tech Stack & Journey
This project is a key milestone in my journey as a **Computer Science student (3rd year)** specializing in **Full Stack Development**.

* **Vanilla JavaScript (ES6+):** Core engine for data parsing, date normalization, and dynamic DOM manipulation.
* **SheetJS (XLSX):** Robust binary file handling for full Excel compatibility.
* **CSS3:** Responsive UI focused on UX (Drag & Drop states and intuitive configuration panel).
* **Dev Environment:** Developed and tested on Linux Mint XFCE.

## ⚙️ Business Rules (100% Customizable)
Unlike static scripts, Parselt's calculation engine is flexible. Users can adjust the following parameters directly through the UI:
* **Allowance Value:** Fully customize the monetary value per unit (e.g., R$ 20.00).
* **Hour Thresholds:** Manually define time limits (e.g., up to 6h, up to 12h).
* **Allowance Quantity:** Set exactly how many units are due for each time bracket.

## 🚀 Getting Started
Developed with a DevOps mindset: simple, portable, and efficient.
1. Clone the repository: `git clone https://github.com/lucastabajara/parselt.git`
2. Open `Index.html` in any modern browser.
3. **Configure your values** in the top panel.
4. Drag your spreadsheet into the drop zone and copy the formatted result directly to Google Sheets or Excel.

## 📈 Roadmap (Future Improvements)
* [x] Dynamic UI configuration for business rules.
* [ ] Implement **LocalStorage** persistence to save user settings.
* [ ] Unit testing with **Jest** to ensure calculation integrity.
* [ ] GitHub Actions setup for CI/CD automation.
* [ ] Multi-language support (i18n) for different currency and date formats.
</a>
