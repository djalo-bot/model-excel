(() => {

    function resolveLink(dataset) {

        const collection = dataset.bundle
            ? STORE.bundles
            : STORE.products;

        const item = collection[dataset.product || dataset.bundle];

        if (!item) return null;

        return dataset.action === "buy"
            ? item.checkout
            : item.page;

    }

    function bindButtons() {

        const buttons = document.querySelectorAll("[data-product],[data-bundle]");

        buttons.forEach(button => {

            const url = resolveLink(button.dataset);

            if (!url) return;

            button.addEventListener("click", event => {

                event.preventDefault();

                window.location.assign(url);

            });

        });

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindButtons);
    } else {
        bindButtons();
    }

})();
