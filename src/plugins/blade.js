module.exports = {
    methods: {
        asset(path) {
            var base_path = "http://beem.test/storage/" || '';
            return base_path + path;
        },
    },
}