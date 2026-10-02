const ZAP = "5521985440072";
document.getElementById("ano").textContent = new Date().getFullYear();
const linkZap = (msg) => `https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}`;
document.querySelectorAll(".js-zap").forEach(a => a.href = linkZap("Olá! Vim pelo site da GB Calçados e queria tirar uma dúvida."));

const produtos = [
  {ref:"GB-001",nome:"Court Low",cor:"Cinza e marinho",cat:"Casual",preco:0,nums:[41,42,43],arte:["low","#D9D9D6","#1F2A44","#F4F4F2"]},
  {ref:"GB-002",nome:"Skate Chunky",cor:"Off-white",cat:"Casual",preco:0,nums:[41,42,43],arte:["chunky","#EDE7DA","#CFC6B4","#F7F3EA"]},
  {ref:"GB-003",nome:"Runner Air",cor:"Preto total",cat:"Corrida",preco:0,nums:[38,39,40,41,42,43,44],arte:["runner","#2A2A2A","#4A4A4A","#1A1A1A"]},
  {ref:"GB-004",nome:"Court Mid",cor:"Branco e vermelho",cat:"Cano alto",preco:0,nums:[39,40,41,42,43],arte:["high","#F5F5F3","#C8102E","#F5F5F3"]},
  {ref:"GB-005",nome:"Retro High",cor:"Preto e dourado",cat:"Cano alto",preco:0,nums:[40,41,42,43,44],arte:["high","#1C1C1C","#D4A12A","#EFEDE6"]},
  {ref:"GB-006",nome:"Classic Low",cor:"Branco total",cat:"Casual",preco:0,nums:[37,38,39,40,41,42,43,44],arte:["low","#FAFAF8","#E6E6E2","#FAFAF8"]},
  {ref:"GB-007",nome:"Runner Leve",cor:"Azul e branco",cat:"Corrida",preco:0,nums:[38,39,40,41,42],arte:["runner","#2F5DA8","#E9EEF6","#F3F3F3"]},
  {ref:"GB-008",nome:"Skate Chunky",cor:"Cinza e rosa",cat:"Casual",preco:0,nums:[35,36,37,38,39],arte:["chunky","#C9C7C9","#E7A6B8","#F4F1F2"]},
  {ref:"GB-009",nome:"Runner Air",cor:"Cinza e laranja",cat:"Corrida",preco:0,nums:[40,41,42,43,44],arte:["runner","#8C8F94","#F26B1D","#ECECEC"]},
  {ref:"GB-010",nome:"Court Low",cor:"Verde e bege",cat:"Casual",preco:0,nums:[39,40,41,42,43],arte:["low","#E8DFC9","#2E5E3E","#E1D3B3"]},
];
const preco = v => v ? v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}) : "R$ 000,00";

