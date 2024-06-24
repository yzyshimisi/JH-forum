import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_HOST as string,
    timeout: 30000,
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 鉴权Header
        const token = localStorage.getItem('PAOPAO_TOKEN');
        if (token) {
            if (!config.headers) {
                config.headers = {} as AxiosRequestHeaders;
            }
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const { data = {}, code = 0 } = response?.data || {};
        if (+code === 0) {
            return data || {};
        } else {
            console.error('Response error:', response?.data || {});
            return Promise.reject(response?.data || {});
        }
    },
    (error) => {
        const { response } = error || {};
        console.error('Response error:', response);

        // 重定向
        if (response?.status === 401) {
            localStorage.removeItem('PAOPAO_TOKEN');

            if (response?.data?.code !== 10005) {
                window.$message.warning(response?.data?.msg || '鉴权失败');
            } else {
                // 打开登录弹窗
                window.$store.commit('triggerAuth', true);
            }
        } else {
            window.$message.error(response?.data?.msg || '请求失败');
        }
        return Promise.reject(response?.data || {});
    }
);

export default service;

export function request<T, R>(config: AxiosRequestConfig<T>): Promise<R> {
    return service(config) as unknown as Promise<R>;
}
