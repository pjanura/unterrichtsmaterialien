// ═══════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════
const data = {
  "5": { label:"Jahrgangsstufe 5", fächer:{
    "Philosophie":{ color:"#1D4ED8", themen:[
      { name:"Was ist Philosophie?", icon:"💭", sub:[
        { name:"Staunen als Anfang", materialien:[
          { title:"Was ist eine Frage?", desc:"Einstieg ins philosophische Denken", type:"Präsentation", date:"Sep 2024", link:"#" },
          { title:"Übung: Warum-Fragen", desc:"Alltag hinterfragen – Arbeitsblatt", type:"Aufgabe", date:"Sep 2024", link:"#" },
        ]},
        { name:"Meinung & Argument", materialien:[
          { title:"Meinung vs. Argument", desc:"Unterschiede mit Beispielen erklärt", type:"PDF", date:"Okt 2024", link:"#" },
          { title:"Philosophie Grundbegriffe", desc:"6 Karten · These, Argument, Konklusion …", type:"Flashcards", date:"Okt 2024", link:"#", cards:[
            { front:"Philosophie", back:"Griech.: philia (Liebe) + sophia (Weisheit). Suche nach Wahrheit durch systematisches, kritisches Nachdenken." },
            { front:"These", back:'Eine Behauptung, die begründet und verteidigt werden soll. Beispiel: „Freundschaft ist das Wichtigste im Leben.“' },
            { front:"Argument", back:"Begründung für eine These. Besteht aus Prämissen (Voraussetzungen) + Konklusion (Schlussfolgerung)." },
            { front:"Prämisse", back:"Voraussetzung, die als wahr angenommen wird, um daraus eine Schlussfolgerung zu ziehen." },
            { front:"Konklusion", back:"Schlussfolgerung – was sich logisch aus den Prämissen ergibt." },
            { front:"Meinung vs. Argument", back:"Meinung = persönliche Haltung ohne Begründung. Argument = Behauptung + Begründung + Beleg/Beispiel." },
          ]},
        ]},
      ]},
      { name:"Freundschaft & Gemeinschaft", icon:"🤝", sub:[
        { name:"Was ist Freundschaft?", materialien:[
          { title:"Aristoteles über Freundschaft", desc:"Vereinfachte Lektüre mit Fragen", type:"PDF", date:"Nov 2024", link:"#" },
          { title:"Diskussion: Brauche ich Freunde?", desc:"Gesprächsführung im Unterricht", type:"Aufgabe", date:"Nov 2024", link:"#" },
        ]},
      ]},
    ]},
    "Informatik":{ color:"#15803D", themen:[
      { name:"Grundlagen des Computers", icon:"💻", sub:[
        { name:"Hardware & Software", materialien:[
          { title:"Bauteile eines Computers", desc:"CPU, RAM, Festplatte, GPU im Überblick", type:"Präsentation", date:"Sep 2024", link:"#" },
          { title:"Wie funktioniert ein Prozessor?", desc:"Erklärvideo mit Leitfragen (10 min)", type:"Video", date:"Okt 2024", link:"#" },
        ]},
        { name:"Binärsystem", materialien:[
          { title:"Zahlen im Binärsystem", desc:"Von Dezimal zu Binär und zurück", type:"PDF", date:"Okt 2024", link:"#" },
          { title:"Übungsblatt Binärzahlen", desc:"Umrechnungsaufgaben mit Lösungen", type:"Aufgabe", date:"Nov 2024", link:"#" },
          { title:"Binärzahlen 0–15", desc:"8 Karten · Dezimal ↔ Binär auswendig lernen", type:"Flashcards", date:"Nov 2024", link:"#", cards:[
            { front:"0 (dezimal)", back:"0000 (binär)" },
            { front:"1 (dezimal)", back:"0001 (binär)" },
            { front:"2 (dezimal)", back:"0010 (binär)" },
            { front:"3 (dezimal)", back:"0011 (binär)" },
            { front:"4 (dezimal)", back:"0100 (binär)" },
            { front:"8 (dezimal)", back:"1000 (binär)" },
            { front:"10 (dezimal)", back:"1010 (binär)" },
            { front:"15 (dezimal)", back:"1111 (binär)" },
          ]},
        ]},
      ]},
    ]},
  }},
  "6": { label:"Jahrgangsstufe 6", fächer:{
    "Geschichte":{ color:"#B54708", themen:[
      { name:"Altes Ägypten", icon:"🏺", sub:[
        { name:"Gesellschaft & Pharao", materialien:[
          { title:"Die Ständepyramide", desc:"Aufbau der ägyptischen Gesellschaft", type:"Präsentation", date:"Nov 2024", link:"#" },
          { title:"Der Pharao als Gott-König", desc:"Quellenarbeit mit Hieroglyphentexten", type:"Aufgabe", date:"Nov 2024", link:"#" },
        ]},
        { name:"Religion & Totenkult", materialien:[
          { title:"Ägyptische Götter", desc:"Steckbriefe zu Ra, Osiris, Anubis …", type:"PDF", date:"Dez 2024", link:"#" },
          { title:"Das Totengericht", desc:"Bildanalyse aus dem Buch der Toten", type:"Aufgabe", date:"Jan 2025", link:"#" },
          { title:"Ägyptische Götter", desc:"8 Karten · Götter, Symbole und Funktionen", type:"Flashcards", date:"Dez 2024", link:"#", cards:[
            { front:"Ra", back:"Sonnengott & Schöpfergott. Reist täglich im Sonnenboot über den Himmel. Falkenkopf mit Sonnenscheibe." },
            { front:"Osiris", back:"Gott der Toten und der Wiedergeburt. Herrscher der Unterwelt. Wird von Seth ermordet und von Isis wiederbelebt." },
            { front:"Anubis", back:"Gott der Totenriten & Mumifizierung. Schakalkopf. Wiegt das Herz des Toten gegen die Feder der Ma'at." },
            { front:"Isis", back:"Göttin der Magie und Heilung. Mutter des Horus. Bringt Osiris nach dem Tod zurück zum Leben." },
            { front:"Horus", back:"Himmelsgott mit Falkenkopf. Sohn von Osiris und Isis. Der Pharao gilt als lebendige Verkörperung des Horus." },
            { front:"Seth", back:"Gott des Chaos und der Wüste. Mörder des Osiris. Gegenspieler des Horus. Fabeltier mit Rüsselschnauze." },
            { front:"Thoth", back:"Gott der Weisheit und der Schrift. Ibiskopf. Erfinder der Hieroglyphen. Schreiber der Götter." },
            { front:"Ma'at", back:"Göttin der Wahrheit, Gerechtigkeit und Weltordnung. Symbol: Straußenfeder. Maßstab im Totengericht." },
          ]},
        ]},
      ]},
      { name:"Antikes Griechenland", icon:"🏛", sub:[
        { name:"Die Polis", materialien:[
          { title:"Aufbau der griechischen Polis", desc:"Agora, Akropolis, Demos", type:"Präsentation", date:"Jan 2025", link:"#" },
          { title:"Athen vs. Sparta", desc:"Vergleichstabelle zum Ausfüllen", type:"Aufgabe", date:"Feb 2025", link:"#" },
          { title:"Griechische Fachbegriffe", desc:"7 Karten · Polis, Demos, Demokratie …", type:"Flashcards", date:"Jan 2025", link:"#", cards:[
            { front:"Polis", back:"Griechischer Stadtstaat – politische Gemeinschaft aus Stadt und umliegendem Land. Grundeinheit der griechischen Welt." },
            { front:"Agora", back:"Zentraler Marktplatz der Polis. Ort für Handel, politische Diskussionen und öffentliches Leben." },
            { front:"Akropolis", back:"Erhöhte Stadtburg mit den wichtigsten Tempeln. In Athen: Parthenon als Tempel der Göttin Athene." },
            { front:"Demos", back:"Das Volk der freien, männlichen Bürger. Träger der politischen Macht in der Demokratie." },
            { front:"Demokratie", back:"Griech.: demos (Volk) + kratia (Herrschaft). In Athen durch die Volksversammlung (Ekklesia) ausgeübt." },
            { front:"Oligarchie", back:"Herrschaft der Wenigen / Reichen. Gegensatz zur Demokratie. Sparta war eine Oligarchie mit zwei Königen." },
            { front:"Ekklesia", back:"Athenische Volksversammlung. Alle freien, volljährigen männlichen Bürger dürfen reden und abstimmen." },
          ]},
        ]},
        { name:"Leben in Athen", materialien:[
          { title:"Leben in Athen", desc:"Hörspiel: Mikon, Calliope und Skythos", type:"Präsentation", date:"Feb 2025", link:"#" },
          { title:"Die Volksversammlung", desc:"Lückentext zur athenischen Demokratie", type:"Aufgabe", date:"Feb 2025", link:"#" },
          { title:"Die Rolle der Frau", desc:"Quellenanalyse und Diskussionsfragen", type:"PDF", date:"März 2025", link:"#" },
        ]},
        { name:"Olympische Spiele", materialien:[
          { title:"Antike Olympia", desc:"Geschichte und Ablauf der Spiele", type:"PDF", date:"März 2025", link:"#" },
          { title:"Antik vs. Modern", desc:"Vergleich der Disziplinen", type:"Aufgabe", date:"März 2025", link:"#" },
        ]},
      ]},
    ]},
    "Informatik":{ color:"#15803D", themen:[
      { name:"Algorithmen", icon:"⚙️", sub:[
        { name:"Was ist ein Algorithmus?", materialien:[
          { title:"Algorithmen im Alltag", desc:"Kochrezept, Wegbeschreibung, Spielanleitung", type:"Präsentation", date:"Sep 2024", link:"#" },
          { title:"Struktogramme zeichnen", desc:"Einführung mit Übungsaufgaben", type:"Aufgabe", date:"Okt 2024", link:"#" },
          { title:"Informatik Grundbegriffe", desc:"6 Karten · Algorithmus, Schleife, Variable …", type:"Flashcards", date:"Okt 2024", link:"#", cards:[
            { front:"Algorithmus", back:"Eindeutige Handlungsvorschrift zur Lösung eines Problems. Eigenschaften: endlich, eindeutig, ausführbar, terminiert." },
            { front:"Variable", back:"Benannter Speicherplatz für einen Wert. Beispiel: alter = 14. Kann im Programmablauf verändert werden." },
            { front:"Schleife (Loop)", back:"Kontrollstruktur, die einen Codeblock mehrfach ausführt. Typen: while, for, do-while." },
            { front:"Bedingte Anweisung", back:"if/else – Codeblock wird nur ausgeführt, wenn eine Bedingung wahr ist. Grundlage aller Entscheidungen im Programm." },
            { front:"Struktogramm", back:"Grafische Darstellung eines Algorithmus (Nassi-Shneiderman-Diagramm). Zeigt Sequenz, Auswahl und Schleifen." },
            { front:"Debugging", back:"Systematisches Suchen und Beheben von Fehlern (Bugs) in einem Programm." },
          ]},
        ]},
        { name:"Scratch-Programmierung", materialien:[
          { title:"Erste Schritte in Scratch", desc:"Schritt-für-Schritt Anleitung", type:"PDF", date:"Nov 2024", link:"#" },
          { title:"Tutorial: Eigenes Spiel", desc:"Video-Anleitung für Scratch-Projekt", type:"Video", date:"Nov 2024", link:"#" },
        ]},
      ]},
    ]},
  }},
  "Q1": { label:"Qualifikationsphase 1", fächer:{
    "Geschichte":{ color:"#B54708", themen:[
      { name:"Weimarer Republik", icon:"🗳", sub:[
        { name:"Entstehung & Verfassung", materialien:[
          { title:"Novemberrevolution 1918", desc:"Ursachen und Verlauf des Kriegsendes", type:"Präsentation", date:"Jan 2025", link:"#" },
          { title:"Die Weimarer Verfassung", desc:"Analyse der wichtigsten Artikel", type:"Aufgabe", date:"Jan 2025", link:"#" },
          { title:"Weimar: Schlüsseldaten", desc:"8 Karten · Daten und Personen 1918–1933", type:"Flashcards", date:"Jan 2025", link:"#", cards:[
            { front:"9. November 1918", back:"Ausrufung der Republik durch Philipp Scheidemann (SPD). Ende des Kaiserreichs. Beginn der Weimarer Republik." },
            { front:"11. November 1918", back:"Waffenstillstand – Ende des Ersten Weltkriegs. Unterzeichnung im Wald von Compiègne." },
            { front:"Friedrich Ebert", back:"Erster Reichspräsident der Weimarer Republik (SPD). Amtszeit 1919–1925. Nutzte Artikel 48 häufig." },
            { front:"Artikel 48 WRV", back:"Notstandsartikel – erlaubte Regieren ohne Parlamentszustimmung. Später von Hitler für den Ermächtigungsakt missbraucht." },
            { front:"Hyperinflation 1923", back:"Extremer Wertverlust der Mark. Ursachen: Reparationen, Ruhrbesetzung, Notendruck. Stabilisierung durch Rentenmark." },
            { front:"Dawes-Plan (1924)", back:"US-amerikanisches Kreditprogramm für Deutschland. Ermöglichte Wirtschaftsstabilisierung – Beginn der Goldenen Zwanziger." },
            { front:"Goldene Zwanziger (1924–29)", back:"Phase relativer Stabilität und kultureller Blüte in der Weimarer Republik. Getrübt durch soziale Spannungen." },
            { front:"30. Januar 1933", back:"Ernennung Hitlers zum Reichskanzler durch Reichspräsident Hindenburg. Formales Ende der Weimarer Republik." },
          ]},
        ]},
        { name:"Krisen der Republik", materialien:[
          { title:"Inflation 1923", desc:"Ursachen, Verlauf, Stabilisierung", type:"Präsentation", date:"Feb 2025", link:"#" },
          { title:"Zeitungsberichte 1923", desc:"Primärquellen zur Hyperinflation", type:"Aufgabe", date:"Feb 2025", link:"#" },
          { title:"Zeitleiste 1918–1933", desc:"Übersicht zum Ausdrucken", type:"PDF", date:"März 2025", link:"#" },
        ]},
      ]},
    ]},
    "Philosophie":{ color:"#1D4ED8", themen:[
      { name:"Erkenntnistheorie", icon:"🔍", sub:[
        { name:"Descartes & Zweifel", materialien:[
          { title:"Meditationen – Auszüge", desc:"Primärtext mit Kommentar und Leitfragen", type:"PDF", date:"Jan 2025", link:"#" },
          { title:"Der böse Dämon", desc:"Analyse des Zweifelsexperiments", type:"Aufgabe", date:"Feb 2025", link:"#" },
          { title:"Erkenntnistheorie Begriffe", desc:"7 Karten · Descartes, a priori, Empirismus …", type:"Flashcards", date:"Feb 2025", link:"#", cards:[
            { front:"Erkenntnistheorie", back:"Teilgebiet der Philosophie: Was können wir wissen? Wie entsteht Wissen? Wie sicher ist es?" },
            { front:"Rationalismus", back:"Wissen entsteht durch Vernunft (ratio), unabhängig von Sinneserfahrung. Vertreter: Descartes, Leibniz, Spinoza." },
            { front:"Empirismus", back:"Wissen entsteht ausschließlich durch Sinneserfahrung (empiria). Vertreter: Hume, Locke, Berkeley." },
            { front:"Methodischer Zweifel", back:"Descartes zweifelt systematisch an allem Zweifelbaren, um eine sichere Grundlage des Wissens zu finden." },
            { front:"Cogito ergo sum", back:'„Ich denke, also bin ich.“ Descartes’ einzige zweifelsfreie Erkenntnis: das Denken selbst beweist die eigene Existenz.' },
            { front:"a priori", back:'Wissen, das unabhängig von Erfahrung gilt. Beispiel: „2 + 2 = 4“ gilt auch ohne Beobachtung.' },
            { front:"a posteriori", back:'Wissen, das aus Erfahrung stammt. Beispiel: „Wasser kocht bei 100 °C.“ Muss erst beobachtet werden.' },
          ]},
        ]},
        { name:"Platon: Höhlengleichnis", materialien:[
          { title:"Das Höhlengleichnis", desc:"Originaltext, Erklärung, Deutungsebenen", type:"PDF", date:"Feb 2025", link:"#" },
          { title:"Matrix & Platon", desc:"Filmanalyse: Parallelen zum Höhlengleichnis", type:"Video", date:"März 2025", link:"#" },
          { title:"Essay schreiben", desc:"Aufgabenstellung und Bewertungskriterien", type:"Aufgabe", date:"März 2025", link:"#" },
        ]},
      ]},
      { name:"Ethik & Moral", icon:"⚖️", sub:[
        { name:"Kategorischer Imperativ", materialien:[
          { title:"Kants drei Formeln", desc:"Der kategorische Imperativ erklärt", type:"Präsentation", date:"Apr 2025", link:"#" },
          { title:"Trolley-Problem & Dilemma", desc:"Fallbeispiele und Diskussionsfragen", type:"Aufgabe", date:"Apr 2025", link:"#" },
        ]},
      ]},
    ]},
  }},
};

