package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func CarouselRoutes(router *gin.Engine) {
	carouselGroup := router.Group("/carousels")
	{
		carouselGroup.GET("/", controllers.GetCarousels)
		carouselGroup.GET("/:id", controllers.GetCarouselByID)
		carouselGroup.POST("/", controllers.CreateCarousel)
		carouselGroup.PUT("/:id", controllers.UpdateCarousel)
		carouselGroup.DELETE("/:id", controllers.DeleteCarousel)
	}
}
