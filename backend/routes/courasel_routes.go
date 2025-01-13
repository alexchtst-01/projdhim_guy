package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func CarouselRoutes(router *gin.Engine) {

	router.GET("/carousels", controllers.GetCarousels)

	router.POST("/carousels", controllers.CreateCarousel)

	router.PUT("/carousels/:id", controllers.UpdateCarousel)

	router.DELETE("/carousels/:id", controllers.DeleteCarousel)
}