// ── Pre-process: assign _fcId to every flashcard set ──
const fcSetMap = {};
let fcIdCounter = 0;
Object.entries(data).forEach(([sk,sd])=>Object.entries(sd.fächer).forEach(([fach,fd])=>fd.themen.forEach(t=>t.sub.forEach(sub=>sub.materialien.forEach(mat=>{
  if(mat.type==='Flashcards'){
    mat._fcId='fc_'+fcIdCounter++;
    fcSetMap[mat._fcId]={sk,fach,mat};
  }
})))));

// ═══════════════════════════════════════════════
//  STORAGE WRAPPER (graceful fallback)
// ═══════════════════════════════════════════════
const memStore = {};
const store = {
  async get(k){ try{ if(window.storage) return await window.storage.get(k); } catch(_){} return memStore[k]?{value:memStore[k]}:null; },
  async set(k,v){ try{ if(window.storage) return await window.storage.set(k,v); } catch(_){} memStore[k]=v; return {value:v}; }
};

// ═══════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════
let isDark=false;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('ltgi').textContent=isDark?'☀️':'🌙';
  document.getElementById('ltgl').textContent=isDark?' Light Mode':' Dark Mode';
  document.getElementById('atgl').textContent=isDark?'☀️':'🌙';
}

// ═══════════════════════════════════════════════
//  LANDING BUILD
// ═══════════════════════════════════════════════
function computeStats(){
  const fs=new Set(); let m=0;
  Object.values(data).forEach(s=>Object.entries(s.fächer).forEach(([f,fd])=>{
    fs.add(f); fd.themen.forEach(t=>t.sub.forEach(s=>m+=s.materialien.length));
  }));
  return{stufen:Object.keys(data).length,fächer:fs.size,mats:m};
}
const stats=computeStats();
Object.entries(data).forEach(([k,sd])=>{
  const e=document.createElement('div'); e.className='ls-card';
  e.innerHTML=`<div class="ls-name">${k}</div><div class="ls-info">${Object.keys(sd.fächer).join(' · ')}</div>`;
  e.onclick=()=>openApp(k); document.getElementById('land-stufen').appendChild(e);
});
[{n:stats.stufen,l:'Jahrgangsstufen'},{n:stats.fächer,l:'Fächer'},{n:stats.mats,l:'Materialien'}].forEach(s=>{
  const e=document.createElement('div'); e.className='stat';
  e.innerHTML=`<div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div>`;
  document.getElementById('stats-bar').appendChild(e);
});
Object.keys(data).forEach(k=>{
  const b=document.createElement('button'); b.className='st-tab'; b.textContent=k;
  b.onclick=()=>selectStufe(k); document.getElementById('stufe-tabs').appendChild(b);
});

