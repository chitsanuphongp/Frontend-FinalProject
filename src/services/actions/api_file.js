import { server, api_file } from '../constants';
import httpClient from '../httpClient';

export const uploadFile = async (values) => {
    return await httpClient.post(server.FILE_URL+api_file.UPLOAD_FILE,values);
};

export const uploadImage = async (values) => {
    return await httpClient.post(server.FILE_URL+api_file.UPLOAD_IMAGE,values);
};