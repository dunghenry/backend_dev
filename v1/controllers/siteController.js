class siteController {
    static async getHomePage(req, res, next) {
        res.render('index', {
            title: 'HomePage'
        })
    }
}

export default siteController;