// ═══════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════
function openApp(stufe){
  document.getElementById('landing').classList.add('exit');
  setTimeout(()=>{
    document.getElementById('landing').style.display='none';
    const app=document.getElementById('app');
    app.style.display='flex';
    requestAnimationFrame(()=>{ app.classList.add('visible'); if(stufe) selectStufe(stufe); });
  },480);
}
function goBack(){
  document.getElementById('app').classList.remove('visible');
  setTimeout(()=>{
    document.getElementById('app').style.display='none';
    const l=document.getElementById('landing'); l.style.display='flex'; l.classList.remove('exit');
  },320);
}

// ═══════════════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════════════
let activeStufe=null,activeFach=null,activeTypes=new Set(),searchTerm='';

function selectStufe(k){
  activeStufe=k; activeFach=null;
  document.querySelectorAll('.st-tab').forEach(b=>b.classList.toggle('active',b.textContent===k));
  buildFachBar(k); buildSidebar(null,null); showStufeWelcome(k);
}
function buildFachBar(sk){
  const bar=document.getElementById('fach-bar');
  bar.innerHTML='<span class="fach-lbl">Fach</span>';
  Object.entries(data[sk].fächer).forEach(([fach, fd])=>{
    const c=document.createElement('button'); c.className='fach-chip'; c.textContent=fach; c.dataset.fach=fach;
    c.onclick=()=>selectFach(sk,fach); bar.appendChild(c);
  });
}
function selectFach(sk,fach){
  activeFach=fach;
  const col=data[sk].fächer[fach].color;
  document.querySelectorAll('.fach-chip').forEach(c=>{
    const on=c.dataset.fach===fach;
    c.style.background=on?col+'18':''; c.style.borderColor=on?col:'';
    c.style.color=on?col:''; c.style.fontWeight=on?'600':'';
  });
  buildSidebar(sk,fach); showFachWelcome(sk,fach);
}
function buildSidebar(sk,fach){
  const sb=document.getElementById('sidebar');
  if(!sk||!fach){sb.innerHTML='<div class="sb-hint">Fach oben wählen,<br>dann Thema auswählen.</div>';return}
  sb.innerHTML='';
  data[sk].fächer[fach].themen.forEach(thema=>{
    const grp=document.createElement('div');
    const btn=document.createElement('button'); btn.className='topic-btn';
    btn.innerHTML=`<span class="t-icon">${thema.icon}</span>${thema.name}<span class="t-chev">▶</span>`;
    const lst=document.createElement('div'); lst.className='sub-list';
    btn.onclick=()=>{
      const o=btn.classList.contains('open');
      sb.querySelectorAll('.topic-btn').forEach(b=>b.classList.remove('open'));
      sb.querySelectorAll('.sub-list').forEach(l=>l.classList.remove('open'));
      if(!o){btn.classList.add('open');lst.classList.add('open');}
    };
    thema.sub.forEach(sub=>{
      const s=document.createElement('button'); s.className='sub-btn';
      s.innerHTML=`${sub.name}<span class="sub-cnt">${sub.materialien.length}</span>`;
      s.onclick=()=>{
        sb.querySelectorAll('.sub-btn').forEach(b=>b.classList.remove('active'));
        s.classList.add('active'); showMaterials(sk,fach,thema,sub);
      };
      lst.appendChild(s);
    });
    grp.appendChild(btn); grp.appendChild(lst); sb.appendChild(grp);
  });
}
function showStufeWelcome(k){
  const sd=data[k];
  document.getElementById('content').innerHTML=
    `<div class="st-screen"><div class="st-ico">📂</div><h3>${sd.label}</h3><p>Fächer: ${Object.keys(sd.fächer).join(', ')}<br><br>Wähle oben ein Fach, dann links ein Thema.</p></div>`;
}
function showFachWelcome(sk,fach){
  const fd=data[sk].fächer[fach],col=fd.color;
  const icons={'Geschichte':'🏛','Philosophie':'💭','Informatik':'💻'};
  const total=fd.themen.reduce((a,t)=>a+t.sub.reduce((b,s)=>b+s.materialien.length,0),0);
  document.getElementById('content').innerHTML=
    `<div class="st-screen"><div class="st-ico">${icons[fach]||'📁'}</div><h3>${fach}</h3><p style="color:${col};font-weight:600;margin-bottom:8px">${data[sk].label}</p><p>${total} Materialien · ${fd.themen.length} Themen<br>Wähle links ein Unterthema.</p></div>`;
}

