# Teste técnico da Play For A Cause - Aplicação de Chat

Este é o repositório da aplicação de chat desenvolvida como parte do teste técnico da empresa Play For A Cause. A aplicação é um sistema de chat que fornece autenticação simples, armazenamento de mensagens e comunicação em tempo real entre usuários em um chat global.

### Deploy
- **Vercel** (Front-end) e **Heroku** (Back-end)
- **Deploy 🚀** [Abra em uma nova guia]:  https://challenge-pfac-frontend.vercel.app/

## Autor
- Gabryel Valvano
- valvanogabryel@gmail.com
- **Portfólio ✨** [Abra em uma nova guia]: https://portfolio-gabryel.vercel.app

## Funcionalidades
- **Autenticação de Usuário:** Cadastro e login com email, nome de usuário e senha.
- **Armazenamento de Mensagens:** As mensagens enviadas pelos usuários são salvas e recuperadas.
- **Comunicação em Tempo Real:** Os usuários recebem mensagens em tempo real dos demais usuários.
- **Feedback Visual**: O usuário tem um feedback visual de quem está digitando e de quem enviou a mensagem.
- **Exibição de Usuários Conectados**: Barra lateral que mostra os usuários que estão visualizando o chat.
- **Responsividade**: A aplicação é totalmente responsiva.

## Tecnologias Utilizadas

### Backend
- **Linguagem:** NodeJS + Typescript
- **Banco de Dados:** Postgres para armazenamento de contas, Redis para armazenamento de mensagens
- **Framework:** NestJS
- **ORM:** Prisma
- **Realtime Chat:** SocketIO

### Frontend
- **Design**: Figma (design próprio)
- **Framework:** NextJS (App Routing) + Typescript
- **Estilização:** TailwindCSS
- **Gestão de estados:** React Context API para perfil de usuário, Formik para formulários
- **Consumo de api:** Axios
- **Validação de formulário:** Zod

## Desafios
- **Implementação do Redis:** Após fazer o chat funcionar com um array que armazenava as mensagens, fui tentar implementar o Redis. Foi uma das primeiras coisas que me "travou" no projeto, pois sequer já tinha ouvido falar sobre esse banco e não fazia ideia de como implementar ele. Li a documentação do Redis, do Nest, e enfim conheci o `ioredis`, que me ajudou a fazer com que o banco funcionasse.
- **Deploy do back-end da aplicação**: Fazer o servidor ir pro ar foi um teste real, visto que eu nunca tinha feito deploy de um site/aplicação full-stack antes. Primeiro, tentei usar a Vercel, mesmo ela sendo mais focada em front-end, só que as requisições usando o protocolo WebSocket não estavam funcionando; então, embora o cadastro e autenticação funcionassem, o chat estava estático. Depois de muitas horas batendo cabeça, mudei para o Heroku e deu certo!  
- **Aprendizado de novas tecnologias**: Durante o desenvolvimento desse projeto, encarei tecnologias novas, especialmente no backend, como o NestJS e o Redis. Aprendê-las num período tão curto foi desafiador. Passei um bom tempo em tutoriais, olhando documentação e tentando exemplos pra entender tudo o mais rápido possível. Embora tenha sido cansativo, foi recompensador. Definitivamente espero aplicar o que eu aprendi em futuros projetos!

## Observações
- Troquei a biblioteca `React Hook Form` pelo `Formik` por já ter tido algum contato antes com o Formik.

## Instruções de Uso em ambiente de desenvolvimento
- Clonar este repositório
- Configurar variáveis de ambiente
- Instalar dependências usando `npm install`
- Trocar rotas para `http://localhost:[PORT]` no front-end e no back-end
- Executar o backend e frontend separadamente usando `npm run dev` para o front e `npm run start:dev` para o back 

## Contribuição
Contribuições são bem-vindas! Abra um PR para sugerir melhorias.


---

## Futuras Melhorias
- Adição de chats específicos de um usuário para outro
- Sistema de amizade
- Melhoria no sistema de login, com verificação em duas etapas e recuperação de conta após esquecimento de senha   
- Procurar estratégias de otimização de integração entre backend e frontend
- Refatorar código para melhorar a escalabilidade e performance
- Adicionar testes automatizados
