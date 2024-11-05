import { AppState } from "./app.state";

export const apiUrSelector = (state: {app: AppState}) => state.app.config.apiUrl;

export const refreshTokenIntervalSelector = (state: {app: AppState}) =>  state.app.config.refreshTokenInterval