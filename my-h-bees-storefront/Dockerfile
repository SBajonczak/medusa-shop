# Use the official Node.js image as the base image 
FROM node:18-alpine 
# Set the working directory 
WORKDIR /app 
# Copy the package.json and package-lock.json files 
COPY package.json ./ 
# Install dependencies RUN npm install 
# Copy the rest of the application code 
COPY . . 
# Build the Next.js application 
RUN npm i 
# Build the Next.js application 
# RUn npm run build
# Expose the port the app runs on 
EXPOSE 8000 
# Start the application 
CMD ["npm","run", "dev"] 