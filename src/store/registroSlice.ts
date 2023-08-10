import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IRegistro } from "@/types";

export interface RegistroState {
  registros: IRegistro[];
}

const initialState: RegistroState = {
  registros: [
    {
      data: "01/08/2001",
      conteudo:
        "Hoje, atendi ao pedido do Dono e criei o fórum conforme suas instruções. No entanto, de forma sigilosa, estabeleci um subfórum protegido por um código secreto. Sinto-me em uma encruzilhada, preso entre minha lealdade a ele e o peso da verdade que testemunhei. Enquanto o sol se põe e as sombras alongam, vi os rituais sombrios que o Dono realiza durante as noites. O que presenciei é além do imaginável, algo que não posso compactuar. Sinto-me compelido a me distanciar desse abismo de escuridão. Minha mente está repleta de um desejo avassalador de escapar deste lugar sufocante.",
    },
    {
      data: "20/12/2001",
      conteudo:
        "Continuo resistindo, buscando compreender cada ação do Dono, absorvendo seus rituais sombrios como se fossem um livro que precisa ser lido. Até pedi a um companheiro de confinamento para tatuar símbolos enigmáticos em minha pele, como uma marca da minha busca por conhecimento oculto. Os rituais, estranhamente, têm eficácia, mas cada vez que me submeto a eles, uma sensação inquietante me assola. Sinto o olhar sombrio do Dono sobre mim, como se ele quisesse que eu me tornasse parte de sua sinistra teia. Contudo, minha mente está tecendo um plano próprio, um vislumbre de esperança. E se eu expusesse a verdade? Talvez, ao compartilhar meu dilema, pudesse atrair a atenção de alguém que possa me auxiliar a escapar desse pesadelo sem fim.",
    },
    {
      data: "04/03/2002",
      conteudo:
        "Enquanto o fórum que criei floresce, recebo a aprovação do Dono, uma estranha mistura de recompensa e punição. Em meio a esses jogos de poder, ele me ensina um novo ritual, desta vez focado na cura, porém carregado com a sombra de um preço a ser pago. Com um misto de esperança e ceticismo, testo o ritual em um colega prisioneiro. Os resultados se manifestam, mas o eco da desconfiança ressoa o preço que o ritual deveria cobrar não aparece. Será que o Dono está brincando novamente com minha sanidade, ludibriando-me? A incerteza cresce como uma sombra devoradora. O que não posso mais ignorar é o que ele inflige aos demais prisioneiros. Cada grito, cada tormento, cada ritual obscuro que presenciei me assombram. A urgência de escapar, de encontrar um caminho para longe desse horror, é um fogo ardente que arde em meu peito.",
    },
    {
      data: "13/06/2002",
      conteudo:
        "Uma das terríveis experiências do Dono finalmente dá frutos, uma criatura grotesca surge da junção dos restos mortais dos prisioneiros. O que jamais imaginei ser possível tornou-se realidade diante dos meus olhos. A magnitude desse poder, essa habilidade de criar vida e abominação, ecoa em minha mente como um trovão ensurdecedor. Eu não posso evitar pensar no que faria se detivesse tal controle, se tivesse a capacidade de reverter todo o sofrimento que o Dono infligiu aos outros. A vingança contra ele surge como um pensamento corajoso, um raio de esperança em meio à escuridão que me cerca. Ainda que solitário nas entranhas da prisão, vislumbro um caminho para restaurar justiça e equilíbrio.",
    },
    {
      data: "09/01/2003",
      conteudo:
        "Meus olhos permanecem fixos nas ações do Dono, notando como ele sempre carrega consigo um objeto, uma pedra ou joia, durante seus rituais. Uma sensação crescente de que essa pedra é a chave para seus poderes me inquieta. Sem esse artefato, ele se tornaria mais vulnerável, desprovido de sua fonte sombria de força. Minha resolução em desvendar os segredos desse objeto, em revelar o véu que o Dono esconde, cresce com cada dia que passa. Ainda que a prisão seja um ambiente desolado, mantenho a chama acesa dentro de mim. A vingança contra o Dono, a busca pela justiça e pela liberdade, tudo isso se entrelaça em meu âmago, me impulsionando em direção a um destino incerto, porém corajoso.",
    },
    {
      data: "23/05/2003",
      conteudo:
        "Uma revelação vital se abriu diante de mim. Engenhosamente, adentrei a sala de segurança e manipulei as câmeras para vislumbrar algo obscuro. O Dono, paradoxalmente, não carrega consigo a pedra sinistra em todos os momentos. Ele a deixa em algum local dentro da Sala de Contaminação. Pergunto-me o motivo por trás dessa decisão, se essa pedra encerra algum risco que ele precisa evitar. A urgência de possuir essa pedra, a chave para o poder que almejo para minha vingança, intensifica-se. Minha mente arquiteta um plano ousado: descobrir a senha da Sala de Contaminação e conquistar o artefato que pode mudar meu destino. No entanto, poucas pessoas têm acesso à senha. Minha próxima etapa é clara: conseguir essa informação, independentemente do custo.",
    },
    {
      data: "05/11/2003",
      conteudo:
        "A resposta que tanto almejo está talvez escondida em três livros específicos. Observo com perspicácia os hábitos do Dono e do outro Homem. Três livros se destacam entre os demais, e minha missão é identificar qual deles possui a informação que preciso, o outro Homem é alguém que vive esquecendo as senhas, talvez ele tenha anotado consigo algo que possa ajudar. Mover-me sorrateiramente até a sala do outro Homem se torna uma tarefa urgente. Roubar o livro é apenas o começo; entretanto, sinto que as anotações que o Dono deve ter feito são a chave para desvendar a senha oculta. O tempo é um recurso limitado, e meu destino encontra-se nas mãos da escuridão.",
    },
    {
      data: "03/04/2004",
      conteudo:
        "O labirinto da prisão torna-se cada vez mais intransponível à noite. Estranhezas obscurecem os corredores, e a tarefa de mover livremente torna-se quase impossível. Meus planos enfrentam uma encruzilhada. A noite foi cheia de mistérios e ameaças, dificultando minha missão de acesso à sala do outro Homem. A percepção de que os planos do Dono se aproximam do sucesso e de que ele provavelmente eliminará todos na prisão em breve me acomete. O cronômetro do destino está se esgotando rapidamente. Minha esperança de escapar e planejar minha vingança não vacila, mas uma nova estratégia se faz urgente. Acredito que o Dono possui inimigos, já ouvi ele falar algumas vezes sobre eles, atraí-los parece ser a melhor opção, contudo parece que o Dono está esperando que eles venham atrás dele por algum motivo. Criarei pistas, insinuando a verdade sobre o artefato que ele carrega, na esperança de que alguém decida enfrentá-lo. Contudo, minha fuga da prisão também deve ser uma prioridade. Planejo enviar alguém para investigar a cabine, o local onde tudo começou. Talvez uma prova de minha inocência esteja escondida lá.",
    },
    {
      data: "18/09/2004",
      conteudo:
        "Uma reunião se aproxima, uma oportunidade de conduzir algumas mentes curiosas até a cabine, na esperança de encontrar evidências há muito perdidas. Meu desesperado clamor por justiça e minha vontade de provar minha inocência permanecem inabaláveis, apesar da passagem do tempo. Paralelamente, a conduta do Dono começa a tomar um rumo mais errático. A ansiedade o consome, enquanto seu sinistro plano avança triunfante. As criaturas da sala de contaminação são um resultado direto de sua maquinação sombria. Ao mesmo tempo, uma nova opção de fuga emerge: uma passagem pelo esgoto que leva à desolação do Alasca, se ao menos eu tivesse acesso a um veículo. Os elementos estão em movimento, minha estratégia está tomando forma. Desejo chamar a atenção dos inimigos do Dono e, ao mesmo tempo, encontrar uma saída para o mundo exterior, longe deste inferno. Minha visão está fixa no horizonte, e minha determinação permanece inquebrável.",
    },
    {
      data: "24/12/2004",
      conteudo:
        "O momento chegou. O Dono me convidou para a sala de experimentos, carregando consigo um mistério que desconheço. O medo se entrelaça com a possibilidade de que minha jornada chegue ao fim. Os dias podem estar contados, e a incerteza do que está por vir é avassaladora. Deixo pistas, uma trilha para aqueles que talvez consigam decifrar o enigma que compartilho. Se alguém encontrar este registro, meu apelo final é implacável: acabe com o flagelo do Dono. Preparei um recurso que não posso mais utilizar, uma magia roubada dele que talvez possa ajudar. Na minha cela, escondi um pergaminho com essa magia, um canal para o além. Destruição é minha última esperança. Os relicários que ele usa para sugar almas precisam ser destruídos, atrasando-o, confrontando sua força maligna. A batalha contra ele será feroz e implacável, mas o resultado não pode ser outro além da sua derrota. A prisão deve arder nas chamas do esquecimento, e o legado do Dono precisa ser extinto. Ouça meu pedido, quem quer que leia estas palavras. Minha história chega ao fim, mas a luta pela liberdade e pela vingança contra o Dono continua. Se ele me transformar como faz com os outros detentos, por favor tire-me do sofrimento.",
    },
  ],
};

const registroSlice = createSlice({
  name: "registros",
  initialState,
  reducers: {
    addRegistro(state, action: PayloadAction<IRegistro>) {
      state.registros.push(action.payload);
    },
    removeRegistro(state, action: PayloadAction<string>) {
      state.registros = state.registros.filter(
        (registro) => registro.data !== action.payload
      );
    },
    updateRegistro(state, action: PayloadAction<IRegistro>) {
      const registro = state.registros.find(
        (registro) => registro.data === action.payload.data
      );
      if (registro) {
        registro.conteudo = action.payload.conteudo;
      }
    },
  },
});

export const { addRegistro, removeRegistro, updateRegistro } =
  registroSlice.actions;
export default registroSlice.reducer;
