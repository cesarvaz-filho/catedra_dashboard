/*
Entidades do BD:
    Treinamento - Alunos(treinandos)
Cardinalidade do relacionamento:
    N * N
Atributos:
    Treinamento
        id, tema, grupo, listaParticipantes, status, cargaHoraria, dataInicio, dataFim, aderencia
    Alunos
        id, nome, matricula, login, cpf, servico, status, entrada, supervisor, coordenador, dataConclusao, tutor

Funções do BD:
    Criar, Alterar, Ler e Excluir Treinamento
    Criar, Alterar, Ler e Excluir Alunos

Rotas:
    Nome:/training - Tipo:GET - O que faz: retorna todos os treinamentos
    Nome:/create_training - Tipo:POST - O que faz: cria um treinamento
    Nome:/change_training/:id - Tipo:PUT - O que faz: altera um treinamento
    Nome:/delete_training/:id - Tipo:DELETE - O que faz: deleta um treinamento
    Nome:/students - Tipo:GET - O que faz: retorna todos os alunos
    Nome:/create_student - Tipo:POST - O que faz: cria um aluno
    Nome:/change_student/:id - Tipo:PUT - O que faz: altera um student
    Nome:/delete_student:/id - Tipo:DELETE - O que faz: deleta um student
*/

let treinamento = [
    {
        id: 1, //tem que ser UUID
        tema: 'Checklist Now',
        grupo: [
            {
                nome: 'cabo',
                celula: ['cabo n1', 'net uno', 'bko net', 'backlog'], //pode ser apenas um grupo ou vários
            },
            {
                nome: 'dth',
                celula: ['n1 dth', 'backlog dth'], //pode ser apenas um grupo ou vários
            }
        ], 
        listaParticipantes: [
            {
                id: 1, //tem que ser UUID
                nome: 'Fulano',
                matricula: '123987',
                login: 'T123456',
                cpf: '123456789',
                servico: 'cabo n1',
                status: 'presente', //pode ser programado, presente, afastado, ausente, cancelado assunto, desligado, migrado
                entrada: '08:00:00',
                supervisor: 'Jackson da Silva',
                coordenador: 'Margarete Moura',
                dataConclusao: '23/03/2021',
                tutor: 'César Vaz',
            },
        ],
        status: 'concluído', //pode ser concluído, pendente, cancelado
        cargaHoraria: 90, //em minutos
        dataInicio: '01/03/2021',
        dataFim: '30/03/2021',
        aderencia: 85,
    },
];