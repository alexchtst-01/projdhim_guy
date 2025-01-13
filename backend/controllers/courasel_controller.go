package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCarousels(c *gin.Context) {
	var carousels []models.Carousel
	if err := config.DB.Find(&carousels).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, carousels)
}

func CreateCarousel(c *gin.Context) {
	var carousel models.Carousel
	if err := c.ShouldBindJSON(&carousel); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&carousel).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, carousel)
}

func UpdateCarousel(c *gin.Context) {
	id := c.Param("id")
	var carousel models.Carousel
	if err := config.DB.First(&carousel, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Carousel not found"})
		return
	}
	if err := c.ShouldBindJSON(&carousel); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Save(&carousel).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, carousel)
}

func DeleteCarousel(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.Carousel{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Carousel deleted successfully"})
}
