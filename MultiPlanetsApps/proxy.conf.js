const PROXY_CONFIG = {};

PROXY_CONFIG['/static/menu'] = {
    target: 'http://localhost:4300',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/static/tramitar'] = {
    target: 'http://localhost:4400',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/static/bandeja'] = {
    target: 'http://localhost:4500',
    secure: false,
    changeOrigin: false
};

module.exports = PROXY_CONFIG;
