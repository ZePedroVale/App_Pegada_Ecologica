
def doacaoEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "montante": item["montante"],
        "nome": item["nome"],
        "email": item["email"],
        "aquem": item["aquem"],
        "metodoPagamento": item["metodoPagamento"]
       

    }


def doacoesEntity(entity) -> list:
    return [doacaoEntity(item) for item in entity]

def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]