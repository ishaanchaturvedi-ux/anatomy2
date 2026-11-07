/**
 * API Client — centralises all fetch calls to the Java backend.
 * Base URL defaults to http://localhost:8080/api/v1 but can be
 * overridden via NEXT_PUBLIC_BACKEND_URL environment variable.
 */

const BASE_URL =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BACKEND_URL) ||
  'http://localhost:8080/api/v1';

type RequestOptions = {
  params?: Record<string, string | number | boolean | undefined | null>;
  headers?: Record<string, string>;
};

function buildUrl(path: string, params?: RequestOptions['params']): string {
  const url = new URL(`${BASE_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        url.searchParams.append(k, String(v));
      }
    });
  }
  return url.toString();
}

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
  options?: RequestOptions
): Promise<T> {
  const url = buildUrl(path, options?.params);
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}: ${res.statusText}`;
    try {
      const err = await res.json();
      message = err.message || err.error || message;
    } catch (_) {}
    throw new Error(message);
  }

  // 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

export const apiClient = {
  get<T>(path: string, options?: RequestOptions): Promise<T> {
    return request<T>('GET', path, undefined, options);
  },
  post<T>(path: string, body: unknown, options?: RequestOptions): Promise<T> {
    return request<T>('POST', path, body, options);
  },
  put<T>(path: string, body: unknown, options?: RequestOptions): Promise<T> {
    return request<T>('PUT', path, body, options);
  },
  delete<T>(path: string, options?: RequestOptions): Promise<T> {
    return request<T>('DELETE', path, undefined, options);
  },
};