/* ── Foto-Banner pro Thema (Slug-Konvention + Fallbacks) ── */
function slugify(s){
  return (s||'')
    .toLowerCase()
    .trim()
    .replace(/&/g,' und ')
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/-+/g,'-')
    .replace(/(^-|-$)/g,'');
}
function bannerCandidates(fach, themaName){
  const f = slugify(fach);
  const t = slugify(themaName);
  return [
    `assets/banners/${f}/${t}.webp`,
    `assets/banners/${f}/${t}.jpg`,
    `assets/banners/${f}/_default.webp`,
    `assets/banners/${f}/_default.jpg`,
    `assets/banners/_default.webp`,
    `assets/banners/_default.jpg`,
  ];
}
function setBannerImg(imgEl, candidates, i=0){
  if(!imgEl || i >= candidates.length) return;
  imgEl.onerror = () => setBannerImg(imgEl, candidates, i+1);
  imgEl.src = candidates[i];
}

/* ✅ Content: nur Foto + Tags im Foto + Karten */
function showMaterials(sk,fach,thema,sub){
  activeTypes.clear();
  searchTerm=document.getElementById('search').value.toLowerCase().trim();

  document.getElementById('content').innerHTML=`
    <div class="c-inner">

      <div class="photo-banner">
        <img id="pb-img" class="pb-img" alt="">
        <div class="tag-row">
          <div class="type-filters">
            <span class="tpill" data-type="PDF"          data-k="pdf"   onclick="toggleType(this)">📄 PDF</span>
            <span class="tpill" data-type="Präsentation" data-k="pptx"  onclick="toggleType(this)">📊 Präsentation</span>
            <span class="tpill" data-type="Video"        data-k="video" onclick="toggleType(this)">▶ Video</span>
            <span class="tpill" data-type="Aufgabe"      data-k="aufg"  onclick="toggleType(this)">✏️ Aufgabe</span>
            <span class="tpill" data-type="Flashcards"   data-k="flash" onclick="toggleType(this)">🃏 Flashcards</span>
          </div>
        </div>
      </div>

      <div class="cards-grid" id="cards-grid"></div>
      <div id="empty-msg" class="empty-msg" style="display:none">Kein Material gefunden.</div>
    </div>`;

  // Banner-Image pro Thema + Fallbacks
  const imgEl = document.getElementById('pb-img');
  setBannerImg(imgEl, bannerCandidates(fach, thema.name));

  const grid=document.getElementById('cards-grid');
  sub.materialien.forEach((m,i)=>{
    const card=document.createElement('div');
    card.className='card'; card.dataset.type=m.type;
    card.dataset.title=m.title.toLowerCase(); card.dataset.desc=m.desc.toLowerCase();
    card.style.animationDelay=(i*.05)+'s';

    let footer;
    if(m.type==='Flashcards'){
      footer=`<span class="c-date">${m.date}</span>
        <span class="due-badge new-cards" id="due-${m._fcId}">↻ Wird geladen…</span>
        <a class="card-link" href="#" onclick="event.preventDefault();openFlashcards(fcSetMap['${m._fcId}'].mat)">Lernen →</a>`;
    } else {
      footer=`<span class="c-date">${m.date}</span><a class="card-link" href="${m.link}">Öffnen →</a>`;
    }

    card.innerHTML=`
      <div class="card-top"><span class="tbadge b-${m.type}">${m.type==='Flashcards'?'🃏 Flashcards':m.type}</span></div>
      <h3>${m.title}</h3><p>${m.desc}</p>
      <div class="card-foot">${footer}</div>`;
    grid.appendChild(card);
  });

  filterCards();
  refreshDueCounts();
}

