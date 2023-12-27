# Normal way
def formEntity(item) -> dict:
    return {
    "id": str(item["_id"]),
    "nome": item["nome"],
    "email": item["email"],
    "porque": item["porque"],
    "como": item["como"],
    "localizacao": item["localizacao"],
    "data_inicio": item["data_inicio"],
    "data_fim": item["data_fim"],
    "aceita_termos": item["aceita_termos"]

    }


def formsEntity(entity) -> list:
    return [formEntity(item) for item in entity]
# Best way


def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]