# FROM node:16

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to leverage Docker's cache
# COPY . .

# # Install all dependencies including devDependencies
# RUN npm install 

# # Copy the rest of the app's files
# COPY . .

# # Expose port 3000
# EXPOSE 3000

# # Use shell to run tsc-watch and start the server
# # CMD ["sh", "-c","npx tsc-watch", "--onSuccess", "\"node dist/server.js\""]
# CMD ["npm" , "run" , "start"]

# Use Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's cache
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Install tsc-watch globally
RUN npm install -g tsc-watch

# Set up a volume to sync the local code with the container
VOLUME ["/app"]

# Start the server with tsc-watch to recompile and restart on changes
CMD ["tsc-watch", "--onSuccess", "node dist/server.js"]