function toggleType(pill){
  const t=pill.dataset.type,cls='on-'+pill.dataset.k;
  activeTypes.has(t)?(activeTypes.delete(t),pill.classList.remove(cls)):(activeTypes.add(t),pill.classList.add(cls));
  filterCards();
}
function filterCards(){
  let v=0;
  document.querySelectorAll('.card').forEach(card=>{
    const ok=(activeTypes.size===0||activeTypes.has(card.dataset.type))&&(!searchTerm||card.dataset.title.includes(searchTerm)||card.dataset.desc.includes(searchTerm));
    card.classList.toggle('hidden',!ok); if(ok)v++;
  });
  const em=document.getElementById('empty-msg'); if(em)em.style.display=v===0?'block':'none';
}
const searchEl = document.getElementById('search');
if(searchEl) searchEl.addEventListener('input',e=>{
  searchTerm=e.target.value.toLowerCase().trim();
  if(document.querySelectorAll('.card').length) filterCards();
});

// ═══════════════════════════════════════════════
//  SPACED REPETITION – SM-2 (✅ Labels unterscheiden sich)
// ═══════════════════════════════════════════════
function todayStr(){ return new Date().toISOString().split('T')[0]; }
function isDue(s){ return !s.due||s.due<=todayStr(); }

function sm2(state, q){
  // q: 0=again, 1=good, 2=easy
  let { interval=0, ef=2.5, reviews=0 } = state;

  if(q === 0){
    interval = 1;                 // speichern: morgen wieder
    ef = Math.max(1.3, ef - 0.2);
    // reviews nicht erhöhen
  } else {
    if(reviews === 0) interval = (q === 2) ? 4 : 1;      // ✅ sofort anders
    else if(reviews === 1) interval = (q === 2) ? 7 : 3;
    else interval = Math.round(interval * (q === 2 ? ef * 1.3 : ef));

    ef = (q === 2) ? Math.min(4, ef + 0.15) : Math.max(1.3, ef);
    reviews++;
  }

  const due = new Date();
  due.setDate(due.getDate() + interval);
  return { interval, ef, reviews, due: due.toISOString().split('T')[0] };
}

