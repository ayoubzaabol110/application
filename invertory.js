const product = require("./product")
const fs = require("fs")

let produit = []
produit = fs.readFileSync("data.json");
produit = JSON.parse(produit); // get the old products
let name, description, quantity, price;


const prompt = require("prompt-sync")()
class invarty {
    ajouter() {
        let produits = new product()
        do{
            produits.name = prompt("entree le name de produits:")
            if (!produits.name) {
                console.log("entree le name de produit")
            }
        }while(!produits.name)
       
        produits.description = prompt("entree le description de produits:")

        do  {
        produits.quantity = parseInt(prompt("entree le quantiter le produits:"))
        if (isNaN(produits.quantity) || produits.quantity <= 0) {
            console.log("entrer un nv nm ")

         } } while(isNaN(produits.quantity) || produits.quantity <= 0);
do{
    produits.price = parseInt(prompt("entree le price:"))
    if (isNaN(produits.price) ||produits.price < 0) {
        console.log("number de price positif ")
    }

}while(isNaN(produits.price ) || produits.price<= 0)
      
        produit.push(produits)
        const data = JSON.stringify(produit, null, 4)
        const donner = fs.writeFileSync("data.json", data)
     }
    afficher() {
        const data = fs.readFileSync("data.json", "utf-8")
        const produiter = JSON.parse(data)
        produiter.forEach((product, index) => {
            console.log(`${index + 1}. nom - ${product.name}
           - Description :${product.description} 
           - Quantité: ${product.quantity}
            - Prix: ${product.price} `);
        });
    }
    deleteP() {

        console.log("1. Supprimer un produit par ID");
        let id = prompt("Entrez l'ID du produit à supprimer : ");

        if (id >= 0 && id <= produit.length) {
            produit.splice(id - 1, 1);
            fs.writeFileSync("data.json", JSON.stringify(produit));
        } else { console.log("ne pas supermer") }
    }
    modifier() {
        let id = prompt("Entrez l'ID du produit à modifer : ")
        if (id >= 0 && id <= produit.length) {
            name = prompt("entre le valeur name ");
            description = prompt("entre le valeur description  ");
            quantity = Number(prompt("entre le valeur quantity "));
            price = Number(prompt("entre le valeur price "));

            produit[id - 1]["name"] = name;
            produit[id - 1]["description"] = description;
            produit[id - 1]["quantity"] = quantity;
            produit[id - 1]["price"] = price;

            fs.writeFileSync("data.json", JSON.stringify(produit));
        }else{
            console.log("il n ya pas modier")
        }

    }
}

const AA = new invarty();
while (true) {
    console.log("1=Ajouter un produit")
    console.log("2=Afficher tous les produits.")
    console.log("3=Mettre à jour un produit.")
    console.log("4=Supprimer un produit.")
    console.log("5=quiter")
    const choix = prompt("entre le choix :")
    switch (choix) {
        case "1":
            console.log(AA.ajouter())
            break;
        case "2":
            console.log(AA.afficher());

            break;
        case "3":
            console.log(AA.modifier())
            break;
        case "4":
            console.log(AA.deleteP())
        case "5":
            return
            break

    }
}