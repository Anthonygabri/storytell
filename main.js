

//está é a seçao de variáveis globais
let por=document.querySelector('#portugues');
let ing=document.querySelector('#ingles');
let par=document.createElement('p');
let i=1;
let isPrime=true;
let menu=document.querySelector('#ini');
let sobre=document.querySelector('#sobre');
let nome=document.querySelector('h2');
let rodape=document.querySelector('footer');



//funçao construtora dos objetos de texto
function texto() {
this.titulo=' ';	
this.portugues1=' ';
this.ingles1=' ';
this.quan=1;	
this.exists=false;
this.mostrar=function (quan) {
	
if (isPrime) {
nome.textContent=this.titulo;
 i=1;
 isPrime=false;
}
	if (quan>0) {
	  this['p'+i]=document.createElement('p');
	  this['i'+i]=document.createElement('p');
	  this['p'+i].textContent=i +' '+this['portugues'+i];
	  this['i'+i].textContent=i+' '+this['ingles'+i];
	  por.appendChild(this['p'+i]);
	  ing.appendChild(this['i'+i]);
	  quan--;
	  i++;
	   this.mostrar(quan);
}
	  	isPrime=true;	
      principal.exists=true;
}
this.remove=function (quan) {
	while (quan>0){
	por.removeChild(this['p'+quan]);
	ing.removeChild(this['i'+quan]);
	nome.textContent=' ';
	principal.exists=false;
	quan--;
	}
	}


}

// objeto principal responsavel pelo conteudo que é mostrado na tela
// o texto a ser mostrado tem que estar nele
let principal=new texto();


//declaraçao dos objetos de texto, esses são os de conteúdo tem que ser passados para o principal para exibiçao
// por meio da funçao preencher

// texto 1 eucalipto
let eucalipto=new texto();
eucalipto.titulo='Eucalipto';
eucalipto.portugues1='Eucalipto (/ˌjuːkəˈlɪptəs/)[2] é um gênero de mais de setecentas espécies de árvores \
 floridas, arbustos ou mallees da família Myrtle, Myrtaceae. Junto com vários outros gêneros da tribo Eucalypteae,\
incluindo Corymbia, eles são comumente conhecidos como eucaliptos.';

eucalipto.ingles1='Eucalyptus (/ˌjuːkəˈlɪptəs/)[2] is a genus of over seven hundred species of\
 flowering trees, shrubs or mallees in the myrtle family, Myrtaceae.\
 Along with several other genera in the tribe Eucalypteae, including Corymbia, they are commonly known as eucalypts.';
 
 eucalipto.ingles2='Plants in the genus Eucalyptus have bark that is either smooth, fibrous, hard or stringy, leaves with oil\
  glands, and sepals and petals that are fused to form a "cap" or operculum over the stamens.\
  The fruit is a woody capsule commonly referred to as a "gumnut".';
  
 eucalipto.portugues2='As plantas do gênero Eucalyptus têm casca lisa, fibrosa, dura ou fibrosa, folhas com glândulas de óleo e\
   sépalas e pétalas que são fundidas para formar uma "tampa" ou opérculo sobre os estames.\
   A fruta é uma cápsula lenhosa comumente referida como "goma".';

 eucalipto.ingles3='Most species of Eucalyptus are native to Australia, and every state and territory has representative species.\
 About three-quarters of Australian forests are eucalypt forests. ';
 
 eucalipto.portugues3='A maioria das espécies de eucalipto são nativas da Austrália, e todos os estados e territórios possuem espécies representativas.\
 Cerca de três quartos das florestas australianas são florestas de eucalipto.';
 
 eucalipto.ingles4='Wildfire is a feature of the Australian landscape and many eucalypt species are adapted to fire, and resprout after fire or have seeds which\
  survive fire. ';
  
  eucalipto.portugues4='Os incêndios florestais são uma característica da paisagem australiana e muitas espécies de eucalipto são adaptadas\
  ao fogo e rebrotam após o fogo ou têm sementes que sobrevivem ao fogo.';
  
  eucalipto.ingles5='A few species are native to islands north of Australia and a smaller number are only found outside the continent.\
   Eucalypts have been grown in plantations in many other countries because they are fast growing and have valuable timber, or can\
    be used for pulpwood, for honey production or essential oils. In some\
   countries, however, they have been removed because they are highly flaming.';
   
   eucalipto.portugues5='Algumas espécies são nativas de ilhas ao norte da Austrália e um número menor é encontrado apenas fora do continente.\
    Os eucaliptos têm sido cultivados em plantações em muitos outros países porque são de rápido crescimento e possuem madeira valiosa,\
     ou podem ser usados para celulose, para produção de mel ou óleos essenciais. Em alguns países, no entanto, eles foram removidos porque\
     são altamente inflamáveis.';
     eucalipto.quan=5;
     
     eucalipto.preencher=function (quan) {
     	while (quan>0){
principal['portugues'+quan]=eucalipto['portugues'+quan];
principal['ingles'+quan]=eucalipto['ingles'+quan];
principal.titulo=eucalipto.titulo;
principal.quan=eucalipto.quan;
quan--
}
}


