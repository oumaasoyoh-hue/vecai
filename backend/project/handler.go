package project

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	service *Service
}

func NewHandler(service *Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) RegisterRoutes(rg *gin.RouterGroup) {
	projects := rg.Group("/projects")
	{
		projects.POST("", h.CreateProject)
		projects.GET("/:id", h.GetProjectByID)
		projects.GET("/owner/:owner_id", h.ListProjectsByOwner)

		projects.POST("/:id/blueprints", h.AddBlueprint)
		projects.GET("/:id/blueprints", h.GetBlueprintsByProject)

		projects.POST("/:id/specs", h.AddSpec)
		projects.GET("/:id/specs", h.GetSpecsByProject)
	}
}

// Request payloads
type CreateProjectRequest struct {
	OwnerID     string `json:"owner_id" binding:"required"`
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	Location    string `json:"location"`
}

type AddBlueprintRequest struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description"`
	FilePath    string `json:"file_path" binding:"required"`
	Version     int    `json:"version"`
}

type AddSpecRequest struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description"`
	SectionCode string `json:"section_code" binding:"required"`
}

// Handlers
func (h *Handler) CreateProject(c *gin.Context) {
	var req CreateProjectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	project, err := h.service.CreateProject(c.Request.Context(), req.OwnerID, req.Name, req.Description, req.Location)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, project)
}

func (h *Handler) GetProjectByID(c *gin.Context) {
	id := c.Param("id")

	project, err := h.service.GetProjectByID(c.Request.Context(), id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, project)
}

func (h *Handler) ListProjectsByOwner(c *gin.Context) {
	ownerID := c.Param("owner_id")

	projects, err := h.service.ListProjectsByOwner(c.Request.Context(), ownerID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, projects)
}

func (h *Handler) AddBlueprint(c *gin.Context) {
	projectID := c.Param("id")

	var req AddBlueprintRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	blueprint, err := h.service.AddBlueprint(c.Request.Context(), projectID, req.Title, req.Description, req.FilePath, req.Version)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, blueprint)
}

func (h *Handler) GetBlueprintsByProject(c *gin.Context) {
	projectID := c.Param("id")

	blueprints, err := h.service.GetBlueprintsByProject(c.Request.Context(), projectID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, blueprints)
}

func (h *Handler) AddSpec(c *gin.Context) {
	projectID := c.Param("id")

	var req AddSpecRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	spec, err := h.service.AddSpec(c.Request.Context(), projectID, req.Title, req.Description, req.SectionCode)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, spec)
}

func (h *Handler) GetSpecsByProject(c *gin.Context) {
	projectID := c.Param("id")

	specs, err := h.service.GetSpecsByProject(c.Request.Context(), projectID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, specs)
}