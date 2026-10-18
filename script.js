// GeoLab: Lógica Interativa para Ensino Médio
// Autoria: Vittoria Coutinho e Gabriel (LCC UFPB)

const ESCALA = 12; // Escala visual em pixels por cm
const missoesConcluidas = new Set();

// --- NAVEGAÇÃO DE MISSÕES ---
function mudarMissao(nivel) {
    document.querySelectorAll('.missao-conteudo').forEach(el => {
        el.classList.remove('ativa');
        el.classList.add('oculta');
    });
    
    document.querySelectorAll('.btn-missao').forEach(btn => btn.classList.remove('ativo'));
    
    document.getElementById(`missao-${nivel}`).classList.remove('oculta');
    document.getElementById(`missao-${nivel}`).classList.add('ativa');
    document.querySelectorAll('.btn-missao')[nivel - 1].classList.add('ativo');
}

function atualizarProgresso() {
    const total = 6;
    const concluidas = missoesConcluidas.size;
    const porcentagem = (concluidas / total) * 100;
    
    document.getElementById('barra-progresso').style.width = `${porcentagem}%`;
    document.getElementById('texto-progresso').innerText = `${concluidas} / ${total} Concluídas`;
}

// --- NÍVEL 1: ÁREA DO RETÂNGULO ---
function atualizarM1() {
    const b = parseInt(document.getElementById('m1-input-base').value);
    const h = parseInt(document.getElementById('m1-input-altura').value);
    
    document.getElementById('m1-valor-base').innerText = b;
    document.getElementById('m1-valor-altura').innerText = h;
    document.getElementById('m1-f-b').innerText = b;
    document.getElementById('m1-f-h').innerText = h;
    
    const forma = document.getElementById('m1-forma');
    forma.style.width = (b * ESCALA) + "px";
    forma.style.height = (h * ESCALA) + "px";
    document.getElementById('m1-mensagem').innerText = "";
}

