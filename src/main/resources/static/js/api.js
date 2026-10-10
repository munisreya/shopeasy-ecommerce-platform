// ==========================================
// api.js — All backend API calls + helpers
// ==========================================

const API_BASE = '';

// Currency formatter — always use this for prices
function formatPrice(amount) {
    return '₹' + Number(amount).toFixed(2);
}

// ---- Token helpers ----
function getToken() { return localStorage.getItem('token'); }
function setToken(token) { localStorage.setItem('token', token); }
function clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
}
function getEmail() { return localStorage.getItem('email'); }
function getRole() { return localStorage.getItem('role'); }
function isLoggedIn() { return !!getToken(); }

// ---- API request wrapper ----
async function apiRequest(path, method = 'GET', body = null) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(API_BASE + path, options);
    const contentType = res.headers.get('content-type');
    let data = null;
    if (contentType && contentType.includes('application/json')) {
        data = await res.json();
    } else {
        data = await res.text();
    }
    if (!res.ok) {
        const msg = (data && data.error) ? data.error : 'Request failed (' + res.status + ')';
        throw new Error(msg);
    }
    return data;
}

// ---- Auth APIs ----
async function register(name, email, password) {
    return apiRequest('/api/auth/register', 'POST', { name, email, password });
}
async function login(email, password) {
    return apiRequest('/api/auth/login', 'POST', { email, password });
}

// ---- Product APIs ----
async function getProducts() { return apiRequest('/api/products'); }
async function getProduct(id) { return apiRequest('/api/products/' + id); }

// ---- Cart APIs ----
async function getCart() { return apiRequest('/api/cart'); }
async function addToCart(productId, quantity) {
    return apiRequest('/api/cart/add?productId=' + productId + '&quantity=' + quantity, 'POST');
}
async function removeFromCart(productId) {
    return apiRequest('/api/cart/remove/' + productId, 'DELETE');
}

// ---- Order APIs ----
async function placeOrder(payload) {
    return apiRequest('/api/orders/place', 'POST', payload);
}
async function payOrder(orderId) {
    return apiRequest('/api/orders/' + orderId + '/pay', 'POST');
}
async function getMyOrders() { return apiRequest('/api/orders'); }