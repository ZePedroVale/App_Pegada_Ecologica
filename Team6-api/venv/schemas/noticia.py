# Normal way
def noticiaEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "nome": item["nome"],
        "tipo": item["tipo"],
        "descricao": item["descicao"],
        "foto": item["foto"],
        "link": item["link"]
    }


def noticiasEntity(entity) -> list:
    return [noticiaEntity(item) for item in entity]
# Best way


def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]
