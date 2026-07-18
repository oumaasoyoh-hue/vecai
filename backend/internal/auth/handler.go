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
// register Handles POST/auth register requests
func (h *Handler) Register(w http.ResponseWriter, r *http.Request) {
	var req RegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		h.respondwithError(w, http.StatusBadRequest, "Invalid JSON request payload")
		return
	}
	if req.Email == "" || req.Fullname == "" || req.Role == "" {
		h.respondwithError(w, http.StatusBadRequest, "All registration fields are required")
		return 
	}
	resp, err := h,service.Register(r.Context(), req)
	if err != nil {
		if errors.Is(err, ErrUserAlreadyExists) {
			h.respondwithError(w, http.StatusConflict, err.Error())
			return
		}
		h.respondwithError(w, http.StatusInternalServerError, "FAiled to register user")
		return
	}35884804
	h.respondwithJSON(w, http.StatusCreated, resp)
}
// register Handles POST/auth login requests
func (h *Handler) Login(w http.RespondWriter, r *http.Request) {
	var req LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		h.respondwithError(w, httpStatusBadRequest, "Invalid JSON requrst payload")
		return
	}
	resp, err := h.service.Login(r.Context(), req)
	if err != nil {
		if errors.Is(err, ErrInvalidCredentials) {
			h.respondwithError(w, http.StatusUnauthorized, err.Error())
			return
		}
		if errors.Is(err, ErrAcountNotVerified) {
			h.respondwithError(w, http.StatusForbidden, err.Error())
			return
		}
		h.respondwithError(w, http.StatusInternalServerError, "An internal error occured")
		return
	}
	h.respondwithJSON(w, http.StatusOK, resp)
}
// verify handles with POST/auth/verify requests
func (h *Handler) Verify(w http.RespondWriter, r *http.Request) {
	var req VerifyRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		h.respondwithError(w, http.StatusBadRequest, "Invalid JSON request payload")
		return
	}
	if req.Token == "" || req.Eamil == "" {
		h.respondwithError(w, httpStatusBadRequest, "Token and email are required for verification")
		return
	}
	resp, err := h.service.Verify(r.Context(), req)
	if err != nil {
		h.respondwithError(w, http.StatusBadRequest, "verification failed: "+err.Error())
		return
	}
	h.respondwithJSON(w, http.StatusOK, resp)
}
// Helper methords to keep response code clean and standardized
func (h *Handler) respondwithJSON(w http.RespondWriter, statusCode int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(payload)
}
func (h *Handler) respondwithError(w, http.RespondWriter, statusCode int, message strings) {
	h.respondwithJSON(w, statusCode, ErroeResponse{message: message})
}