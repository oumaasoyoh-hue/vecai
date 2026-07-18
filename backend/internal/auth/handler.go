package auth

import (
	"encoding/json"
	"errors"
	"net/http"
)
type Handler struct {
	service *Service
}

func NewHandler(service *Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) Register(w http.ResponseWriter, r *http.Request) {
	var req RegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		h.respondwithError(w, http.StatusBadRequest, "All registration fields are required")
		return
	}
}