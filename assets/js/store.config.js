const STORE = {

    brand: {
        name: "Excel Template",
        shopUrl: "https://chariow.com/votre-boutique"
    },

    products: {

        stock: {
            id: "stock-manager",
            name: "Gestion de Stock",
            page: "https://chariow.com/p/stock-manager",
            checkout: "https://chariow.com/checkout/stock-manager"
        },

        budget: {
            id: "budget-master",
            name: "Budget Personnel",
            page: "https://chariow.com/p/budget-master",
            checkout: "https://chariow.com/checkout/budget-master"
        },

        project: {
            id: "project-manager",
            name: "Gestion de Projet",
            page: "https://chariow.com/p/project-manager",
            checkout: "https://chariow.com/checkout/project-manager"
        },

        accounting: {
            id: "accounting-pro",
            name: "Comptabilité",
            page: "https://chariow.com/p/accounting-pro",
            checkout: "https://chariow.com/checkout/accounting-pro"
        },

        dashboard: {
            id: "dashboard-pro",
            name: "Dashboard",
            page: "https://chariow.com/p/dashboard-pro",
            checkout: "https://chariow.com/checkout/dashboard-pro"
        }

    },

    bundles: {

        business: {
            id: "business-pack",
            page: "https://chariow.com/p/business-pack",
            checkout: "https://chariow.com/checkout/business-pack"
        },

        premium: {
            id: "premium-pack",
            page: "https://chariow.com/p/premium-pack",
            checkout: "https://chariow.com/checkout/premium-pack"
        }

    }

};

Object.freeze(STORE);
