import * as fs from 'fs';
import axios, { AxiosInstance, Method } from 'axios';
export const prodApiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export default class VodApi {
    constructor(apiKey, apiEndpoint = prodApiEndpoint) {
        this.client = axios.create({
            baseURL: apiEndpoint,
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });
        this.client.interceptors.response.use(res => {
            if (res.status >= 300) {
                throw new Error(
                    `Error on ${res.config.method} ${res.config.url} (${
						res.status
					} ${res.statusText}): ${JSON.stringify(res.data)}`
                );
            }
            return res;
        });
    }

    async getAsset(id) {
        return this.makeRequest('get', `/api/asset/${id}`);
    }

    async getTask(id) {
        return this.makeRequest('get', `/api/task/${id}`);
    }

    async requestUploadUrl(assetName) {
        return this.makeRequest(
            'post',
            `/api/asset/request-upload`, {
                name: assetName
            }
        );
    }

    async uploadFile(url, filedata) {
        // let file = fs.ReadStream | null;
        try {
            // file = fs.createReadStream(filename);
            console.log(url, filedata);
            await this.makeRequest('put', url, filedata);
        } finally {
            return
        }
    }

    async transcodeAsset(src, profile, name) {
        return this.makeRequest(
            'post',
            `/api/asset/transcode`, {
                assetId: src.id,
                name: `${src.name} (${profile.name})`,
                profile
            }
        );
    }

    async exportAsset(id, nftMetadata) {
        return this.makeRequest(
            'post',
            `/api/asset/${id}/export`, {
                ipfs: { nftMetadata }
            }
        );
    }

    // next level utilities

    async waitTask(task) {
        console.log(
            `Waiting for ${task.type} task completion... id=${task.id}`
        );


        let lastProgress = 0;
        while (
            task.status.phase !== 'completed' &&
            task.status.phase !== 'failed'
        ) {
            console.log(task.status)

            const progress = task.status.progress;
            if (progress && progress !== lastProgress) {
                console.log(` - progress: ${100 * progress}%`);
                lastProgress = progress;
            }
            new Promise(resolve => setTimeout(resolve, 1000));
            task = await this.getTask(task.id);
        }

        if (task.status.phase === 'failed') {
            throw new Error(
                `${task.type} task failed. error: ${task.status.errorMessage}`
            );
        }
        return task;
    }

    async makeRequest(method, path, data) {
        try {
            const res = await this.client.request({ method, url: path, data });
            return res.data;
        } catch (err) {
            if (!axios.isAxiosError(err) || !err.response) {
                throw err;
            }
            const { status, statusText, data } = err.response;
            let msg = JSON.stringify(data);
            if (Array.isArray(data.errors) && data.errors.length > 0) {
                msg = data.errors[0];
            }

            throw new Error(
                `Request to ${path} failed (${status} ${statusText}): ${msg}`
            );
        }
    }
}