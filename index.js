import express from "express";
import peliculaService from "./services/peliculaService.js";
import personajeService from "./services/personajeService.js";

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req,res) => {
    res.send('Hello World bro');
})

app.listen (port, () =>{
    console.log(`Escuchando puerto ${port}`);
})
app.get('/detallePersonaje', async (req,res) => {
    let detalle = await personajeService.detalle();
    res.status(200).send(idPelicula);
})
//------------------------------------------------------------Personaje----------------------------------------------------------------
//GET ALL perfectoo!!
app.get('/personaje', async (req,res) => {
    let personaje = await personajeService.getAll();
    res.status(200).send(personaje)
})
// GET BY ID perfecto!!
app.get('/personaje/:nombre', async (req,res) => {
    let personaje = await personajeService.getById(req.params.nombre);
    res.status(200).send(personaje)
})
// INSERT perfecto!!
app.post('/personaje', async(req,res) =>{

    console.log("En post, req:", req)
    try{
        await personajeService.insert(req.body)
        res.status(200).json({message : 'personaje creada'});
    } catch (error){
        res.status(500).json({error:'Fallo el insert browli'});
    }
})
//UPDATE perfecto!!
app.put('/personaje',async (req,res) => {
    console.log("En update, req:", req)
    try{
        await personajeService.update(req.body)
        res.status(200).json({message : 'personaje actualizada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})  
//DELETE perfecto!!
app.delete ('/personaje/:id',async (req,res) => {
    console.log("En delete, req:", req)
    try{
        await personajeService.deleteById(req.params.id)
        res.status(200).json({message : 'personaje eliminada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})


//---------------------------------------------Pelicula------------------------------------------------------
// PUNTO 7  id, imagen, título y fecha de creación.
app.get('/movies/:id',async (req,res) =>{
    let peli = await peliculaService.getPartes(req.params.id);
    res.status(200).send(peli)
})
//GET ALL 
app.get('/pelicula', async (req,res) => {
    let pelicula = await peliculaService.getAll();
    res.status(200).send(pelicula)
})
// GET BY ID
app.get('/pelicula/:id', async (req,res) => {
    let pelicula = await peliculaService.getById(req.params.id);
    res.status(200).send(pelicula)
})

// INSERT
app.post('/pelicula', async(req,res) =>{

    console.log("En post, req:", req)
    try{
        await peliculaService.insert(req.body)
        res.status(200).json({message : 'pelicula creada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})

//UPDATE perfecto!!
app.put('/pelicula',async (req,res) => {
    try{
        await peliculaService.update(req.body)
        res.status(200).json({message : 'pelicula actualizada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})
// DELETE 
app.delete ('/pelicula/:id',async (req,res) => {
    try{
        await peliculaService.deleteById(req.params.id)
        res.status(200).json({message : 'pelicula eliminada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})