// texto 2 
let rosaceae=new texto();
rosaceae.titulo='Rosaceae';
rosaceae.portugues1='Rosaceae é uma família de plantas com flor da ordem Rosales, que inclui pelo menos 4 828 espécies repartidas por 91 géneros\
 A família inclui espécies com grande diversidade de hábito, desde herbáceas a arbustos e árvores, maioritariamente espécies decíduas.\
  A família tem distribuição cosmopolita, embora com maior diversidade no Hemisfério Norte.';

rosaceae.ingles1='Rosaceae is a family of flowering plants of the order Rosales, which includes at least 4,828 species spread over 91 genera.\
 The family includes species with a great diversity of habit, from herbaceous to shrubs and trees, mostly deciduous species.\
  The family has a cosmopolitan distribution, although with greater diversity in the Northern Hemisphere.';
 
 rosaceae.ingles2='It includes multiple species of economic interest, particularly in fruit production, namely apples, pears, quinces, apricots,\
 plums, cherries, peaches, raspberries, loquats, strawberries and almonds, and ornamental trees and shrubs, such as roses, filipendulas, fotinias,\
 piracantas, sorbeiras and hawthorns.';
  
 rosaceae.portugues2=' Inclui múltiplas espécies com interesse económico, particularmente na produção de frutas, nomeadamente a maçãs, peras, marmelos,\
  damascos, ameixas, cerejas, pêssegos, framboesas, nêsperas, morangos e amêndoas, e árvores e arbustos ornamentais, tais como as roseiras, filipêndulas,\
  fotínias, piracantas, sorbeiras e espinheiros.';

 rosaceae.ingles3='The family Rosaceae, whose name derives from the genus Rosa, is considered one of the most diversified in the clade of angiosperms,\
  comprising about 5000 species spread over 90-91 genera, including a great diversity of ornamental plants, such as roses (Rosa sp. ), and fruit\
   trees, such as apple trees (Malus sp.) and stone fruits. [citation needed]';
 
 rosaceae.portugues3='A família Rosaceae, cujo nome deriva do género tipo Rosa, é considerada uma das mais diversificadas no clado de angiospermas,\
  integrando cerca de 5000 espécies repartidas por 90-91 géneros, incluindo uma grande diversidade de plantas ornamentais, como as roseiras \
  (Rosa sp.), e frutíferas, como as macieiras (Malus sp.) e as frutas de caroço. [Carece de fontes]';
 
 rosaceae.ingles4='The family ranges from herbaceous species (such as Fragaria) to shrubs (such as Prunus) and arboreal (such as Sorbus).\
  Most species are deciduous, as they occur in regions with high seasonal climates. Most of the species are perennial, including among the\
   herbaceous forms, but also integrate some annual species.';
  
  rosaceae.portugues4='A família inclui desde espécies herbáceas (como Fragaria) a arbustivas (como Prunus) e arbóreas (como Sorbus).\
   A maioria das espécies é decídua, pois ocorrem em regiões de climas com elevada sazonalidade. A maior parte das espécies é perene, \
   inclusive entre as formas herbáceas, mas também integra algumas espécies anuais.';
  
     rosaceae.quan=4;
     
     rosaceae.preencher=function (quan) {
     	while (quan>0){
principal['portugues'+quan]=rosaceae['portugues'+quan];
principal['ingles'+quan]=rosaceae['ingles'+quan];
principal.titulo=rosaceae.titulo;
principal.quan=rosaceae.quan;
quan--
}
}

