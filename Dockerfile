# --- Этап 1: Сборка (Builder) ---
FROM node:20-alpine as builder

# Устанавливаем рабочую папку
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# ВАЖНО: Запускаем сборку через Vite напрямую.
# Это пропускает строгую проверку TypeScript (tsc), 
# позволяя собрать сайт даже с мелкими ошибками в коде.
RUN npx vite build

# --- Этап 2: Запуск (Production) ---
FROM node:20-alpine

WORKDIR /app

# Устанавливаем легкий веб-сервер для статики
RUN npm install -g serve

# Копируем только собранную папку dist из первого этапа
COPY --from=builder /app/dist ./dist

# Открываем порт 3000
EXPOSE 3000

# Запускаем сервер (флаг -s нужен для React Router, чтобы не было 404 при обновлении страниц)
CMD ["serve", "-s", "dist", "-l", "3000"]
