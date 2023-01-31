const { Category } = require("../models/category");
//GET /categories
const getCategories = async (req, res, next) => {
    let categories;

    try{
        categories = await Category.findAll();
    }catch (error) {
        res.status(401).json({
            message: "unable to find categories",
            error,
        });
        return;
    }

    res.json(categories);
};

//GET /categories/:id
const getCategory = async (req, res, next) => {
    let categoryID = req.params.id;

    let categoreis;
    try{
        catergory = await Category.findByPk(categoryID);
    } catch (error) {
        res.status(404).json({
            message: "unable to find category with that id",
            error,
        });
    }

    res.json(categories)
};

// POST /categories
const createCategory = async (req,res, next) => {
    const { name } = req.body;

    let category;

    try {
        category = await Category.create({
            message: "error creating category in the database",
            error: error,
        });
        return;
    } catch (error) {
        res.status(422).json({
            message: "unable to update category",
            error,
        });
        return;
    }
    }


    res.status(201).json({
        id: category.id,
        message: "category created successfully",
    });

const updateCategory = async (res, req, next) => {
    const categoryID = req.params.id;

    const { name } = req.body;
    
    let category;

    try{
        category = await Category.findByPk(categoryID);
    } catch (error) {
        res.status(404).json({
            message: "unable to find category with that id",
             error,
        });
        return;
    }

    category.name = name;

    try{
        await category.save();
    } catch (error) {
        res.status(422).json({
            message: "unable to update category",
            error,
        });
        return;
    }

    res.status(200).json({
        message: "category updated successfully",
    });
};

const deleteCategory = async (req, res, next) => {
    const categoryID = req.params.id;

    let category;

    try{
        category = await Category.findByPk(categoryID);
    }catch (error) {
        res.status(404).json({
            message: "unable to find category with that id",
            error,
        });
        return
    }

    try {
        await category.destroy();
    } catch (error) {
        res.status(422).json({
            message: "unable to delete category",
            error,
        });
        return;
    }
    
    res.status(200).json({
        message: "category deleted successfully",
    });



};


module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};