function validarM1() {
    const b = parseInt(document.getElementById('m1-input-base').value);
    const h = parseInt(document.getElementById('m1-input-altura').value);
    const resp = parseFloat(document.getElementById('m1-resposta').value);
    const msg = document.getElementById('m1-mensagem');
    const gabarito = b * h;
    
    if (isNaN(resp)) {
        msg.innerText = "Por favor, digite sua resposta calculada.";
        msg.className = "mensagem erro";
        return;
    }
    
    if (Math.abs(resp - gabarito) < 0.1) {
        msg.innerText = "Correto! Excelente aplicação da fórmula. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(1);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. Verifique a multiplicação entre a base e a altura.";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m1-input-base').addEventListener('input', atualizarM1);
document.getElementById('m1-input-altura').addEventListener('input', atualizarM1);


// --- NÍVEL 2: PERÍMETRO DO RETÂNGULO ---
function atualizarM2() {
    const a = parseInt(document.getElementById('m2-input-a').value);
    const b = parseInt(document.getElementById('m2-input-b').value);
    
    document.getElementById('m2-valor-a').innerText = a;
    document.getElementById('m2-valor-b').innerText = b;
    document.getElementById('m2-f-a').innerText = a;
    document.getElementById('m2-f-b').innerText = b;
    
    const forma = document.getElementById('m2-forma');
    forma.style.width = (a * ESCALA) + "px";
    forma.style.height = (b * ESCALA) + "px";
    document.getElementById('m2-mensagem').innerText = "";
}

function validarM2() {
    const a = parseInt(document.getElementById('m2-input-a').value);
    const b = parseInt(document.getElementById('m2-input-b').value);
    const resp = parseFloat(document.getElementById('m2-resposta').value);
    const msg = document.getElementById('m2-mensagem');
    const gabarito = (2 * a) + (2 * b);
    
    if (isNaN(resp)) {
        msg.innerText = "Digite o valor calculado do perímetro.";
        msg.className = "mensagem erro";
        return;
    }
    
    if (Math.abs(resp - gabarito) < 0.1) {
        msg.innerText = "Perfeito! O perímetro foi calculado corretamente. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(2);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. Lembre-se de somar os 4 lados do retângulo (2a + 2b).";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m2-input-a').addEventListener('input', atualizarM2);
document.getElementById('m2-input-b').addEventListener('input', atualizarM2);


// --- NÍVEL 3: ÁREA DO TRIÂNGULO ---
function atualizarM3() {
    const b = parseInt(document.getElementById('m3-input-base').value);
    const h = parseInt(document.getElementById('m3-input-altura').value);
    
    document.getElementById('m3-valor-base').innerText = b;
    document.getElementById('m3-valor-altura').innerText = h;
    document.getElementById('m3-f-b').innerText = b;
    document.getElementById('m3-f-h').innerText = h;
    
    const forma = document.getElementById('m3-forma');
    forma.style.width = (b * ESCALA) + "px";
    forma.style.height = (h * ESCALA) + "px";
    document.getElementById('m3-mensagem').innerText = "";
}

function validarM3() {
    const b = parseInt(document.getElementById('m3-input-base').value);
    const h = parseInt(document.getElementById('m3-input-altura').value);
    const resp = parseFloat(document.getElementById('m3-resposta').value);
    const msg = document.getElementById('m3-mensagem');
    const gabarito = (b * h) / 2;
    
    if (isNaN(resp)) {
        msg.innerText = "Digite o valor calculado da área.";
        msg.className = "mensagem erro";
        return;
    }
    
    if (Math.abs(resp - gabarito) < 0.1) {
        msg.innerText = "Correto! Triângulo dominado. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(3);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. Esqueceu de dividir o produto da base pela altura por 2?";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m3-input-base').addEventListener('input', atualizarM3);
document.getElementById('m3-input-altura').addEventListener('input', atualizarM3);


// --- NÍVEL 4: ÁREA DO CÍRCULO ---
function atualizarM4() {
    const r = parseInt(document.getElementById('m4-input-raio').value);
    
    document.getElementById('m4-valor-raio').innerText = r;
    document.getElementById('m4-f-r').innerText = r;
    
    const forma = document.getElementById('m4-forma');
    const diametroPx = (r * 2 * ESCALA * 0.7);
    forma.style.width = diametroPx + "px";
    forma.style.height = diametroPx + "px";
    document.getElementById('m4-mensagem').innerText = "";
}

function validarM4() {
    const r = parseInt(document.getElementById('m4-input-raio').value);
    const resp = parseFloat(document.getElementById('m4-resposta').value);
    const msg = document.getElementById('m4-mensagem');
    const gabarito = 3.14 * Math.pow(r, 2);
    
    if (isNaN(resp)) {
        msg.innerText = "Digite a área calculada para o círculo.";
        msg.className = "mensagem erro";
        return;
    }
    
    // Aceita pequena variação decimal devido ao arredondamento de PI
    if (Math.abs(resp - gabarito) < 0.8) {
        msg.innerText = "Exato! Excelente cálculo da região circular. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(4);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. Lembre-se: primeiro eleve o raio ao quadrado (r²), depois multiplique por 3,14.";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m4-input-raio').addEventListener('input', atualizarM4);


// --- NÍVEL 5: ÁREA DO TRAPÉZIO ---
function atualizarM5() {
    let B = parseInt(document.getElementById('m5-input-bmaior').value);
    let b = parseInt(document.getElementById('m5-input-bmenor').value);
    const h = parseInt(document.getElementById('m5-input-h').value);
    
    if (b >= B) {
        b = B - 1;
        document.getElementById('m5-input-bmenor').value = b;
    }
    
    document.getElementById('m5-valor-bmaior').innerText = B;
    document.getElementById('m5-valor-bmenor').innerText = b;
    document.getElementById('m5-valor-h').innerText = h;
    
    document.getElementById('m5-f-B').innerText = B;
    document.getElementById('m5-f-b').innerText = b;
    document.getElementById('m5-f-h').innerText = h;
    
    const forma = document.getElementById('m5-forma');
    forma.style.width = (B * ESCALA) + "px";
    forma.style.height = (h * ESCALA) + "px";
    
    const dif = (B - b) / 2;
    const p1 = (dif / B) * 100;
    const p2 = 100 - p1;
    forma.style.clipPath = `polygon(${p1}% 0%, ${p2}% 0%, 100% 100%, 0% 100%)`;
    
    document.getElementById('m5-mensagem').innerText = "";
}

function validarM5() {
    const B = parseInt(document.getElementById('m5-input-bmaior').value);
    const b = parseInt(document.getElementById('m5-input-bmenor').value);
    const h = parseInt(document.getElementById('m5-input-h').value);
    const resp = parseFloat(document.getElementById('m5-resposta').value);
    const msg = document.getElementById('m5-mensagem');
    const gabarito = ((B + b) * h) / 2;
    
    if (isNaN(resp)) {
        msg.innerText = "Digite o valor calculado da área do trapézio.";
        msg.className = "mensagem erro";
        return;
    }
    
    if (Math.abs(resp - gabarito) < 0.1) {
        msg.innerText = "Brilhante! Cálculo do trapézio validado. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(5);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. A fórmula é: ((Base Maior + Base Menor) × Altura) / 2.";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m5-input-bmaior').addEventListener('input', atualizarM5);
document.getElementById('m5-input-bmenor').addEventListener('input', atualizarM5);
document.getElementById('m5-input-h').addEventListener('input', atualizarM5);


// --- NÍVEL 6: TEOREMA DE PITÁGORAS ---
function atualizarM6() {
    const a = parseInt(document.getElementById('m6-input-a').value);
    const b = parseInt(document.getElementById('m6-input-b').value);
    
    document.getElementById('m6-valor-a').innerText = a;
    document.getElementById('m6-valor-b').innerText = b;
    document.getElementById('m6-f-a').innerText = a;
    document.getElementById('m6-f-b').innerText = b;
    
    const forma = document.getElementById('m6-forma');
    forma.style.width = (a * ESCALA) + "px";
    forma.style.height = (b * ESCALA) + "px";
    document.getElementById('m6-mensagem').innerText = "";
}

function validarM6() {
    const a = parseInt(document.getElementById('m6-input-a').value);
    const b = parseInt(document.getElementById('m6-input-b').value);
    const resp = parseFloat(document.getElementById('m6-resposta').value);
    const msg = document.getElementById('m6-mensagem');
    const gabarito = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    if (isNaN(resp)) {
        msg.innerText = "Digite a medida calculada da hipotenusa.";
        msg.className = "mensagem erro";
        return;
    }
    
    if (Math.abs(resp - gabarito) < 0.2) {
        msg.innerText = "Mestre da Geometria! Pitágoras verificado com sucesso. 🏆";
        msg.className = "mensagem sucesso";
        missoesConcluidas.add(6);
        atualizarProgresso();
    } else {
        msg.innerText = "Incorreto. Eleve os catetos ao quadrado, somes-os e extraia a raiz quadrada do resultado.";
        msg.className = "mensagem erro";
    }
}
document.getElementById('m6-input-a').addEventListener('input', atualizarM6);
document.getElementById('m6-input-b').addEventListener('input', atualizarM6);


// INICIALIZAR TODAS AS MISSÕES
atualizarM1();
atualizarM2();
atualizarM3();
atualizarM4();
atualizarM5();
atualizarM6();