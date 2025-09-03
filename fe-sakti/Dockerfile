# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build project
RUN npm run build

# Expose port Next.js
EXPOSE 3000

# Jalankan Next.js di production
CMD ["npm", "start"]
