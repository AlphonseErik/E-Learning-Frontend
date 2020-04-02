import axios from 'axios';
import { settings } from "../configs/setting";

export const restConnector = axios.create({
    baseURL: settings.domain,
})