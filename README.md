# Teste técnico da Play For A Cause - Aplicação de Chat

Este é o repositório da aplicação de chat desenvolvida como parte do teste técnico da empresa Play For A Cause. A aplicação é um sistema de chat que fornece autenticação simples, armazenamento de mensagens e comunicação em tempo real entre usuários em um chat global.

## Funcionalidades
- **Autenticação de Usuário:** Cadastro e login com email, nome de usuário e senha.
- **Armazenamento de Mensagens:** As mensagens enviadas pelos usuários são salvas e recuperadas.
- **Comunicação em Tempo Real:** Os usuários recebem mensagens em tempo real dos demais usuários.
- **Feedback Visual**: O usuário tem um feedback visual de quem está digitando e de quem enviou a mensagem.
- **Exibição de Usuários Conectados**: Barra lateral que mostra os usuários que estão visualizando o chat.

## Tecnologias Utilizadas

### Backend
- **Linguagem:** NodeJS + Typescript
- **Banco de Dados:** Postgres para armazenamento de contas, Redis para armazenamento de mensagens
- **Framework:** NestJS
- **ORM:** Prisma
- **Realtime Chat:** SocketIO

### Frontend
- **Framework:** NextJS (App Routing)
- **User Interface (UI):** TailwindCSS
- **Gestão de estados:** React Context API para perfil de usuário, Formik para formulários
- **Consumo de api:** Axios
- **Validação de formulário:** Zod

### Deploy
- **Vercel** (Front-end) e **Heroku** (Back-end)

## Desafios
- **Implementação do Redis:** ...
- **Integração Backend-Frontend:** ...
- **Deploy do back-end da aplicação**: ...

## Observações
- Troquei a biblioteca `React Hook Form` pelo `Formik` por já ter tido algum contato antes com o Formik.

## Instruções de Uso em ambiente de desenvolvimento
- Clonar este repositório
- Configurar variáveis de ambiente
- Instalar dependências usando `npm install`
- Trocar rotas para `http://localhost:PORT` no front-end e back-end
- Executar o backend e frontend separadamente usando `npm run dev`

## Contribuição
Contribuições são bem-vindas! Abra um PR para sugerir melhorias.

## Autor
Gabryel Valvano
valvanogabryel@gmail.com
portfólio: portfolio-gabryel.vercel.app

---

## Plano de Continuidade e Melhorias

### Entrega Parcial
- Implementar autenticação básica e armazenamento de mensagens
- Configurar comunicação em tempo real entre usuários

### Futuras Melhorias
- Adição de chats específicos de um usuário para outro
- Sistema de amizade
- Melhoria no sistema de login, com verificação em duas etapas e recuperação de conta após esquecimento de senha   
- Procurar estratégias de otimização de integração entre backend e frontend
- Refatorar código para melhorar a escalabilidade e performance
- Adicionar testes automatizados
