const produtos = require("../database/produtos.json");

module.exports = {
    index: (req, res) => {
            return res.render("adminListar", {
            produtos,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/adminListar.css",
        })
    },
    //exibir tela de criação
    create:(req, res)=>{
        console.log("chegou aqui pagina criar")
        
        res.render('cadastro-prod', { produto:null,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/adminListar.css",
            
        });

    },
    // Criar novo produto
    store:(req, res)=>{
        
        //virá a lógica
        res.redirect("/admin/produto")
       

    },

    edit: (req, res) => {
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id == id);
        produto = produto[0]
        var arrayImg = produto.imagem;
        var img = arrayImg[0]
        console.log(img)
        produto.imagem = img
        var titulo = "EDITAR PRODUTO";
       return res.render('cadastro-prod', {
            produto, titulo,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/cadastro-prod.css",
        });

    },

    update:(req, res)=>{
        //logica para atualizar
        res.redirect("/admin/produto")
    },
    //exibir a tela para mostrar o produto
    delete:(req, res)=>{

    },
    //apagar o item do banco
    destroy:(req, res)=>{
        

    }

    

}