function tenis([modelo, cabedal, detalhe, sola], titulo){
  const alto = modelo==="high", grosso = modelo==="chunky"||modelo==="runner", t = grosso?140:150;
  const cab = alto
    ? `M40 ${t} L36 62 Q36 44 56 42 L118 44 Q132 45 136 58 L146 70 L168 42 Q178 34 188 44 L198 94 Q250 116 310 124 Q362 130 376 ${t-8} Q382 ${t-2} 380 ${t} Z`
    : modelo==="runner"
      ? `M44 ${t} L40 104 Q42 88 62 86 Q104 102 150 92 L170 72 Q182 66 190 78 L204 98 Q262 112 320 118 Q366 124 378 ${t-6} Q382 ${t-1} 380 ${t} Z`
      : `M38 ${t} L34 ${grosso?94:104} Q34 ${grosso?76:86} 54 ${grosso?72:82} Q100 ${grosso?90:100} 148 ${grosso?82:92} L166 ${grosso?60:70} Q178 ${grosso?56:66} 184 ${grosso?66:76} L196 ${grosso?88:96} Q250 ${grosso?106:116} 310 ${grosso?114:124} Q362 ${grosso?120:130} 376 ${t-8} Q382 ${t-2} 380 ${t} Z`;
  const sol = grosso ? "M30 140 H368 Q392 140 390 162 Q388 184 364 184 H42 Q20 184 20 162 Q20 140 30 140Z" : "M30 150 H370 Q390 150 388 166 Q386 180 366 180 H40 Q22 180 22 166 Q22 150 30 150Z";
  const ilh = alto ? [[176,56],[182,70],[188,84],[200,98],[222,106],[244,112]]
    : modelo==="runner" ? [[188,84],[204,98],[226,104],[248,108],[270,112]]
    : grosso ? [[176,70],[190,88],[212,96],[236,102],[260,108]]
    : [[176,80],[190,96],[212,104],[236,110],[260,116]];
  const calc = alto ? `M40 ${t} L36 62 Q36 50 46 46 Q70 100 74 ${t}Z`
    : `M38 ${t} L34 ${grosso?94:104} Q34 ${grosso?82:90} 46 ${grosso?76:85} Q62 ${grosso?104:112} 66 ${t}Z`;
  const bq = `M300 ${grosso?116:124} Q356 ${grosso?120:128} 376 ${t-8} Q382 ${t-2} 380 ${t} L290 ${t} Q284 ${grosso?126:134} 300 ${grosso?116:124}Z`;
  const fx = `M104 ${t-10} Q196 ${t-34} 286 ${t-44} L296 ${t-34} Q206 ${t-20} 116 ${t}Z`;
  return `<svg viewBox="${alto?"8 30 396 166":"8 48 396 148"}" role="img" aria-label="${titulo}">
    <ellipse cx="205" cy="${grosso?189:185}" rx="176" ry="6" fill="#000" opacity=".22"/>
    <path d="${sol}" fill="${sola}" stroke="#000" stroke-opacity=".18" stroke-width="1.5"/>
    <path d="${grosso?"M22 170 H388":"M24 172 H386"}" stroke="#000" stroke-opacity=".18" stroke-width="${grosso?3:2}"/>
    ${modelo==="runner"?`<path d="M60 160 Q120 150 180 162 T300 158 T370 154" fill="none" stroke="${detalhe}" stroke-width="5" stroke-linecap="round"/>`:""}
    <path d="${cab}" fill="${cabedal}" stroke="#000" stroke-opacity=".2" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="${calc}" fill="${detalhe}"/>
    <path d="${bq}" fill="${detalhe}" opacity=".9"/>
    <path d="${fx}" fill="${detalhe}"/>
    ${ilh.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.2" fill="#000" opacity=".35"/><path d="M${x-8} ${y-6} L${x+8} ${y+4}" stroke="#fff" stroke-opacity=".9" stroke-width="3" stroke-linecap="round"/>`).join("")}
    <path d="${cab}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="1.5" stroke-dasharray="3 4" transform="translate(4 4) scale(.98)"/>
  </svg>`;
}

// hero
const dest = produtos[1];
document.getElementById("tenis-hero").innerHTML = tenis(dest.arte, `${dest.nome} ${dest.cor}`);
document.getElementById("legenda-hero").textContent = `Em destaque: ${dest.nome}, ${dest.cor.toLowerCase()}`;

// filtros + grade
const filtros = ["Todos","Casual","Corrida","Cano alto"];
let filtroAtual = "Todos";
const elF = document.getElementById("filtros"), elG = document.getElementById("grade");
function render(){
  elF.innerHTML = filtros.map(f=>`<button class="filtro" role="tab" aria-selected="${f===filtroAtual}" data-f="${f}">${f}</button>`).join("");
  const lista = filtroAtual==="Todos" ? produtos : produtos.filter(p=>p.cat===filtroAtual);
  elG.innerHTML = lista.map(p=>`<li><button class="card" data-ref="${p.ref}" aria-label="Ver ${p.nome} ${p.cor}">
    <div class="foto">${tenis(p.arte, `${p.nome} ${p.cor}`)}</div>
    <div class="etiqueta">
      <div class="meta"><span>${p.ref}</span><span>${p.nums[0]}–${p.nums[p.nums.length-1]}</span></div>
      <p class="nome">${p.nome}</p><p class="cor">${p.cor}</p>
      <div class="rodape"><span class="preco">${preco(p.preco)}</span><span class="ver">Ver</span></div>
    </div></button></li>`).join("");
}
elF.addEventListener("click", e=>{const b=e.target.closest("[data-f]"); if(!b) return; filtroAtual=b.dataset.f; render();});
elG.addEventListener("click", e=>{const b=e.target.closest("[data-ref]"); if(b) abrir(produtos.find(p=>p.ref===b.dataset.ref));});
render();

// dialog
const dlg = document.getElementById("dlg");
function abrir(p){
  let num = null;
  dlg.innerHTML = `<div class="dlg">
    <div class="dlg-foto">${tenis(p.arte, `${p.nome} ${p.cor}`)}<span class="dlg-ref">${p.ref}</span></div>
    <div class="dlg-info">
      <div class="dlg-head"><div><p class="dlg-cat">${p.cat}</p><h3 class="dlg-nome" id="dlg-nome">${p.nome}</h3><p class="dlg-cor">${p.cor}</p></div>
        <button class="fechar" aria-label="Fechar"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div>
      <p class="dlg-preco">${preco(p.preco)}</p>
      <fieldset><legend>Escolha o número</legend><div class="numeros">${p.nums.map(n=>`<button type="button" class="num" aria-pressed="false" data-n="${n}">${n}</button>`).join("")}</div></fieldset>
      <div class="dlg-cta">
        <a class="btn btn-grande btn-off" aria-disabled="true" target="_blank" rel="noopener noreferrer"><svg><use href="#zap"/></svg>Encomendar pelo WhatsApp</a>
        <p class="dica">Selecione um número para continuar.</p>
      </div>
    </div></div>`;
  const cta = dlg.querySelector(".dlg-cta a"), dica = dlg.querySelector(".dica");
  dlg.querySelector(".fechar").onclick = () => dlg.close();
  dlg.querySelectorAll(".num").forEach(b => b.onclick = () => {
    num = +b.dataset.n;
    dlg.querySelectorAll(".num").forEach(x => x.setAttribute("aria-pressed", x===b));
    cta.classList.remove("btn-off"); cta.classList.add("btn-zap"); cta.removeAttribute("aria-disabled");
    cta.href = linkZap(`Olá! Vi no site e quero encomendar o ${p.nome} ${p.cor.toLowerCase()} (${p.ref}), número ${num}.`);
    dica.textContent = "A mensagem já vai pronta com o modelo e o número.";
  });
  cta.addEventListener("click", e => { if(!num) e.preventDefault(); });
  dlg.showModal();
}
dlg.addEventListener("click", e => { if(e.target===dlg) dlg.close(); });

// ===== vitrine de detalhes =====
const modelos = [
  {id:"low", nome:"Court Low", desc:"Cano baixo, o mais versátil para o dia a dia."},
  {id:"high", nome:"Court Mid", desc:"Cano alto, segura melhor o tornozelo e chama atenção no visual."},
  {id:"runner", nome:"Runner Air", desc:"Solado com amortecimento, pensado para caminhar e correr."},
  {id:"chunky", nome:"Skate Chunky", desc:"Solado alto e cabedal mais robusto, estilo skate."},
];
const cores = [
  {nome:"Branco total", c:["#FAFAF8","#E6E6E2","#FAFAF8"]},
  {nome:"Preto total", c:["#262626","#3E3E3E","#1A1A1A"]},
  {nome:"Off-white", c:["#EDE7DA","#CFC6B4","#F7F3EA"]},
  {nome:"Preto e dourado", c:["#1C1C1C","#D4A12A","#EFEDE6"]},
  {nome:"Cinza e marinho", c:["#D9D9D6","#1F2A44","#F4F4F2"]},
  {nome:"Branco e vermelho", c:["#F5F5F3","#C8102E","#F5F5F3"]},
  {nome:"Azul royal", c:["#2F5DA8","#E9EEF6","#F3F3F3"]},
  {nome:"Verde e bege", c:["#E8DFC9","#2E5E3E","#E1D3B3"]},
  {nome:"Rosa claro", c:["#F2D4DC","#E7A6B8","#FBF6F7"]},
  {nome:"Cinza e laranja", c:["#8C8F94","#F26B1D","#ECECEC"]},
  {nome:"Marrom café", c:["#6B4A34","#C9A27E","#EFE6DA"]},
  {nome:"Lilás", c:["#CBBFE3","#7B64B6","#F6F3FB"]},
];
const numerosVit = [36,37,38,39,40,41,42,43,44];
// zoom: [escala, origem X %, origem Y %]
const detalhes = [
  {id:"modelo", titulo:"Modelo", zoom:[1,50,50]},
  {id:"cores", titulo:"Cores", zoom:[1,50,50]},
  {id:"cabedal", titulo:"Cabedal", zoom:[1.45,50,42], txt:"A parte de cima do tênis. Acabamento liso, costura aparente nas laterais e forro macio por dentro."},
  {id:"solado", titulo:"Solado", zoom:[1.6,50,68], txt:"Borracha com ranhuras para dar aderência no chão. É o que segura o passo na chuva e na calçada."},
  {id:"bico", titulo:"Bico", zoom:[1.9,84,60], txt:"Biqueira reforçada na frente, a área que mais sofre com o uso. Ajuda o tênis a manter o formato."},
  {id:"calcanhar", titulo:"Calcanhar", zoom:[1.9,16,52], txt:"Contraforte firme atrás do pé, que mantém o calcanhar no lugar e evita que o tênis saia ao andar."},
  {id:"numero", titulo:"Numeração", zoom:[1,50,50], txt:"Na dúvida entre dois números, escolha o maior. Selecione o seu para já ir na mensagem."},
];
const vit = {det:1, modelo:0, cor:0, num:null};
const elPills=document.getElementById("vit-pills"), elPainel=document.getElementById("vit-painel"),
      elZoom=document.getElementById("vit-zoom"), elChip=document.getElementById("vit-chip"),
      elPontos=document.getElementById("vit-pontos"), elCta=document.getElementById("vit-cta");
const iconeMais = `<span class="mais"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></span>`;
const ehDesk = () => matchMedia("(min-width:1024px)").matches;

function desenharTenis(){
  const m = modelos[vit.modelo], c = cores[vit.cor];
  elZoom.innerHTML = tenis([m.id, ...c.c], `${m.nome} ${c.nome}`);
}
function aplicarZoom(){
  const [esc, ox, oy] = detalhes[vit.det].zoom;
  elZoom.style.transformOrigin = `${ox}% ${oy}%`;
  elZoom.style.transform = `scale(${esc})`;
}
function painelHTML(d){
  const fechar = `<button class="fechar-card" type="button" aria-label="Fechar detalhe"><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>`;
  if(d.id==="modelo") return `<div class="vit-card">${fechar}<h3>Modelo</h3><p class="txt">${modelos[vit.modelo].desc}</p>
    <div class="opcoes">${modelos.map((m,i)=>`<button type="button" class="op" data-modelo="${i}" aria-pressed="${i===vit.modelo}">${m.nome}</button>`).join("")}</div></div>`;
  if(d.id==="cores") return `<div class="vit-card">${fechar}<h3>Cores</h3><p class="txt">${cores.length} combinações disponíveis para encomenda. Toque para ver no tênis.</p>
    <div class="swatches">${cores.map((c,i)=>`<button type="button" class="sw" data-cor="${i}" aria-pressed="${i===vit.cor}" aria-label="${c.nome}" title="${c.nome}"><i style="background:linear-gradient(135deg,${c.c[0]} 0 55%,${c.c[1]} 55% 100%)"></i></button>`).join("")}</div>
    <p class="sw-nome">Cor selecionada: <b>${cores[vit.cor].nome}</b></p></div>`;
  if(d.id==="numero") return `<div class="vit-card">${fechar}<h3>Numeração</h3><p class="txt">${d.txt}</p>
    <div class="opcoes">${numerosVit.map(n=>`<button type="button" class="op" data-num="${n}" aria-pressed="${n===vit.num}" style="min-width:52px">${n}</button>`).join("")}</div></div>`;
  return `<div class="vit-card">${fechar}<h3>${d.titulo}</h3><p class="txt">${d.txt}</p></div>`;
}
function renderVit(){
  const d = detalhes[vit.det];
  elPills.innerHTML = detalhes.map((x,i)=>`<button type="button" role="tab" class="vit-pill" data-det="${i}" aria-expanded="${i===vit.det}">${iconeMais}${x.titulo}</button>`).join("");
  elPainel.innerHTML = painelHTML(d);
  if(ehDesk()){ // no desktop o card abre no lugar da pílula
    const pill = elPills.querySelector(`[data-det="${vit.det}"]`);
    pill.after(elPainel);
  } else if(elPainel.parentElement!==elPills.parentElement || elPainel.nextElementSibling===elPills){
    elPills.after(elPainel);
  }
  elPontos.innerHTML = detalhes.map((_,i)=>`<span class="${i===vit.det?"on":""}"></span>`).join("");
  const c = cores[vit.cor], m = modelos[vit.modelo];
  elChip.innerHTML = `<i style="background:${c.c[0]}"></i>${d.titulo==="Modelo"||d.titulo==="Cores"||d.titulo==="Numeração" ? c.nome : d.titulo}`;
  document.getElementById("vit-r1").textContent = m.nome;
  document.getElementById("vit-r2").textContent = `${c.nome}${vit.num?`, número ${vit.num}`:""}. R$ 000,00`;
  elCta.href = linkZap(`Olá! Vi no site e quero encomendar o ${m.nome} na cor ${c.nome.toLowerCase()}${vit.num?`, número ${vit.num}`:""}. Pode me passar valor e prazo?`);
  aplicarZoom();
  const ativa = elPills.querySelector('[aria-expanded="true"]');
  if(ativa && !ehDesk()) ativa.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"});
}
function irPara(i){ vit.det = (i+detalhes.length)%detalhes.length; renderVit(); }
elPills.addEventListener("click", e=>{const b=e.target.closest("[data-det]"); if(b) irPara(+b.dataset.det);});
document.querySelector(".vit-lado").addEventListener("click", e=>{
  const t=e.target;
  const mo=t.closest("[data-modelo]"), co=t.closest("[data-cor]"), nu=t.closest("[data-num]"), fe=t.closest(".fechar-card");
  if(mo){vit.modelo=+mo.dataset.modelo; desenharTenis(); renderVit();}
  else if(co){vit.cor=+co.dataset.cor; desenharTenis(); renderVit();}
  else if(nu){vit.num = vit.num===+nu.dataset.num ? null : +nu.dataset.num; renderVit();}
  else if(fe){irPara(1);}
});
document.getElementById("vit-ant").onclick=()=>irPara(vit.det-1);
document.getElementById("vit-prox").onclick=()=>irPara(vit.det+1);
// arrastar no celular
let x0=null; const palco=document.getElementById("vit-palco");
palco.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
palco.addEventListener("touchend",e=>{if(x0===null)return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40) irPara(vit.det+(dx<0?1:-1)); x0=null;});
addEventListener("resize",()=>renderVit());
desenharTenis(); renderVit();
