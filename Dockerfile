# Imagem base para o ambiente Node.js
FROM node:19

# Define o diretório de trabalho como /app
WORKDIR /usr/app

# Copia os arquivos de configuração do backend para o diretório de trabalho /app/backend
COPY backend/package*.json ./backend/
WORKDIR /usr/app/backend
RUN npm install

# Copia todo o restante dos arquivos do backend para o diretório de trabalho /app/backend
COPY backend/ .

# Copia     os arquivos de configuração do frontend para o diretório de trabalho /app/frontend
WORKDIR /usr/app
COPY frontend/ts-market/package*.json ./frontend/ts-market/
WORKDIR /usr/app/frontend/ts-market
RUN npm install

# Copia todo o restante dos arquivos do frontend para o diretório de trabalho /app/frontend
COPY frontend/ts-market/ .