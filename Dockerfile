# Use the official Node.js image
FROM node:22

# Set the working directory
WORKDIR /application

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose Vite preview port
EXPOSE 4173

# Start the app using Vite preview
CMD ["sh", "-c", "npm run preview -- --port 4173 --host"]
