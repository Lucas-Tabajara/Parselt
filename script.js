/** * CONFIGURAÇÃO DAS REGRAS DE NEGÓCIO
 * Altera os valores abaixo para ajustar o cálculo das diárias.
 */
const REGRAS_DIARIAS = {
    VALOR_DIARIA: 20.00,
    LIMITES: {
        FAIXA_1: 6,  // Até 6h = 1 diária
        FAIXA_2: 12  // Até 12h = 2 diárias, Acima disso = 3 diárias
    },
    QUANTIDADES: {
        ATE_FAIXA_1: 1,
        ATE_FAIXA_2: 2,
        ACIMA_FAIXA_2: 3
    }
};

// --- ELEMENTOS DA INTERFACE ---
const dropZone = document.getElementById("drop-zone");
const inputElement = document.getElementById("file-input");
const statusElement = document.getElementById("status");
const resultArea = document.getElementById("result-area");
const outputText = document.getElementById("output-text");
const copyBtn = document.getElementById("copy-btn");
const clearBtn = document.getElementById("clear-btn");

// --- EVENTOS DE INTERFACE ---

dropZone.addEventListener("click", () => inputElement.click());

dropZone.addEventListener("dragover", (e) => { 
    e.preventDefault(); 
    dropZone.style.borderColor = "#004d3d"; 
    dropZone.style.backgroundColor = "#e8f0fe";
});

dropZone.addEventListener("dragleave", () => { 
    dropZone.style.borderColor = "#009578"; 
    dropZone.style.backgroundColor = "transparent";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#009578";
    dropZone.style.backgroundColor = "transparent";
    if (e.dataTransfer.files.length) processFile(e.dataTransfer.files[0]);
});

inputElement.addEventListener("change", () => { 
    if (inputElement.files.length) processFile(inputElement.files[0]); 
});

copyBtn.addEventListener("click", () => {
    outputText.select();
    navigator.clipboard.writeText(outputText.value).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "✓ COPIADO!";
        copyBtn.style.backgroundColor = "#2196F3";
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#009578";
        }, 2000);
    });
});

clearBtn.addEventListener("click", () => {
    outputText.value = "";
    resultArea.style.display = "none";
    statusElement.textContent = "Área limpa. Aguardando novo arquivo...";
    statusElement.style.color = "#888";
    inputElement.value = ""; 
});

// --- FUNÇÕES DE APOIO ---

function extrairMinutos(timeStr) {
    const parts = String(timeStr).replace(/[^0-9:]/g, '').split(':');
    return (parseInt(parts[0]) || 0) * 60 + (parseInt(parts[1]) || 0);
}

function formatarHoras(mins) {
    return `${Math.floor(mins / 60).toString().padStart(2, '0')}:${(mins % 60).toString().padStart(2, '0')}`;
}

// --- MOTOR DE PROCESSAMENTO ---

function processFile(file) {
    statusElement.textContent = "Processando dados...";
    statusElement.style.color = "#009578";
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array', raw: false });
            const rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1, defval: "" });

            let colIni = -1, colTer = -1, idxCab = -1;

            // Identificação dinâmica de colunas
            for (let i = 0; i < rows.length; i++) {
                for (let j = 0; j < rows[i].length; j++) {
                    const cell = String(rows[i][j]).toLowerCase();
                    if (cell.includes('inicio') || cell.includes('entrada') || cell.includes('início')) colIni = j;
                    if (cell.includes('termino') || cell.includes('saida') || cell.includes('término')) colTer = j;
                }
                if (colIni !== -1 && colTer !== -1) { 
                    idxCab = i; 
                    break; 
                }
            }

            if (idxCab === -1) {
                statusElement.textContent = "Erro: Colunas de horários não encontradas.";
                statusElement.style.color = "red";
                return;
            }

            const registros = new Map();
            for (let i = idxCab + 1; i < rows.length; i++) {
                const pI = String(rows[i][colIni]).trim().split(' ');
                const pT = String(rows[i][colTer]).trim().split(' ');
                
                if (pI.length >= 2 && pT.length >= 2) {
                    const dataVal = pI[0];
                    const horaIni = pI[1];
                    const horaTer = pT[1];
                    const chave = `${dataVal}-${horaIni}-${horaTer}`;
                    
                    const dataPartes = dataVal.split('/');
                    const ts = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]).getTime();
                    
                    if (!registros.has(chave)) {
                        registros.set(chave, { data: dataVal, ini: horaIni, ter: horaTer, ts: ts });
                    }
                }
            }

            const lista = Array.from(registros.values()).sort((a, b) => a.ts - b.ts);
            
            let tD = 0, tV = 0;
            let finalTxt = "Data;Hora Início;Hora Término;Horas Trabalhadas;Número de Diárias;Valor Devido\n";

            lista.forEach(r => {
                let mI = extrairMinutos(r.ini), mT = extrairMinutos(r.ter);
                if (mT < mI) mT += 1440; 
                
                let dif = mT - mI;
                let hD = dif / 60;
                
                let d = 0;
                if (hD > REGRAS_DIARIAS.LIMITES.FAIXA_2) d = REGRAS_DIARIAS.QUANTIDADES.ACIMA_FAIXA_2;
                else if (hD > REGRAS_DIARIAS.LIMITES.FAIXA_1) d = REGRAS_DIARIAS.QUANTIDADES.ATE_FAIXA_2;
                else if (hD > 0) d = REGRAS_DIARIAS.QUANTIDADES.ATE_FAIXA_1;

                let v = d * REGRAS_DIARIAS.VALOR_DIARIA;
                tD += d; tV += v;
                
                finalTxt += `${r.data};${r.ini};${r.ter};${formatarHoras(dif)};${d};${v}\n`;
            });

            finalTxt += `TOTAL;;;;${tD};${tV}`;
            
            outputText.value = finalTxt;
            resultArea.style.display = "block";
            statusElement.textContent = "✓ Processado com sucesso!";
        } catch (err) { 
            statusElement.textContent = "Erro ao processar arquivo."; 
            statusElement.style.color = "red";
        }
    };
    reader.readAsArrayBuffer(file);
}