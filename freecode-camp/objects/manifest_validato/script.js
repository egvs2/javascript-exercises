const normalizeUnits = (manifest) => {
    const copia_normal = {...manifest}
    if(copia_normal.unit === "lb"){
        copia_normal.weight = copia_normal.weight*0.45;
        copia_normal.unit = "kg"
    }
    return copia_normal;
}

const validateManifest = (manifest) => {
    const copia_valida = {...manifest}
    const retorno = {}
    
    // 1. containerId (Deve existir, ser número, ser inteiro e ser maior que 0)
    if(!copia_valida.hasOwnProperty("containerId")){
        retorno["containerId"] = "Missing";
    }else if(typeof copia_valida.containerId !== "number" || !Number.isInteger(copia_valida.containerId) || copia_valida.containerId <= 0){
        retorno["containerId"] = "Invalid";
    }
    
    // 2. destination (Deve existir, ser string e não estar vazia nem com espaços)
    if(!copia_valida.hasOwnProperty("destination")){
        retorno["destination"] = "Missing";
    }else if(typeof copia_valida.destination !== "string" || copia_valida.destination.trim() === ""){
        retorno["destination"] = "Invalid"; // Corrigido aqui de containerId para destination
    }
    
    // 3. weight (Deve existir, ser número, não ser NaN e ser maior que 0)
    if(!copia_valida.hasOwnProperty("weight")){
        retorno["weight"] = "Missing";
    }else if(typeof copia_valida.weight !== "number" || Number.isNaN(copia_valida.weight) || copia_valida.weight <= 0){
        retorno["weight"] = "Invalid";
    }
    
    // 4. unit
    if(!copia_valida.hasOwnProperty("unit")){
        retorno["unit"] = "Missing";
    }else if(copia_valida.unit !== "lb" && copia_valida.unit !== "kg"){
        retorno["unit"] = "Invalid";
    }
    
    // 5. hazmat
    if(!copia_valida.hasOwnProperty("hazmat")){
        retorno["hazmat"] = "Missing";
    }else if(typeof(copia_valida.hazmat) !== "boolean"){
        retorno["hazmat"] = "Invalid";
    }

    return retorno;
}

const processManifest = (manifest) => {
    // Guardamos o objeto de erros em uma variável para não rodar a função duas vezes
    const erros = validateManifest(manifest);
    
    // Checa se o objeto de erros está vazio (ou seja, sucesso!)
    if(Object.keys(erros).length === 0){
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    }else{
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(erros); // Exibe o objeto de erros diretamente
    }
}