//texto 3

let rutaceae=new texto();
rutaceae.titulo='Rutaceae';
rutaceae.portugues1='As rutáceas (do latim: Rutaceae) são uma família de plantas angiospérmicas (plantas com flor - divisão Magnoliophyta), pertencente\
 à ordem Sapindales, com aproximadamente 150 gêneros e 2000 espécies.\
São de hábito arborícula, arbustivo, subarbustivo e erva; de folhas normalmente alterna espiralada ou oposta; inflorescência solitária e frutos com\
 mesocarpo homogêneo ou claramente heterogêneo.';

rutaceae.ingles1='The Rutaceae (Latin: Rutaceae) are a family of angiosperm plants (flowering plants - Magnoliophyta division), belonging to the Sapindales\
order, with approximately 150 genera and 2000 species.\
They are arboreal, shrubby, subshrub and grass in habit; leaves usually alternate spirally or oppositely; solitary inflorescence and fruits with\
homogeneous or clearly heterogeneous mesocarp.';
 
 rutaceae.ingles2='They are arboreal, shrubby, subshrub and grass, their thorns and thorns generally present bitter triterpenoid substances,\
 alkaloids and phenolic compounds, with pellucid glands containing aromatic oils.\
Sheets \
Of alternating and spiral or opposite phyllotaxis, it is rarely whorled, usually pinnate-composite or reduced and trifoliate or unifoliate.\
Sometimes palmate-compound, leaflets with pellucid glands, mainly near the margin. Its venation is peninervea, and stipules are absent.';
  
 rutaceae.portugues2=' São de hábito arborícula, arbustivo, subarbustivo e erva, seus espinhos e acúleos apresentam geralmente substâncias triterpenóides\
 amargas, alcalóides e compostos fenólicos, com glândulas pelúcidas contendo óleos aromáticos.\
Folhas\
De filotaxia alterna e espiralada ou oposta, raramente é verticilada, normalmente pinado-composta ou reduzidas e trifolialadas ou unifolialadas.\
Em algumas ocasiões, palmado-composta, folíolos com glândulas pelúcidas, principalmente perto da margem. Sua venação mostra-se peninérvea, e estípulas ausentes.';

 rutaceae.ingles3='Flowers \
Solitary inflorescence, reduced to a flower, terminal and axillary, radial, and may be unisexual or bisexual. Flowers arranged in 4 or 5 petals,\
 free to slightly connate at the base. Petals in the same quantity, sometimes completely connate. They have 8 to 10 stamens, they can be\
 numerous, usually the filaments are free, but they can be connate, glabrous or pubescent; 3 to 6 pollen grains mostly collapsed. It has 4, 5\
  or many carpels, usually with a single style or totally connate, there are cases of free ovaries. Superior ovary, axial placentation, stigma\
   diversity. They may have one ovary, or many per locule. It has a nectariferous disc inside the stamen.';
 
 rutaceae.portugues3='Flores \
Inflorescência solitária, reduzida a uma flor, terminal e axilar, são radiais, podendo ser unissexual ou bissexual. Flores dispostas em 4 ou 5 pétalas,\
 livres a levemente conatas na base. Pétalas em mesma quantidade, às vezes totalmente conatas. Apresentam de 8 a 10 estames, podem ser numerosos,\
  normalmente os filetes são livres, mas podem ser conatos, glabros ou pubescentes; 3 a 6 grãos de pólen colpados em sua maioria. Possui 4, 5 ou\
   muitos carpelos, geralmente com um único estilete ou totalmente conatos, há casos de ovário livres. Ovário súpero, de placentação axial,\
    diversidade de estigmas. Podem ter um ovário, ou muitos por lóculo. Dispõe de disco nectarífero dentro do estame.';
 
 rutaceae.ingles4='fruits \
Its fruits have a homogeneous or clearly heterogeneous mesocarp, with well-defined skin and leather, with or without compartments and pulp derived\
 from the ovary wall or from multicellular hairs filled with juice; the embryo is straight and curved; presence or absence of endosperm.';
  
  rutaceae.portugues4='Frutos \
Seus frutos apresentam mesocarpo homogêneo ou claramente heterogêneo, com casca e coriácea bem definidos, com ou sem compartimentos e polpa derivada\
da parede do ovário ou de pelos multicelulares preenchidos com suco; o embrião é reto e curvo; presença ou não de endosperma.';
  
     rutaceae.quan=4;
     
     rutaceae.preencher=function (quan) {
     	while (quan>0){
principal['portugues'+quan]=rutaceae['portugues'+quan];
principal['ingles'+quan]=rutaceae['ingles'+quan];
principal.titulo=rutaceae.titulo;
principal.quan=rutaceae.quan;
quan--
}
}


