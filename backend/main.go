package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	config.ConnectDatabase()

	router := gin.Default()

	routes.CarouselRoutes(router)

	router.Run(":8080")
}
