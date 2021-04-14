const {Post} = require("../models");

const postsController = {
    index: async (req, res) => {
        const posts = await Post.findAll();
        return res.json(posts);
    },

    create: async (req, res) => {
        const { texto, usuarios_id, n_likes, img} = req.body; 

        const post = await Post.create({
            texto,
            usuarios_id,
            n_likes,
            img
        });

        return res.json(post);
    },

    update: async (req, res) => {
        const {id: _id } = req.params; 
        const { texto, usuarios_id, n_likes, img} = req.body; 

        const post = await Post.update({
            texto,
            usuarios_id,
            n_likes,
            img
    }, {
        where: {
            id: _id
        }
    });

    return res.json(post);
},

    delete: async (req, res) => {
        const {id: _id} = req.params;

        const post = await Post.destroy({
            where: {
                id:_id
            }
        });

        return res.json(post);
    },

    show: async (req, res) => {
        //para filtrar a busca com o id
        const { usuarios_id } = req.params;
        const post = await Post.findAll({
            where: {
                usuarios_id
            }
        });

        return res.json(post);
        
      }
}

module.exports = postsController;
