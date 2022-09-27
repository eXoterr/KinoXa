
// UNUSED. In-page movie search
export function searchByName(query, items){
    let result = []
    for(let item of items){
        if (item.nameRu.toLowerCase().includes(query.toLowerCase())){
            result.push(item)
        }
    }

    return result
}