function intervalLabel(state, q){
  if(q === 0) return 'gleich'; // ✅ statt "1 Tag"
  const n = sm2(state, q).interval;
  if(n <= 1) return '1 Tag';
  if(n < 7)  return n + ' Tage';
  if(n < 14) return '1 Woche';
  if(n < 30) return Math.round(n/7) + ' Wo.';
  return Math.round(n/30) + ' Mon.';
}

// ═══════════════════════════════════════════════
//  FLASHCARD STATE & MODAL
// ═══════════════════════════════════════════════
let fc={mat:null,cards:[],states:[],queue:[],current:0,flipped:false,totalDue:0,ratedSet:new Set(),failCounts:{},sess:{again:0,good:0,easy:0}};

async function openFlashcards(mat){
  fc.mat=mat; fc.cards=mat.cards;
  fc.sess={again:0,good:0,easy:0}; fc.failCounts={}; fc.ratedSet=new Set();

  // Load states
  let states=mat.cards.map(()=>({interval:0,ef:2.5,reviews:0,due:null}));
  try{const r=await store.get(mat._fcId); if(r){const p=JSON.parse(r.value);if(p.length===mat.cards.length)states=p;}}catch(_){}
  fc.states=states;

  // Build due queue (shuffle)
  let q=states.map((_,i)=>i).filter(i=>isDue(states[i]));
  for(let i=q.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[q[i],q[j]]=[q[j],q[i]];}
  fc.queue=q; fc.current=0; fc.totalDue=q.length; fc.flipped=false;

  const ov=document.getElementById('fc-overlay');
  ov.style.display='flex'; ov.style.opacity='0';
  requestAnimationFrame(()=>{ ov.style.opacity='1'; });
  document.body.style.overflow='hidden';
  renderFC();
}

