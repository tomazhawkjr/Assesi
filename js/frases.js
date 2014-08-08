function frase(frase, autor){

	this.frase = frase;
	this.autor = autor;
}


var frases = [];
frases.push(new frase('A adversidade é um trampolim para a maturidade.', 'C. C. Colton'));
frases.push(new frase('Muitas vezes encontramos o nosso destino por caminhos que enveredamos para o evitar.', 'Jean de La Fontaine'));
frases.push(new frase('Mesmo as noites totalmente sem estrelas podem anunciar a aurora de uma grande realização.', 'Martin Luther King'));
frases.push(new frase('Eu não me envergonho de corrigir meus erros e mudar minhas opiniões, porque não me envergonho de raciocinar e aprender.', 'Alexandre Herculano'));
frases.push(new frase('A gentileza faz com que o homem pareça exteriormente, como deveria ser exteriormente.', 'Jean de La Bruyère'));
frases.push(new frase('Existem apenas duas maneiras de ver a vida.  Uma é pensar que não existem milagres e a outra é que tudo é um milagre.', 'Albert Einstein'));
frases.push(new frase('A perfeição da própria conduta consiste em manter cada um a sua dignidade sem prejudicar a liberdade alheia.', 'Voltaire'));
frases.push(new frase('Seu futuro depende de muitas coisas, mas principalmente de você.', 'Frank Tyger'));
frases.push(new frase('A bondade é único investimento que nunca falha.', 'Henry David Thoreau'));
frases.push(new frase('Só é digno da vida aquele que vai, todos os dias, à luta por ela.', 'Goethe'));
frases.push(new frase('A curiosidade, instinto de complexidade infinita, leva por um lado a escutar atrás das portas e por outro a descobrir a América.', 'Eça de Queiroz'));
frases.push(new frase('Um homem de bom senso saberá criar melhor oportunidades do que aquelas que se lhe deparam.', 'Francis Bacon'));
frases.push(new frase('A esperança não é um sonho, mas uma maneira de traduzir os sonhos em realidade.', 'Suenens'));
frases.push(new frase('Um herói é um indivíduo comum que encontra a força para perseverar e resistir apesar dos obstáculos devastadores.', 'Christopher Reeve'));
frases.push(new frase('Você não consegue escapar da responsabilidade de amanhã esquivando-se dela hoje.', 'Abraham Lincoln'));
frases.push(new frase('Experiência não é o que acontece com você, mas o que você faz com o que lhe aconteceu.', 'Aldous Huxley'));
frases.push(new frase('O homem superior é persistente no caminho verdadeiro e não só persistente.', 'Confúcio'));
frases.push(new frase('Podemos nos defender de um ataque, mas somos indefesos a um elogio.', 'Sigmund Freud'));
frases.push(new frase('Lembra-te de que falando ou silenciando, sempre é possível fazer algum bem.', 'Chico Xavier'));
frases.push(new frase('Feliz aquele que transfere o que sabe e aprende o que ensina.', 'Cora Coralina'));
frases.push(new frase('Aqueles que fazem o bem são os únicos que podem aspirar na vida a felicidade.', 'Aristóteles'));
frases.push(new frase('A diferença entre o vencedor e o perdedor não é a força nem o conhecimento, mas, sim, a vontade de vencer.', 'Vincent T. Lombard'));
frases.push(new frase('Na prosperidade, nossos amigos nos conhecem; na adversidade, nós conhecemos nossos amigos.', 'Churton Collins'));
frases.push(new frase('A vida não consiste em ter boas cartas na mão e sim em jogar bem as que se tem.', 'Josh Billings'));

//24 frases

var month = 7;

var date = new Date();

var today = date.getDate();
var monthToday = date.getMonth()+1;

var sort = Math.round(today/7)*Math.abs(month-monthToday);

var fraseEscolhida;

if(sort>=0 && sort <=23){
	fraseEscolhida = frases[sort];
} else {
	fraseEscolhida = frases[Math.round(Math.random()*23)];
}


$(document).ready(function(){

	var content = "<h4>Frase da semana</h4><p><b>"+fraseEscolhida.frase+"</b></p><p><i>"+fraseEscolhida.autor+"</i></p>";
	$('#fraseSemana').html(content);

})

