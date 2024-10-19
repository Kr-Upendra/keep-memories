import {
  ApiResponse,
  UpdatePasswordFromData,
  UpdateProfileFormData,
} from "../utils";
import { apiFetch } from "./api";

export const getProfile = async () => {
  return apiFetch(
    "/users/profile",
    {
      method: "GET",
    },
    true
  );
};

export const updatePassword = async (
  formdata: UpdatePasswordFromData
): Promise<ApiResponse> => {
  return apiFetch(
    "/users/update-password",
    {
      method: "POST",
      body: JSON.stringify(formdata),
    },
    true
  );
};

export const updateProfile = async (
  formdata: UpdateProfileFormData
): Promise<ApiResponse> => {
  console.log("api: ", formdata);
  return apiFetch(
    "/users/update-profile",
    {
      method: "POST",
      body: JSON.stringify(formdata),
    },
    true
  );
};