function closeFlashcards(){
  const ov=document.getElementById('fc-overlay');
  ov.style.opacity='0';
  setTimeout(()=>{ ov.style.display='none'; document.body.style.overflow=''; refreshDueCounts(); },200);
}

function renderFC(){
  const{mat,cards,queue,current,flipped,states,totalDue,ratedSet,sess}=fc;
  const modal=document.getElementById('fc-modal');

  if(totalDue===0){
    const today=todayStr();
    let nextDue=null;
    states.forEach(s=>{if(s.due&&s.due>today&&(!nextDue||s.due<nextDue))nextDue=s.due;});
    const nxt=nextDue?fmtDue(nextDue):'bald';
    modal.innerHTML=`
      <div class="fc-head">
        <div><div class="fc-set-name">${mat.title}</div><div class="fc-prog-txt">${cards.length} Karten gesamt</div></div>
        <button class="fc-close" onclick="closeFlashcards()">✕</button>
      </div>
      <div class="fc-nodue">
        <div class="fd-ico">✅</div>
        <div class="fd-h">Alles erledigt!</div>
        <p class="fd-sub">Keine fälligen Karten. Nächste Wiederholung: ${nxt}.</p>
        <button class="fd-btn" onclick="closeFlashcards()">Schließen</button>
      </div>`;
    return;
  }

  if(current>=queue.length){
    modal.innerHTML=`
      <div class="fc-head">
        <div><div class="fc-set-name">${mat.title}</div><div class="fc-prog-txt">Sitzung abgeschlossen</div></div>
        <button class="fc-close" onclick="closeFlashcards()">✕</button>
      </div>
      <div class="fc-done">
        <div class="fd-ico">🎉</div>
        <div class="fd-h">Super gemacht!</div>
        <div class="fd-stats">
          <div class="fds"><div class="fds-n" style="color:#DC2626">${sess.again}</div><div class="fds-l">Nochmal</div></div>
          <div class="fds"><div class="fds-n" style="color:#D97706">${sess.good}</div><div class="fds-l">Gut</div></div>
          <div class="fds"><div class="fds-n" style="color:#16A34A">${sess.easy}</div><div class="fds-l">Einfach</div></div>
        </div>
        <p class="fd-sub">${ratedSet.size} Karten wiederholt · Abstände wurden angepasst.</p>
        <button class="fd-btn" onclick="closeFlashcards()">Fertig</button>
      </div>`;
    return;
  }

  const idx=queue[current];
  const card=cards[idx];
  const st=states[idx];
  const prog=Math.min(100,Math.round((ratedSet.size/totalDue)*100));

  modal.innerHTML=`
    <div class="fc-head">
      <div>
        <div class="fc-set-name">${mat.title}</div>
        <div class="fc-prog-txt">Karte ${current+1} / ${queue.length}  ·  ${ratedSet.size}/${totalDue} abgeschlossen</div>
      </div>
      <button class="fc-close" onclick="closeFlashcards()">✕</button>
    </div>
    <div class="fc-pbar"><div class="fc-pfill" style="width:${prog}%"></div></div>
    <div class="fc-body">
      <div class="fc-scene" onclick="flipFC()">
        <div class="fc-card3d${flipped?' flipped':''}">
          <div class="fc-face fc-face-front">
            <div class="fc-lbl">Frage</div>
            <div class="fc-word">${card.front}</div>
          </div>
          <div class="fc-face fc-face-back">
            <div class="fc-lbl">Antwort</div>
            <div class="fc-word">${card.back}</div>
          </div>
        </div>
      </div>
      <div class="fc-hint" id="fc-hint">${flipped?'':'<span>👆</span> Tippen zum Umdrehen'}</div>
      <div class="fc-ratings" id="fc-ratings" style="display:${flipped?'grid':'none'}">
        <button class="fc-rb again" onclick="rateFC(0)">
          <span class="rb-ico">🔴</span><span>Nochmal</span>
          <span class="rb-int">${intervalLabel(st,0)}</span>
        </button>
        <button class="fc-rb good" onclick="rateFC(1)">
          <span class="rb-ico">🟡</span><span>Gut</span>
          <span class="rb-int">${intervalLabel(st,1)}</span>
        </button>
        <button class="fc-rb easy" onclick="rateFC(2)">
          <span class="rb-ico">🟢</span><span>Einfach</span>
          <span class="rb-int">${intervalLabel(st,2)}</span>
        </button>
      </div>
    </div>`;
}

