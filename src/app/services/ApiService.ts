"use client"
import axios, { AxiosResponse } from "axios";
import JwtService from "./JwtService";

const baseUrl = "http://localhost:5005/api/"

class ApiService {

    public static setHeader() {
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer  ${JwtService.getToken()}`;
        axios.defaults.headers.common["Accept"] = "application/json"
    }

    public static upload(resource: string, params: any): Promise<AxiosResponse> {
        return axios.post(`${baseUrl}${resource}`, params)
    }


    public static get(resource: string,): Promise<AxiosResponse> {
        return axios.get(`${baseUrl}${resource}`);
    }


    public static post(resource: string, params: any): Promise<AxiosResponse> {
        ApiService.setHeader();
        return axios.post(`${resource}`, params);
    }


    public static put(resource: string, params: any): Promise<AxiosResponse> {
        ApiService.setHeader();
        return axios.put(`${resource}`, params);
    }


    public static delete(resource: string): Promise<AxiosResponse> {
        ApiService.setHeader();
        return axios.delete(resource);
    }

}

export default ApiService