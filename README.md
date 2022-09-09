Credify market for DTGK
==================================

Getting Started
---------------

```sh
# clone it
git clone git@github.com/Dienthoaigiakho-vn/dtgk-skeleton.git
cd dtgk-skeleton

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8000 npm run dev

# Start production server:
PORT=8000 npm start
```
Docker Support
------
```sh
cd 

# Build your docker
docker build -t dtgk-skeleton .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8000:8000 dtgk-skeleton
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT