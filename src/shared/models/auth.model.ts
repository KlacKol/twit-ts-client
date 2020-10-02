export interface RegistrationModel {
    name: string;
    email: string;
    password: string;
}

export interface LoginModel {
    email: string;
    password: string;
}

export interface AuthModelResponse {
    _id: string;
    name: string;
    email: string;
    password: string;
}