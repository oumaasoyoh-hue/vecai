package auth
//user details and information
type Role string

const (
    RoleOwner            Role = "owner"
    RoleArchitect        Role = "architect"
    RoleQuantitySurveyor Role = "quantity_surveyor"
    RoleEngineer         Role = "engineer"
    RoleContractor       Role = "contractor"
    RoleSupplier         Role = "supplier"
)
type User struct {
	Fullname 		string
	ID	   			string
	PasswordHash	string
	Email 			string
	Role		   	Role
 	IsVerified     	bool
}
// request and response for user registration, login, and verification
type RegisterRequest struct {
	Fullname 		string `json:"fullname"`
 	Password 		string `json:"password"`
	Email 			string `json:"email"`
	Role    		Role	`json:"role"`
}
type LoginRequest struct {
 	Email 			string `json:"email"`
	Password 		string `json:"password"`
}
type VerifyRequest struct {
	Token 			string `json:"token"`
	Email 			string `json:"email"`
}
type LoginResponse struct {
	Token 			string `json:"token"`
	Email 			string `json:"email"`
	Role            Role	`json:"role"`
}
type VerifyResponse struct {
	Token 			string `json:"token"`
	Email 			string `json:"email"`
	Role            Role	 `json:"role"`
}
type RegisterResponse struct {
	Token 			string `json:"token"`
	Email 			string `json:"email"`
	Role            Role `json:"role"`
}type ErrorResponse struct {
	Message 		string `json:"message"`
}
type JWTClaims struct {
	ID				string `json:"id"`
 	Role            Role `json:"role"`
}
type UserResponse struct {
	ID			string 	`json:"id"`
	Email 		string 	`json:"email"`
	Fullname 	string 	`jsom:"email"`
	isverified 	bool 	`joson:"user"`
}
type EnhancedAuthResponse struct {
	Token 	string			`json:"token"`
	User 	UserResponse 	`json:"user"`
}
type Service struct {
	repo UserRepository
}