module.exports={
    index: async(req, res) => {
        try{
            res.render("admin/category/view_category.ejs");
        } catch(err) {
            console.log(err);
        }
    }
}