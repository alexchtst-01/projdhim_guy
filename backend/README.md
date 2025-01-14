# PUSRINET BACKEND
Applikasi ini diguanaka sebagai jempatan atau perantara antara frontend dengan database (MySQL).


## How To Make

melakukan inisiasi package dalam bahasa go (**folder directory structure**)

    go mod init backend

intslalasi GIN Package / Library Sebagai Backbone REST API server (HTTP)

    go get github.com/gin-gonic/gin

intslalasi sql (mysql database) driver [done]

    go get -u gorm.io/driver/mysql


installasi Object Relational Mapping untuk keperluan relational table dan juga  [done]

    go get -u gorm.io/gorm

install package untuk configurasi dotenv [done]

    go get -u github.com/joho/godotenv

## How To Use

clone repo

    git clone https://github.com/keepurspiritbruv/pusrinet

masuk ke direktory backend
    
    cd backend

tidy up dan install semua dependencies

    go mod tidy

**`pastikan di mysql terdapat database dengan nama yang sesuai pada .env`**

jalankan main.go

    go run main.go