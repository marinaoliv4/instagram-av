module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false //* quando foi criado e quando foi modificado - true e false.

        }
    );


    Post.associate = (models) => {
        // relação n:1 vários posts p 1 usuario
        Post.belongsTo(models.Usuario, {
            as:"usuario", 
            foreignKey:"usuarios_id"});
        // // relação 1:n (um post p varios comentarios)
        // Post.hasMany(models.Comentario, {
        //     as:"comentarios", 
        //     foreignKey:"posts_id"});
        // // relação N:M (post tem curtidas de varios usuarios)
        // Post.belongsToMany(models.Usuario, {
        //     as: "curtiu", // alias da relação
        //     through: "curtidas", // tabela intermediária
        //     foreignKey: "posts_id",
        //     otherKey: "usuarios_id",
        //     timestamps: false
        // })
    }


    
    return Post;
}
