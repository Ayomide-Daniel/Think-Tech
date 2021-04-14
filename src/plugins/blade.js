module.exports = {
    methods: {
        asset(path) {
            var base_path = "https://beem.test/storage/" || '';
            return base_path + path;
        },
    },
}