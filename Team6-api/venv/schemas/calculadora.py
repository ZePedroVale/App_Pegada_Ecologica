# Normal way
def calculadoraEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "primeiro_nome": item["primeiro_nome"],
        "ultimo_nome": item["ultimo_nome"],
        "email": item["email"],
        "tele": item["tele"],
        "consumo_energia": item["consumo_energia"],
        "uso_transporte": item["uso_transporte"],
        "tipo_alimentacao": item["tipo_alimentacao"],
        "data_calculo": item["data_calculo"],
        "resultado_pegada": item["resultado_pegada"]


    }


def calculadorasEntity(entity) -> list:
    return [calculadoraEntity(item) for item in entity]
# Best way


def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]
