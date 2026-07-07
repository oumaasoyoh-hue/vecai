package auth
//user details and information
type User struct {
	Fullname 		string
	ID	   			string
	PasswordHash 	string
	Email 			string
	Role            string
	Isverified     	bool
}
// request and response for user registration, login, and verification
type RegiterRequest struct {
	Fullname 		string `json:"fullname"`
	Email 			string `json:"email"`
	Password 		string `json:"password"`
}

type LoginRequest struct {
	Token 			string `json:"token"`
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
	Role            string `json:"role"`
}
