# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o arquivo package.json e instalar dependências
COPY package.json ./
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta 5000
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "start"]
