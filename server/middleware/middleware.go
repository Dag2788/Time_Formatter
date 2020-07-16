package middleware

import (
	"encoding/json"
	"net/http"
	"time"

)

// create connection with mongo db
func init() {

}

// GetAllTask get all the task route
func GetAllTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := time.Now()
	json.NewEncoder(w).Encode(payload)
}