function flipFC(){
  if(fc.flipped)return;
  fc.flipped=true;
  const c=document.querySelector('.fc-card3d'); if(c)c.classList.add('flipped');
  const h=document.getElementById('fc-hint'); if(h)h.innerHTML='';
  const r=document.getElementById('fc-ratings'); if(r)r.style.display='grid';
}

async function rateFC(q){
  const idx=fc.queue[fc.current];
  if(q===0)fc.sess.again++;
  else if(q===1)fc.sess.good++;
  else fc.sess.easy++;

  fc.states[idx]=sm2(fc.states[idx],q);

  if(q===0){
    fc.failCounts[idx]=(fc.failCounts[idx]||0)+1;
    if(fc.failCounts[idx]<3){
      const rem=fc.queue.length-fc.current-1;
      const pos=fc.current+1+Math.floor(Math.random()*(rem+1));
      fc.queue.splice(pos,0,idx);
    }
  } else {
    fc.ratedSet.add(idx);
  }

  try{await store.set(fc.mat._fcId,JSON.stringify(fc.states));}catch(_){}

  fc.current++; fc.flipped=false;
  const m=document.getElementById('fc-modal');
  m.style.opacity='.5'; m.style.transform='scale(.97)';
  setTimeout(()=>{ m.style.opacity=''; m.style.transform=''; renderFC(); },130);
}

function fmtDue(d){
  const today=new Date(); today.setHours(0,0,0,0);
  const diff=Math.round((new Date(d)-today)/864e5);
  if(diff<=0)return'heute'; if(diff===1)return'morgen';
  if(diff<7)return'in '+diff+' Tagen'; if(diff<14)return'in einer Woche';
  return'in '+Math.round(diff/7)+' Wochen';
}

// ── Update due-count badges on flashcard cards ──
async function refreshDueCounts(){
  for(const[fcId,{mat}] of Object.entries(fcSetMap)){
    const badge=document.getElementById('due-'+fcId); if(!badge)continue;
    let dueCount=mat.cards.length;
    try{
      const r=await store.get(fcId);
      if(r){const st=JSON.parse(r.value); dueCount=st.filter(isDue).length;}
    }catch(_){}
    if(dueCount===0){
      badge.textContent='✓ Alles gelernt'; badge.className='due-badge done';
    } else if(dueCount===mat.cards.length){
      badge.textContent=dueCount+' neu · Starten'; badge.className='due-badge new-cards';
    } else {
      badge.textContent=dueCount+' fällig'; badge.className='due-badge';
    }
  }
}