//funçoes e declaraçoes





principal.but1=document.createElement('button');
principal.but2=document.createElement('button');
principal.but3=document.createElement('button');

function menu1() {
	if (principal.exists) {
principal.remove(principal.quan);	
}
por.appendChild(principal.but1);
por.appendChild(principal.but2);
por.appendChild(principal.but3);
rodape.textContent=' ';

}

principal.voltar=document.createElement('button');
principal.voltar.style.display='block';
principal.voltar.style.fontSize='20px';
principal.voltar.textContent='voltar';
principal.voltar.onclick=function() {
	if (principal.exists) {
principal.remove(principal.quan);	
}
por.appendChild(principal.but1);
por.appendChild(principal.but2);
por.appendChild(principal.but3);
rodape.textContent=' ';
}


principal.but1.style.display='block';
principal.but1.style.fontSize='20px';
principal.but1.textContent=eucalipto.titulo;
principal.but1.onclick=function () {
principal.quan=eucalipto.quan;
if (principal.exists) {
	principal.remove(principal.quan);
}	
ing.appendChild(principal.voltar);
eucalipto.preencher(principal.quan);
principal.mostrar(principal.quan);
por.removeChild(principal.but1);
por.removeChild(principal.but2);
por.removeChild(principal.but3);
}

principal.but2.style.display='block';
principal.but2.style.fontSize='20px';
principal.but2.textContent=rosaceae.titulo;
principal.but2.onclick=function () {
	principal.quan=rosaceae.quan;
if (principal.exists) {
	principal.remove(principal.quan);
}	
ing.appendChild(principal.voltar);
rosaceae.preencher(principal.quan);
principal.mostrar(principal.quan);
por.removeChild(principal.but1);
por.removeChild(principal.but2);
por.removeChild(principal.but3);
}

principal.but3.style.display='block';
principal.but3.style.fontSize='20px';
principal.but3.textContent=rutaceae.titulo;
principal.but3.onclick=function () {
	principal.quan=rutaceae.quan;
if (principal.exists) {
	principal.remove(principal.quan);
}	
ing.appendChild(principal.voltar);
rutaceae.preencher(principal.quan);
principal.mostrar(principal.quan);
por.removeChild(principal.but1);
por.removeChild(principal.but2);
por.removeChild(principal.but3);
}

menu.onclick=function() {
	if (principal.exists) {
principal.remove(principal.quan);	
}
por.appendChild(principal.but1);
por.appendChild(principal.but2);
por.appendChild(principal.but3);
rodape.textContent=' ';
}



sobre.onclick=function () {
  if(principal.exists){
principal.remove(principal.quan);  
  }
  rodape.textContent='Este é o storyteller um pequeno projeto que visa ser uma plataforma de estudo casual e offline. \
  A plataforma ainda se encontra em estado inicial de desenvolvimento. \
 mas  de qualquer forma serve de um modelo e demonstração para futuras mudanças no projeto. \
												feito por:Anthony gabriel, Lucas silva e Marcos soares.';}