module.exports = {
    proxy: {
        '/rest': {
            target: "https://dev.mapstore.geo-solutions.it/mapstore",
            secure: false,
            headers: {
                host: "dev.mapstore.geo-solutions.it"
            }
        },
        '/pdf': {
            target: "https://dev.mapstore.geo-solutions.it/mapstore",
            secure: false,
            headers: {
                host: "dev.mapstore.geo-solutions.it"
            }
        },
        '/mapstore/pdf': {
            target: "https://dev.mapstore.geo-solutions.it",
            secure: false,
            headers: {
                host: "dev.mapstore.geo-solutions.it"
            }
        },
        '/proxy': {
            target: "https://dev.mapstore.geo-solutions.it/mapstore",
            secure: false,
            headers: {
                host: "dev.mapstore.geo-solutions.it"
            }
        },
        '/docs': {
            target: "http://localhost:8081",
            pathRewrite: {'/docs': '/mapstore/docs'}
        }
    }
};
